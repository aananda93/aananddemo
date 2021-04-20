from fabric.api import local

def webpack():
    local('rm -rf reactpython/static/bundles/local/*')
    local('rm -rf reactpython/static/bundles/prod/*')
    local('node_modules/.bin/webpack --config webpack.prod.config.js --progress --colors')
