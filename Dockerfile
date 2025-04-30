FROM nginx:1.27.1-alpine

COPY ./dist/app0/browser /usr/share/nginx/html

COPY nginx.conf   /etc/nginx/conf.d/default.conf

EXPOSE 80
