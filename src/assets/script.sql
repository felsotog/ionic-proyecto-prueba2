CREATE TABLE IF NOT EXISTS musico(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    apellido TEXT,
    rut TEXT,
    edad TEXT,
    direccion TEXT,
    telefono TEXT,
    email TEXT,
    gradoAcademico TEXT,
    instrumento TEXT,
    fotografia TEXT
);

INSERT OR IGNORE INTO musico (id, nombre, apellido, rut, edad, direccion, telefono, email, gradoAcademico, instrumento, fotografia) VALUES (1,'Esteban','Dido','1-9','41','Providencia 123','+5692569874','Esteban@douc.cl','Universitario','Guitarra','https://randomuser.me/api/portraits/men/24.jpg');
INSERT OR IGNORE INTO musico (id, nombre, apellido, rut, edad, direccion, telefono, email, gradoAcademico, instrumento, fotografia) VALUES (2,'Armando','Mochas','1-8','35','Providencia 321','+5692569874','Armando@douc.cl','Técnico','Piano','https://randomuser.me/api/portraits/men/17.jpg');
INSERT OR IGNORE INTO musico (id, nombre, apellido, rut, edad, direccion, telefono, email, gradoAcademico, instrumento, fotografia) VALUES (3,'Alan','Brito','1-7','28','Providencia 1234','+5692569874','Alan@douc.cl','Técnico','Violín','https://randomuser.me/api/portraits/men/91.jpg');
INSERT OR IGNORE INTO musico (id, nombre, apellido, rut, edad, direccion, telefono, email, gradoAcademico, instrumento, fotografia) VALUES (4,'Luz','Roja','1-6','41','Providencia 12345','+5692569874','Luz@douc.cl','Universitario','Batería','https://randomuser.me/api/portraits/women/91.jpg');
