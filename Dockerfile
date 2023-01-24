FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN yarn
COPY ./ ./
EXPOSE 1033
CMD ["yarn", "start"]