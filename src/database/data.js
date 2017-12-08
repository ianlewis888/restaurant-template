import * as brunchImage from '../images/menu-images/brunch.jpeg';
import * as lunchImage from '../images/menu-images/lunch.jpg';
import * as dinnerImage from '../images/menu-images/dinner.jpeg';

const data = {
  "blockquote": {
    "quote": "But any doubts about the chef's sanity vanish when you taste the spectacularly good guinea hen that the endive accompanies. Roasted and sauced with jus, Madeira and black truffles, it is among the most delicious things I’ve eaten this year.",
    "citation": "The New York Times"
  },
  "menus": {
    "featured": {
      "brunch": {
        "menu": "brunch",
        "name": "fried egg with wild mushrooms and grits",
        "description": "fried egg, asiago cheese grits, shitakes, oyster mushrooms, and chantrelles, paired with a rich spiced tomato sauce",
        "image": brunchImage
      },
      "lunch": {
        "menu": "lunch",
        "name": "egg, frisée, and caramelized onion sandwich",
        "description": "slightly runny egg yolk creates a rich, delicious sauce as it mingles with our homemade fig jam.",
        "image": lunchImage
      },
      "dinner": {
        "menu": "dinner",
        "name": "hangar steak with rustic balsamic reduction",
        "description": "paired with a crispy truffle baked potato, wild mushrooms, and smashed avocado.",
        "image": dinnerImage
      }
    },
    "highlight": {},
    "brunch": {},
    "lunch": {},
    "dinner": {}
  },
  "reservations": {},
  "order": {},
  "location": {
    "address": "179 Elizabeth Street, New York, NY 10012",
    "directions": {
      "transit": [
        { "method": ["6"], "stop": "Spring Street" },
        { "method": ["F"], "stop": "2nd Avenue" },
        { "method": ["B","D"], "stop": "Grand Street" }
      ],
      "parking": null,
      "notes": null
    }
  },
  "hours": {
    "bar": [
      {"open": "4PM", "close": "12AM"},
      {"open": "4PM", "close": "12AM"},
      {"open": "4PM", "close": "12AM"},
      {"open": "4PM", "close": "12AM"},
      {"open": "4PM", "close": "2AM"},
      {"open": "4PM", "close": "2AM"},
      {"open": "4PM", "close": "2AM"}
    ],
    "restaurant": [
      {"open": "8AM", "close": "10PM"},
      {"open": "12PM", "close": "10PM"},
      {"open": "12PM", "close": "10PM"},
      {"open": "12PM", "close": "10PM"},
      {"open": "12PM", "close": "12AM"},
      {"open": "12PM", "close": "12AM"},
      {"open": "8AM", "close": "12AM"}
    ]
  },
  "contact": {
    "phone": {
      "countryCode":"1",
      "areaCode": "555",
      "localNumber": "876-9846"
    },
    "email": "hello@paragon.com"
  },
  "externalServices": {
    "yelpId": null,
    "seamlessId": null,
    "openTableId": null
  }
};
export default data;
