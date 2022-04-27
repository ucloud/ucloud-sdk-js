help:
	@echo "help"

.PHONY: install
install:
	npm install

.PHONY: test
test:
	npm run test

.PHONY: test-cov
test-cov:
	npm run coverage

.PHONY: lint
lint:
	npm run prettier:check

.PHONY: fmt
fmt: install
	npm run prettier:write

.PHONY: build
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
		--public \
		-s https://git.ucloudadmin.com/apispec/apispec.git \
		/Users/user/code/oas/plugins/template-opensdk-js .
