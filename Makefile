SHELL := /bin/bash

release:
	@echo "Hey, the latest version is: `git describe --tags`"
	@read -p "Enter NEW Version Name:" VERSION; \
	git checkout -b release/v$$VERSION; \
	git tag v$$VERSION; \
	git push origin release/v$$VERSION; \
	git push origin v$$VERSION; \
	release
