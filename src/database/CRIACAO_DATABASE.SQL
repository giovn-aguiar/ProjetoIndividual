/* Caso ainda não tenha o banco instalado no seu computador, crie ele utilizando esse script */

CREATE DATABASE underline;

USE underline;

CREATE TABLE usuario(
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(45),
    nick VARCHAR(45),
    email VARCHAR (100),
    senha VARCHAR(45)
);

CREATE TABLE metricasFase(
    idMetricas INT AUTO_INCREMENT,
    fkUsuario INT, 
    fkFase INT, 
    dataJogo DATETIME DEFAULT NOW(), 
    tempo iNT, 
    ppm DECIMAL(3,1),
    erros INT, 
    acertos INT,
    CONSTRAINT fkFase FOREIGN KEY (fkfase) REFERENCES fase(idFase),
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
)

CREATE TABLE log(
    idLog INT PRIMARY KEY AUTO_INCREMENT, 
    fkUsuario INT, 
    dataLog DATETIME DEFAULT NOW(),
    CONSTRAINT logUser FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
)

CREATE TABLE frases(
    idFrase INT PRIMARY KEY AUTO_INCREMENT,
    frase VARCHAR(300)
)
 
CREATE TABLE fase(
    idFase INT PRIMARY KEY AUTO_INCREMENT,
    fkFrase INT UNIQUE, 
    tempoLimite INT DEFAULT 20,
    CONSTRAINT fkFrase FOREIGN KEY (fkFrase) REFERENCES frases(idFrase)
)

