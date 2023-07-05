# get image nodejs and set image as builder
FROM node:20.3.1-alpine3.17 as builder

# set working directory
WORKDIR /app

# copy package.json to /app in container
COPY ./package.json ./

# run npm install
RUN npm i

# copy source file to /app in container
COPY . .

# build project production
RUN npm run build

# start server
CMD ["npm", "run", "start"]