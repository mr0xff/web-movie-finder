# builder 
FROM node:22-alpine AS builder 
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build 

# runner 
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD nginx -g "daemon off;"