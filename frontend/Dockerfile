FROM node:14.15.0

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]