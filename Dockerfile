FROM node:10.15.1-jessie-slim

WORKDIR /smallcase

COPY ./package.json .


RUN npm install --silent --production

COPY ./build .
COPY ./.env .

ENV NODE_ENV "production"

EXPOSE 4000

CMD ["node", "index.js"]