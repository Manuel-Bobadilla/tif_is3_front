FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY index.html /var/www/html/
COPY app.js /var/www/html/
EXPOSE 80
CMD /usr/sbin/nginx -g "daemon off;"

