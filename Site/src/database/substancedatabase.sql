create database substance;

use substance;

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(50),
	senha VARCHAR(50),
    cpf CHAR(11),
    motivo VARCHAR(45),
    regiao VARCHAR(45),
    person CHAR(1)
    );
    
/* CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
); */

select * from usuario;

select count(id_usuario) from usuario;