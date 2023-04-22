#!/bin/sh
set -e

npm install && npm install --only=dev ## Note this line, rest is copy+paste from original entrypoint

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

npx prisma migrate dev

exec "$@"
