#!/usr/bin/env sh
set -x

cd scripts && \
tar -czf package.tgz -C ../ public && \
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./untar.sh