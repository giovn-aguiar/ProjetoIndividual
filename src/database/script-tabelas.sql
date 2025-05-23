CREATE DATABASE underline;
USE underline;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) NOT NULL UNIQUE,
	senha VARCHAR(50) NOT NULL,
    pontuacao INT
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE frases (
	idFrase INT PRIMARY KEY AUTO_INCREMENT, 
    descricao VARCHAR(300) NOT NULL
);

CREATE TABLE logUsuario(
	idLog INT PRIMARY KEY AUTO_INCREMENT,
	fkUsuario INT,
	dataHorario DATETIME DEFAULT CURRENT_TIMESTAMP, 
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE resultados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    fk_frase INT,
    palavras INT,
    acertos INT,
    erros INT,
    tempo INT,
	ppm INT,
    momento DATETIME DEFAULT CURRENT_TIMESTAMP,
    desempenho DECIMAL(5,2),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);



