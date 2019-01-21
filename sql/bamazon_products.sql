CREATE DATABASE bamazon;
USE bamazon;

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` text NOT NULL,
  `department_name` text NOT NULL,
  `price` decimal(13,2) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  PRIMARY KEY (`item_id`),
  UNIQUE KEY `item_id_UNIQUE` (`item_id`)
);

INSERT INTO `products` VALUES (9,'leggins','clothing',18.99,20),(10,'towel','home',14.99,20),(11,'pants','clothing',13.99,11),(12,'shirt','clothing',17.99,23),(13,'knife','home',34.99,500),(14,'kettle','home',45.99,700),(15,'table','kitchen',79.99,35),(16,'mouse','electronic',7.99,1235),(17,'fork','kitchen',77.99,32),(18,'spoon','kitchen',44.99,34);
