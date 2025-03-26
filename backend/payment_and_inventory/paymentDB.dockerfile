FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=1234
ENV MYSQL_DATABASE=paymentDB

COPY init/init.sql /docker-entrypoint-initdb.d/
