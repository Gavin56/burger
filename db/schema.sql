drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
    id int auto_increment not null,
    burger_name varchar(30) not null,
    devoured boolean not null,
    primary key (id)
);

select * from burgers;