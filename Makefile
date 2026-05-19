UID=$(shell id -u)
GID=$(shell id -g)

dockerconfig-main=docker-compose.yml
dockerconfig-dist=appStatic/docker-compose.yml

up:
	docker compose -f ${dockerconfig-main} up --remove-orphans -d

down:
	docker compose -f ${dockerconfig-main} down

build:
	docker compose -f ${dockerconfig-main} build && \
	docker compose -f ${dockerconfig-main} pull

logs:
	docker compose -f ${dockerconfig-main} logs keyforge-inserts

dist_up:
	docker compose -f ${dockerconfig-dist} build && \
	docker compose -f ${dockerconfig-dist} pull && \
	docker compose -f ${dockerconfig-dist} up --remove-orphans -d

dist_down:
	docker compose -f ${dockerconfig-dist} down

dist_build:
	docker compose -f ${dockerconfig-dist} build && \
	docker compose -f ${dockerconfig-dist} pull

dist_logs:
	docker compose -f ${dockerconfig-dist} logs keyforge-inserts-static

dist_remove:
	sudo rm -rf appStatic/dist

install:
	docker compose run --rm -u ${UID}:${GID} keyforge-inserts npm install --legacy-peer-deps

bash:
	docker compose run --rm -u ${UID}:${GID} keyforge-inserts sh

package_web:
	docker compose run --rm -u ${UID}:${GID} keyforge-inserts npm run build

package_linux:
	docker compose run --rm -u ${UID}:${GID} keyforge-inserts npm run package:linux

package_win:
	docker compose run --rm -u ${UID}:${GID} keyforge-inserts npm run package:win
