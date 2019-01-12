CREATE DATABASE store;
USE store;


CREATE TABLE merchant1 (
  id INT NOT NULL AUTO_INCREMENT,
  merchant_Id INT NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10, 2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Monitor", "Electronics", 149.99, 15), 
        (1, "1 TB Storage Drive", "Electronics", 99.99, 40),
        (1, "Shirt", "Clothing", 19.99, 60),
        (1, "Pants", "Clothing", 29.99, 20), 
        (1, "Shrek 2", "Entertainment", 14.99, 20),
        (1, "The Place Beyond The Pines", "Entertainment", 19.99, 10),
        (1, "Apple", "Food", 0.99, 6), 
        (1, "Pie", "Food", 8.99, 12), 
        (1, "Cold Medicine", "Health", 9.99, 20), 
        (1, "Asprin", "Health", 7.99, 20);