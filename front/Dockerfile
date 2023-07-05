# get image nodejs
FROM node:20.3.1-alpine3.17

# set working directory
WORKDIR /app

# copy package.json to /app in container
COPY ./package.json ./

# run npm install
RUN npm i

# copy source file to /app in container
COPY . .

# start app
CMD ["npm", "run", "start"]

# docker build -f Dockerfile -t client .
# docker run -it -p 3000:3000 client

