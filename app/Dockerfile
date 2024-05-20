# устанавливаем официальный образ Node.js
FROM node:19-alpine

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 9200

CMD [ "node", "index.js" ]

