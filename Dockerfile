FROM node:18.16-alpine3.18

RUN yarn global add @nestjs/cli \
  && apk add protobuf

WORKDIR /app

COPY yarn.lock package.json node_modules/ .

RUN yarn install

CMD ["yarn", "start:dev"]
