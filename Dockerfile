FROM node:8-alpine

WORKDIR /app
COPY package.json ./package.json 
COPY package-lock.json ./package-lock.json
RUN npm install
COPY . .
RUN npm run build --prod

CMD [ "npm", "run", "start:prod" ]
