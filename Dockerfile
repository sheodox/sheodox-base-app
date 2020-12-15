FROM node:12-alpine AS dev
WORKDIR /usr/src/app
RUN npm i -g typeorm

ENV NODE_ENV=development
CMD typeorm migration:run && npm run start:dev

FROM dev AS prod
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build-server:prod
RUN npm run build

CMD typeorm migration:run && node src/server/app.js