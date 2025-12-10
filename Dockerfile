FROM nginx:alpine
COPY src/index.html /usr/share/nginx/html/index.html
COPY src/style.css /usr/share/nginx/html/style.css
COPY src/script.js /usr/share/nginx/html/script.js
EXPOSE 80
