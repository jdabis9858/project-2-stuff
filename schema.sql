-- New Database Schema Store 
DROP DATABASE IF EXISTS store;
CREATE DATABASE store;
USE store; 
        CREATE TABLE merchant3 (
        id INT NOT NULL AUTO_INCREMENT,
        merchant_Id INT NULL,
        product_name VARCHAR(45) NULL,
        department_name VARCHAR(45) NULL,
        price DECIMAL(10, 2) NULL,
        stock_quantity INT NOT NULL,
        PRIMARY KEY (id),
        product_desc VARCHAR(100),
        photolink VARCHAR(200),
        storeid INT NULL
      );

