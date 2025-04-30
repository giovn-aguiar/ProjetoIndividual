/* Caso ainda não tenha o banco instalado no seu computador, crie ele utilizando esse script */

CREATE DATABASE underline;

USE underline;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(45),
nick VARCHAR(45),
email VARCHAR (100),
senha VARCHAR(45));

