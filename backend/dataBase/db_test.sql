drop database if exists db_test;
create database db_test;
use db_test;

create table classrooms (
    idC int(10) not null auto_increment primary key,
    nameC varchar(20) not null,
    studentsC int(30) not null,
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp
)engine=InnoDB;

INSERT INTO classrooms VALUES 
(1, 'class1', 30, default, default),
(2, 'class2', 20, default, default);

create table users (
    idU int(10) not null auto_increment primary key,
    passU varchar(20) not null,
    nameU varchar(30) not null,
    emailU varchar(50) not null,
    tfU int(9) not null,
    idCU  int(10) not null ,
    FOREIGN KEY (idCU) REFERENCES classrooms(idC),
    createdAt datetime default current_timestamp,
    updatedAt datetime default current_timestamp
)engine=InnoDB;

INSERT INTO users VALUES
(1, 'Peter', 'Peter', 'Peter@gmail.com',960661533,1, default, default),
(2, 'Brad', 'Brad', 'Brad@gmail.com', 951833925,2, default, default);

create table ads (
idA int(10) not null auto_increment primary key,
nameA varchar(50) not null,
descriptionA varchar(100) not null,
idCA int (10) not null,
FOREIGN KEY (idCA) REFERENCES classrooms(idC),
createdAt datetime default current_timestamp,
updatedAt datetime default current_timestamp
)engine=InnoDB;

INSERT INTO ads VALUES
(1,'Work available at Technologie world','We are looking for a developper fullstack java',1, default, default),
(2,'New Technologie discover','In the north of America a new scientist dicover the virtual car ',2, default, default);

