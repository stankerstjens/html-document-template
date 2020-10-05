

all: dist/index.html

dist/index.html: webpack.config.js src/*
	npm run build
