--seed 
USE store;
INSERT INTO merchant3 (merchant_Id, product_name, department_name, price, stock_quantity,product_desc,photolink,storeid)
VALUES (1, "Monitor", "Electronics", 149.99, 15,"LG Monitor","https://www.google.com",2)


INSERT INTO merchant3 (merchant_Id, product_name, department_name, price, stock_quantity,product_desc,photolink,storeid)
VALUES 
  (2,"Tomb Raider", "Video Games", 59.99, 150, "Definitive Edition", "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiBrJudqfHfAhVRLX0KHT9RB08QjRx6BAgBEAU&url=https%3A%2F%2Fwww.bestbuy.com%2Fsite%2Ftomb-raider-definitive-edition-playstation-4%2F3089045.p%3FskuId%3D3089045&psig=AOvVaw0bBVZ_fWjvQu-kVtK5pJUS&ust=1547694436779547", 2 ),
  (2,"Cards Against Humanity", "Board Games", 19.95, 200, "Adult Card Game","  ", 2),
  (2,"Red Dead Redemption II", "Video Games", 59.99, 50, "Western Game", "  ", 2),
  (2,"PS4", "Game Console", 299.95, 75, "Entertainment Console", " ", 2),
  (2,"Xbox", "Game Console", 299.99, 35, "Entertainment Console", " ", 2),
  (2,"Nintendo Switch", "Game Console", 299.99, 42, "Entertainment Console", " ", 2),
  (2,"Grand Theft Auto", "Video Game", 44.99, 25, "Stealing yo money!", " ", 2),
  (2,"Spyro", "Video Game", 25.50, 100, "Remastered 90s game", " ", 2),
  (2,"Monopoly", "Board Games", 20.00, 35, "The Original Board Game", " ", 2),
  (2,"PS4 Controller", "Accessories", 59.99, 20, "Controller for your PS4 console", " ", 2);
-- selct all 
  Select * from products; 