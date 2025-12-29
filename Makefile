SHELL := /bin/sh

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

lint:
	npm run lint

test:
	npm run test

format:
	npm run format

clean:
	rm -rf dist node_modules .vite

