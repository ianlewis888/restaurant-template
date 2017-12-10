CREATE DATABASE IF NOT EXISTS restaurant_db;
USE restaurant_db;

CREATE TABLE IF NOT EXISTS blockquote (
  id INT NOT NULL AUTO_INCREMENT,
  quote TEXT NOT NULL,
  citation VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
  );

CREATE TABLE IF NOT EXISTS featured_items (
  id INT NOT NULL AUTO_INCREMENT,
  menu_type VARCHAR(50) NOT NULL,
  name VARCHAR(250) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS menu_items (
  id INT NOT NULL AUTO_INCREMENT,
  menu_type VARCHAR(50) NOT NULL,
  item_type VARCHAR(50) NOT NULL,
  name VARCHAR(250) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(5, 2),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS hours (
  id INT NOT NULL AUTO_INCREMENT,
  day_of_week TINYINT NOT NULL,
  menu VARCHAR(50) NOT NULL,
  open TIME NOT NULL,
  close TIME NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS contact_info (
  id INT NOT NULL AUTO_INCREMENT,
  method VARCHAR(250) NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS location_info (
  id INT NOT NULL AUTO_INCREMENT,
  street_1 TEXT NOT NULL,
  street_2 TEXT,
  city VARCHAR(250) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip INT NOT NULL,
  transit TEXT,
  PRIMARY KEY(id)
);

TRUNCATE blockquote;
TRUNCATE featured_items;
TRUNCATE menu_items;
TRUNCATE hours;
TRUNCATE contact_info;
TRUNCATE location_info;

INSERT INTO blockquote (quote, citation)
  VALUES ("But any doubts about the chef's sanity vanish when you taste the spectacularly good guinea hen that the endive accompanies. Roasted and sauced with jus, Madeira and black truffles, it is among the most delicious things I’ve eaten this year.",
  "The New York Times");

INSERT INTO featured_items (menu_type, name, description)
  VALUES ("brunch", "fried egg with wild mushrooms and grits", "fried egg, asiago cheese grits, shitakes, oyster mushrooms, and chantrelles, paired with a rich spiced tomato sauce."),
    ("lunch", "egg, frisée, and caramelized onion sandwich", "slightly runny egg yolk creates a rich, delicious sauce as it mingles with our homemade fig jam."),
    ("dinner", "hangar steak with rustic balsamic reduction", "paired with a crispy truffle baked potato, wild mushrooms, and smashed avocado.");

INSERT INTO contact_info (method, value)
  VALUES ("email", "hello@paragon.com"),
    ("phone", '{"countryCode":"1", "areaCode": "555","localNumber": "876-9846"}');

INSERT INTO location_info (street_1, city, state, zip, transit)
  VALUES ("179 Elizabeth Street", "New York", "NY", 10012, '[{ "method": ["6"], "stop": "Spring Street" }, { "method": ["F"], "stop": "2nd Avenue" }, { "method": ["B","D"], "stop": "Grand Street" }]');
