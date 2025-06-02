FROM node:22
WORKDIR /app
COPY . .
RUN yarn install && yarn build
EXPOSE 3000
CMD yarn preview --host --port 3000