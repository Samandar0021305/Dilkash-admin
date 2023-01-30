FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN yarn add --network-timeout 100000
COPY ./ ./
EXPOSE 1033
CMD ["yarn", "start"]