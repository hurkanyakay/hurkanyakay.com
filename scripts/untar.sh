#!/usr/bin/env sh
set -x

#export NODE_ENV=production
#export NVM_BIN=$HOME/.nvm/versions/node/v6.9.0/bin

cd /var/www/html/hurkanyakay.com/travisbuild/ && \
tar zxvf package.tgz -C . && \