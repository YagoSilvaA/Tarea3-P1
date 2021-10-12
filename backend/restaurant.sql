CREATE database restaurant;
use restaurant;
CREATE TABLE menu (price int, meal varchar(255), created_date datetime, modified_date datetime);
INSERT INTO menu (price, meal) VALUES (40, 'lomo saltado con papa nativa, no hay papa frita :c');
INSERT INTO menu (price, meal) VALUES (23, 'causita rellena');
