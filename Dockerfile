
FROM node:18-alpine

WORKDIR /user/src/app

COPY . .

RUN chown -R node /user/src/app

RUN npm ci

USER node

CMD ["npm", "run", "start"]
