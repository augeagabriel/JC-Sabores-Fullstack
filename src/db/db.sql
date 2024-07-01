CREATE DATABASE IF NOT EXISTS restaurant_db;
USE restaurant_db;

-- Crear tabla de Usuarios
CREATE TABLE IF NOT EXISTS Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(15)
);

-- Crear tabla de Categorías
CREATE TABLE IF NOT EXISTS Categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Insertar categorías
INSERT INTO Categorias (nombre) VALUES
('Platos Principales'),
('Guarniciones'),
('Bebidas'),
('Postres');

-- Crear tabla de Productos
CREATE TABLE IF NOT EXISTS Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(255),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

-- Insertar productos
INSERT INTO Productos (nombre, descripcion, precio, imagen, categoria_id) VALUES
('Asado', 'Delicioso asado argentino', 15.00, 'asado.jpg', 1),
('Matambre a la pizza', 'Matambre con salsa de pizza', 14.00, 'matambre.jpg', 1),
('Milanesa a caballo', 'Milanesa con huevo frito', 13.00, 'milanesa.jpg', 1),
('Ñoquis con salsa', 'Ñoquis con salsa de tomate', 12.00, 'noquis.jpg', 1),
('Curry de calabaza', 'Curry vegetariano con calabaza', 11.00, 'curry.jpg', 1),
('Hamburguesa mega', 'Hamburguesa grande y jugosa', 10.00, 'hamburguesa.jpg', 1),
('Pizza', 'Pizza con queso y tomate', 9.00, 'pizza.jpg', 1),
('Pane and cream', 'Pan con crema', 8.00, 'pane.jpg', 1),
('Teokbokki', 'Plato coreano picante', 10.00, 'teokbokki.jpg', 1),
('Papas fritas', 'Papas fritas crujientes', 5.00, 'papas.jpg', 2),
('Batatas fritas', 'Batatas fritas dulces', 5.00, 'batatas.jpg', 2),
('Verduras salteadas', 'Verduras salteadas al wok', 6.00, 'verduras.jpg', 2),
('Champiñones salteados', 'Champiñones salteados con ajo', 7.00, 'champiñones.jpg', 2),
('Agua', 'Agua mineral', 1.00, 'agua.jpg', 3),
('Gaseosa', 'Bebida gaseosa', 2.00, 'gaseosa.jpg', 3),
('Jugo de naranja', 'Jugo natural de naranja', 3.00, 'jugo.jpg', 3),
('Helado', 'Helado de varios sabores', 4.00, 'helado.jpg', 4),
('Lemon Pie', 'Tarta de limón', 5.00, 'lemonpie.jpg', 4),
('Cheesecake', 'Pastel de queso', 6.00, 'cheesecake.jpg', 4),
('Flan con crema y dulce de leche', 'Flan con crema y dulce de leche', 5.00, 'flan.jpg', 4);

-- Crear tabla de Pedidos
CREATE TABLE IF NOT EXISTS Pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL,
    metodo_pago VARCHAR(50) NOT NULL,
    direccion_entrega VARCHAR(255),
    comentarios TEXT,
    estado VARCHAR(50) DEFAULT 'Pendiente',
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

-- Crear tabla de Detalles de Pedidos
CREATE TABLE IF NOT EXISTS DetallesPedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    precio DECIMAL(10, 2),
    comentario TEXT,
    FOREIGN KEY (pedido_id) REFERENCES Pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
);
