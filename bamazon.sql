DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
use bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INTEGER(255),
  stock_quantity INTEGER default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "speeder", "bicycles", 120, 4);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "gasser", "4wheels", 1100, 1);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "MooCow", "animals", 200, 2);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "ANNOYING", "HUSBANDS", 500, 1);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "WILSON", "BALLS", 1000, 10);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("HANNIBAL", "CANNIBAL", 100000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ( "KITT", "4wheels", 1000000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ( "Magic Lamp", "Silverware", 26, 4);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "Precious", "Jewelery", 250, 8);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ( "Edward Hyde", "Serum", 130, 18);