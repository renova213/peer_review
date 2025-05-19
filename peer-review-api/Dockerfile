FROM node:22

WORKDIR /app

COPY package*.json tsconfig*.json .sequelizerc jest.config.js nodemon.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4040

CMD ["npm", "start"]
