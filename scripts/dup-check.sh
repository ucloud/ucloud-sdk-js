#!/usr/bin/env bash
# G2 重复闸 —— php / js 生成代码重复顶层声明检测。
#
# 背景（实测，非推断）：
#   · php：`php -l` 能抓重复 `use`（编译期符号表冲突），但对同一文件内两个
#     `class Foo` 一律 exit 0 —— 那是运行期错误，lint 阶段看不到。
#   · js/ts：`tsc --noEmit` 对重复的 `export interface Foo` 走 declaration merging，
#     静默通过；只有同一 interface 内重复成员才报 TS2300。
# 故两者都需要显式的重复声明检测。
#
# 用法：dup-check.sh php <目录>
#       dup-check.sh ts  <目录>
# 退出码：0 = 无重复；1 = 发现重复（逐条打印 文件:声明名 出现次数）

set -uo pipefail

lang="${1:?用法: dup-check.sh <php|ts> <目录>}"
root="${2:?用法: dup-check.sh <php|ts> <目录>}"

case "$lang" in
  php)
    ext='*.php'
    # 顶层 class / interface / trait 声明；兼容 final / abstract 前缀
    pattern='^[[:space:]]*(final[[:space:]]+|abstract[[:space:]]+)?(class|interface|trait)[[:space:]]+[A-Za-z0-9_]+'
    ;;
  ts)
    ext='*.ts'
    # 导出的顶层 interface / class / type / enum 声明
    pattern='^export[[:space:]]+(interface|class|type|enum)[[:space:]]+[A-Za-z0-9_]+'
    ;;
  *)
    echo "不支持的语言: $lang（仅 php / ts）" >&2
    exit 2
    ;;
esac

findings=0
scanned=0

while IFS= read -r f; do
  scanned=$((scanned + 1))
  # 抽出声明名（每行最后一个标识符），排序后取重复项
  dups=$(grep -oE "$pattern" "$f" 2>/dev/null | awk '{print $NF}' | sort | uniq -d)
  if [ -n "$dups" ]; then
    while IFS= read -r name; do
      [ -z "$name" ] && continue
      n=$(grep -cE "$pattern[[:space:]]*\$|${pattern}([[:space:]]|\{)" "$f" 2>/dev/null || true)
      lines=$(grep -nE "$pattern" "$f" | awk -v want="$name" '$NF==want || $0 ~ ("[[:space:]]"want"([[:space:]]|\\{|$)") {split($0,a,":"); printf "%s,", a[1]}')
      echo "  ${f}:${lines%,} 重复声明 '${name}'"
      findings=$((findings + 1))
    done <<< "$dups"
  fi
done < <(find "$root" -name "$ext" -type f)

if [ "$findings" -gt 0 ]; then
  echo "G2 重复闸失败：发现 $findings 处（扫描 $scanned 个文件）"
  exit 1
fi

echo "G2 重复闸通过：$scanned 个文件无重复顶层声明"
exit 0
