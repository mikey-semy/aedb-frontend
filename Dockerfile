FROM node:21-alpine3.19

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn install

COPY . ./

EXPOSE 3000

CMD ["yarn", "dev", "--host", "0.0.0.0"]