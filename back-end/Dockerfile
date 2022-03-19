FROM node:12.18.1

RUN npm install --global nodemon

WORKDIR /usr/src/app

COPY package*.json ./

#RUN npm install
RUN npm ci --only=production

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
#CMD [ "node", "server.js" ]
