SHELL := /bin/bash

release:
	@echo "Hey, the latest version is: `git tag -l --sort=-v:refname | head -n 1`"
	@read -p "Enter NEW Version Name:" VERSION; \
	npm --no-git-tag-version version $$VERSION; \
	git add package.json; \
	git commit -m "Bump package.json version to $$VERSION [skip ci]"; \
	git checkout -b release/v$$VERSION; \
	git tag v$$VERSION; \
	git push origin release/v$$VERSION; \
	git push origin v$$VERSION; \
	release
