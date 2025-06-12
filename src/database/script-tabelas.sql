create database underline;

use underline;

CREATE DATABASE underline;
USE underline;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) NOT NULL UNIQUE,
	senha VARCHAR(50) NOT NULL,
    pontuacao INT
);

CREATE TABLE eventos (
	id_evento INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
    dataEvento DATE, 
    horario VARCHAR(5),
    encontro VARCHAR(100),
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE usuarioEvento(
	id_usuario_evento INT AUTO_INCREMENT,
	fk_usuario INT,
	fk_evento INT,
	CONSTRAINT pk_usuario_evento PRIMARY KEY (id_usuario_evento, fk_usuario, fk_evento),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_evento) REFERENCES eventos(id_evento)
);

CREATE TABLE frases (
	idFrase INT PRIMARY KEY AUTO_INCREMENT, 
    descricao VARCHAR(300) NOT NULL,
    nivel INT
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

-- View de PPM recorde
CREATE VIEW maiorPpm AS
SELECT id_usuario, MAX(ppm) AS ppm
FROM resultados
GROUP BY id_usuario;

select maior_ppm from maiorPpm WHERE id_usuario = 1;

-- View de PPM medio
CREATE VIEW ppmMedio AS
SELECT round(avg(r.ppm),0) as media, id_usuario
FROM resultados r
GROUP BY id_usuario;

-- Desempenho recorde
CREATE VIEW desempenhoRecorde AS
SELECT id_usuario, ROUND(MAX(r.desempenho),0) as desempenhoRecorde
FROM resultados r
GROUP BY id_usuario;

-- Desempenho médio
CREATE VIEW desempenhoMedio AS
SELECT ROUND(AVG(r.desempenho),0) as media, id_usuario
FROM resultados r
GROUP BY id_usuario;

-- Tempo recorde

CREATE VIEW tempoRecorde AS
SELECT id_usuario, MAX(tempo) AS tempo
FROM resultados
GROUP BY id_usuario;

-- Selecionando o tempo médio
CREATE VIEW tempoMedio AS 
SELECT ROUND(avg(r.tempo),2) as media, id_usuario
FROM resultados r
GROUP BY id_usuario;

CREATE VIEW frasesDinamicas AS
SELECT descricao, nivel, idFrase FROM frases;

-- FAZENDO INSERTS 
INSERT INTO frases (descricao, nivel )VALUES
('patinar ensina a meditar em movimento', 1),
('patinar induz quase que uma hipnose de foco intenso e felicidade, chamada de estado de flow', 2),
('o primeiro patins do mundo foi feito de ossos com objetivo de atravessar regioes congeladas ', 2),
('existem mais de 100 grupos de patins gratuitos no Brasil, muitos até emprestam o patins para quem quiser utilizar', 3),
('patinar é um esporte cardiorrespiratório, mas que diferente de muitos cardios, não tem impacto nas articulações', 3);

select * from eventos;

alter table eventos modify column descricao varchar(500);