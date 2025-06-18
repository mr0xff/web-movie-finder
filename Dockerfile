FROM node:22
COPY . . 
WORKDIR /app
RUN yarn install
RUN yarn test
RUN yarn build 
CMD yarn preview
EXPOSE 4173