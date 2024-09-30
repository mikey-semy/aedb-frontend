FROM node:21-alpine3.19

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn build

RUN yarn global add serve

EXPOSE 3000

RUN yarn serve
