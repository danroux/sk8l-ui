# https://hub.docker.com/_/node/tags?page=1&name=bookworm-slim <- look for vulnerabilities
# https://hub.docker.com/_/node/tags?name=22.14
# https://github.com/primer/octicons/blob/main/package.json
FROM node:23.11.0-bookworm-slim AS deps

RUN groupadd --system --gid 101 nginx \
    && useradd --system --gid nginx --create-home --home /home/nginx --comment "nginx user" --shell /bin/bash --uid 101 nginx \
    && chown -R 101:101 /home/nginx

WORKDIR /home/nginx
ENV npm_config_cache=/home/nginx/node_modules/.cache
COPY package*.json yarn.lock .yarnrc.yml .

RUN node -p "process.arch" \
    && echo $TARGETPLATFORM && echo $TARGETOS && echo $TARGETARCH
RUN mkdir -p $(pwd)/node_modules/.cache  \
    && corepack enable \
    && yarn config set --home enableTelemetry 0 \
    && yarn install

# https://hub.docker.com/_/node/tags?name=22.14
# https://hub.docker.com/r/arm64v8/node/tags
FROM --platform=${TARGETPLATFORM} node:23.11.0-alpine3.21 AS release

LABEL org.opencontainers.image.source=https://github.com/danroux/sk8l-ui
LABEL org.opencontainers.image.description="sk8l-ui dev image"
LABEL org.opencontainers.image.licenses=MIT

ARG TARGETPLATFORM TARGETOS TARGETARCH
ENV npm_config_cache=/usr/app/node_modules/.cache
WORKDIR /usr/app

# not actually needed locally, but to keep initContainer command working
RUN mkdir -p /app_tmp/ \
    && echo "#!/bin/sh" > /app_tmp/replace-env-vars.sh \
    && chmod +x /app_tmp/replace-env-vars.sh

RUN addgroup -g 101 nginx \
    && adduser -u 101 -G nginx -s /bin/sh -D nginx

RUN chown -R 101:101 $(pwd)

COPY --chown=101:101 --from=deps /home/nginx/node_modules/ ./node_modules
COPY --chown=101:101 --from=deps /home/nginx/package*.json /home/nginx/yarn.lock /home/nginx/.yarnrc.yml .

RUN corepack enable \
    && yarn config set --home enableTelemetry 0 \
    && yarn install
# RUN npm config set cache /usr/app/.node_modules_cache --global

RUN chown -R 101:101 $(pwd)/.yarn

COPY --chown=101:101 . .

EXPOSE 8001
ENV HOST=0.0.0.0
ENV PORT=8001
USER 101

CMD [ "npx", "yarn", "dev" ]
# CMD [ "npx", "serve", "-s", "dist", "--ssl-key", "/etc/sk8l-certs/server-key.pem", "--ssl-cert", "/etc/sk8l-certs/server-cert.pem" ]

# https://cli.vuejs.org/guide/deployment.html#docker-nginx
