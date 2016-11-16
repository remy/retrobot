#!/bin/bash
set -ve

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "Pull request not trigerring deploy..."
  exit 0
fi
if [ "$TRAVIS_BRANCH" == "develop" ]; then
  echo "Deploying ${COMMIT_HASH} on ${DEPLOY_ENV} env"
  curl -i -H "Accept: application/json" -H "Content-Type: application/json" \
       -X POST -d "{\"commit_msg\":\"${COMMIT_MESSAGE}\", \
                    \"commit_hash\":\"${COMMIT_HASH}\"}" \
       https://my.dev.snyk.io/${DEPLOY_TOKEN}
else
  echo "Building branch ${TRAVIS_BRANCH}, not trigerring deploy"
  exit 0
fi

export COMMIT_MESSAGE=`git log -n 1 --format='commit %h %s'`
export COMMIT_HASH=${TRAVIS_COMMIT}
