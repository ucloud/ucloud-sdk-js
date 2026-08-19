help:
	@echo "help"

.PHONY: test
test:
	npm run test

test-cov:
	npm run coverage

# CI 门禁：生成代码必须能通过类型检查、且无重复声明。
#   G1 `tsc --noEmit` 覆盖 tsconfig include 的 src/**/*（含 services/ 下全部生成代码）。
#      这个仓此前完全没有类型检查入口——`npm run build` 会写 lib/，不适合放进门禁。
#   G2 `tsc` 对同一文件内重复的 `export interface Foo` 走 declaration merging，
#      静默通过、不报错，所以 G1 抓不到重复声明，必须另加显式检测。
#      （对照 go：重复声明是编译错误，G1 天然覆盖，故 go 侧无需此闸。）
# 代码风格（tslint / prettier）不进门禁，理由见 .github/workflows/ci.yml。
.PHONY: ci-syntax
ci-syntax:
	npx tsc --noEmit
	@bash $(CURDIR)/scripts/dup-check.sh ts src

lint:
	npm run tslint
	npm run prettier:check

fmt:
	npm run prettier:write

build:
	npm run publish	

gen:
	ucloud-spec create opensdk \
		--only "UFS" \
    	--only "UDisk" \
    	--only "UHost" \
    	--only "PathX" \
    	--only "UDDB" \
    	--only "UCDN" \
    	--only "UNet" \
    	--only "VPC2.0" \
    	--only "UDB" \
    	--only "UMem" \
    	--only "ULB" \
    	--only "Cube" \
    	--only "UK8S" \
    	--only "IPSecVPN" \
    	--only "UAccount" \
    	--only "UDPN" \
    	--only "UBill" \
    	--only "UPHost" \
    	--only "UFile" \
    	--only "USMS" \
    	--only "UEC" \
    	--only "UVMS" \
    	--only "UPhone" \
		--public \
		-s $(HOME)/.oas/vcs/git.ucloudadmin.com/apispec/apispec/specification \
		$(HOME)/.oas/vcs/git.ucloudadmin.com/apispec/template-opensdk-js .

