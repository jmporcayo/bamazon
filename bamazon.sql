DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INTEGER(100),
  stock_quantity INTEGER default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("1", "speeder", "bicycles", "120", "4");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2", "gasser", "4wheels", "1100", "1");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3", "MooCow", "animals", "200", "2");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("4", "ANNOYING", "HUSBANDS", "500", "1");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("5", "WILSON", "BALLS", "1000", "10");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("6", "HANNIBAL", "CANNIBAL", "100,000", "1");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("7", "KITT", "4wheels", "1,000,000", "1");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("8", "Magic Lamp", "Silverware", "26", "4");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("9", "Precious", "Jewelery", "250", "8");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("10", "Edward Hyde", "Serum", "130", "18");