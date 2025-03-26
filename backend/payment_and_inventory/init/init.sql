CREATE DATABASE IF NOT EXISTS paymentDB;

USE paymentDB;

CREATE TABLE IF NOT EXISTS transactions (
                              id INT AUTO_INCREMENT PRIMARY KEY,
                              amount FLOAT,
                              currency VARCHAR(10) NOT NULL,
                              sender VARCHAR(255) NOT NULL,
                              receiver VARCHAR(255) NOT NULL,
                              payment_id VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS menu
(
    id   INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

create table if not EXISTS inventory
(
    id       int,
    uuid     varchar(256) not null primary key,
    name     varchar(255) not null,
    stock    int          not null,
    price    float        not null,
    currency varchar(10)  not null,
    usedIn   int          null
);