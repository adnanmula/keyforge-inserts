UID=$(shell id -u)
GID=$(shell id -g)

up:
	docker compose up

down:
	docker compose down

build:
	docker compose build && \
	docker compose pull

install:
	docker compose run --rm -u ${UID}:${GID} burger-inserts npm install --legacy-peer-deps

bash:
	docker compose run --rm -u ${UID}:${GID} burger-inserts sh

logs:
	docker compose logs -f burger-inserts

package_linux:
	docker compose run --rm -u ${UID}:${GID} burger-inserts npm run package:linux

package_win:
	docker compose run --rm -u ${UID}:${GID} burger-inserts npm run package:win
