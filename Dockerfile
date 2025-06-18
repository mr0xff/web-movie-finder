FROM node:22
COPY . . 
WORKDIR /app
RUN yarn install
CMD yarn preview
EXPOSE 4173