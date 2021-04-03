# pull official base image
FROM node:14.15.3-alpine

WORKDIR /app

COPY build /app/build

COPY server.js .

RUN npm install express

COPY  package.json .

EXPOSE 5000

CMD ["node", "server.js"]