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

# build app
RUN npm run build

# get image nginx
FROM nginx

EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/ssl/localhost.crt /etc/ssl/certs/localhost.crt
COPY ./nginx/ssl/localhost.key /etc/ssl/private/localhost.key
COPY --from=builder /app/build /usr/share/nginx/html

# docker build -f Dockerfile -t client .
# docker run -it -p 80:80 -p 443:443 client

