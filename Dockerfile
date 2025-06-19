# FROM node:22
# COPY . . 
# WORKDIR /app
# RUN yarn install
# CMD yarn preview --host
# EXPOSE 4173
FROM httpd
COPY dist/. htdocs/