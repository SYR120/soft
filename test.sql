CREATE DATABASE IF NOT EXISTS mydb;
USE mydb;

CREATE TABLE users (
    name VARCHAR(100) not null,
    email VARCHAR(100),
    primary key(name)
);

INSERT INTO users VALUES
('name1', 'email1'),
('name2', 'email2'),
('name3', 'email3');
/*여기서 쓰면 실제 저장X*/