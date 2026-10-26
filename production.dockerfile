# https://hub.docker.com/_/node/tags?page=1&name=bookworm-slim <- look for vulnerabilities
# https://github.com/primer/octicons/blob/main/package.json

# https://hub.docker.com/r/microsoft/devcontainers-typescript-node
# https://mcr.microsoft.com/v2/devcontainers/typescript-node/tags/list
FROM node:26-bookworm-slim AS build-stage

ARG TARGETPLATFORM TARGETOS TARGETARCH
ENV npm_config_cache=/usr/app/node_modules/.cache

WORKDIR /usr/app

COPY package*.json yarn.lock .yarnrc.yml .

RUN node -p "process.arch" \
    && echo $TARGETPLATFORM && echo $TARGETOS && echo $TARGETARCH
RUN npm install -g --force corepack \
    && corepack enable \
    && yarn config set --home enableTelemetry 0

ENV YARN_CACHE_FOLDER=/root/.yarn/berry/cache
RUN --mount=type=cache,target=/root/.yarn/berry/cache \
    yarn install --immutable

COPY . .

RUN yarn build

FROM nginx:1.25.4-alpine3.18-slim AS production-stage
LABEL org.opencontainers.image.source=https://github.com/danroux/sk8l-ui
LABEL org.opencontainers.image.description="sk8l-ui image"
LABEL org.opencontainers.image.licenses=MIT

WORKDIR /app

ENV APP_PORT=8001
EXPOSE $APP_PORT
ENV PORT=$APP_PORT
ENV HOST=0.0.0.0

COPY --from=build-stage /usr/app/dist /app_tmp
# COPY nginx.conf /etc/nginx/nginx.conf

COPY ./run_app.sh /app_tmp
COPY ./replace-env-vars.sh /app_tmp

# STOPSIGNAL SIGQUIT
# RUN addgroup -g 1000 node \
#     && adduser -u 1000 -G node -s /bin/sh -D node
# nginx
RUN chown -R 101:101 /app /app_tmp
USER 101

# https://cli.vuejs.org/guide/deployment.html#docker-nginx
# CMD ["./run_app.sh", "&&", "npx", "serve", "-s", "dist"]
CMD ["./run_app.sh"]
