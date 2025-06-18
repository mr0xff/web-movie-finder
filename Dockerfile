FROM node:22
COPY . . 
WORKDIR /app
RUN yarn install
RUN yarn test
CMD yarn preview
EXPOSE 4173