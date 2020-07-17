FROM node:13

COPY config /config
COPY public /public
COPY src /src
COPY server /server
COPY package.json /
COPY package-lock.json /
RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]