'use strict';

var _ = require('lodash');

//Have favourites in place and only for the session
var favourites = {};
var userList = [
  {
    "userId": "01",
    "wikiurl": "http://en.wikipedia.org/wiki/Sebastian_Vettel",
    "fName": "Sebastian",
    "lName": "Vettel",
    "dob": "1987-07-03",
    "nationality": "German",
    "email": "asd@gmail.com",
    "address": "Red Bull"
  },
  {
    "userId": "02",
    "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
    "fName": "Fernando",
    "lName": "Alonso",
    "dob": "1981-07-29",
    "nationality": "Austria",
    "email": "asd1@gmail.com",
    "address": "Ferrari"
  },
  {
    "userId": "03",
    "url": "http://en.wikipedia.org/wiki/Mark_Webber",
    "fName": "Mark",
    "lName": "Webber",
    "dob": "1976-08-27",
    "nationality": "British-Virgin-Islands",
    "email": "asd1@gmail.com",
    "address": "Red Bull"
  },
  {
    "userId": "04",
    "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    "fName": "Lewis",
    "lName": "Hamilton",
    "dob": "1985-01-07",
    "nationality": "British",
    "email": "asd2@gmail.com",
    "address": "Mercedes"
  },
  {
    "userId": "05",
    "url": "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
    "fName": "Kimi",
    "lName": "Räikkönen",
    "dob": "1979-10-17",
    "nationality": "Finnish",
    "email": "asd3@gmail.com",
    "address": "Lotus F1"
  },
  {
    "userId": "06",
    "url": "http://en.wikipedia.org/wiki/Nico_Rosberg",
    "fName": "Nico",
    "lName": "Rosberg",
    "dob": "1985-06-27",
    "nationality": "German",
    "email": "asd4@gmail.com",
    "address": "Mercedes"
  },
  {
    "userId": "07",
    "url": "http://en.wikipedia.org/wiki/Romain_Grosjean",
    "fName": "Romain",
    "lName": "Grosjean",
    "dob": "1986-04-17",
    "nationality": "French",
    "email": "asd1@gmail.com",
    "address": "Lotus F1"
  },
  {
    "userId": "08",
    "url": "http://en.wikipedia.org/wiki/Felipe_Massa",
    "fName": "Felipe",
    "lName": "Massa",
    "dob": "1981-04-25",
    "nationality": "Brazilian",
    "email": "asd1@gmail.com",
    "address": "Ferrari"
  },
  {
    "userId": "09",
    "url": "http://en.wikipedia.org/wiki/Jenson_Button",
    "fName": "Jenson",
    "lName": "Button",
    "dob": "1980-01-19",
    "nationality": "British",
    "email": "asd1@gmail.com",
    "address": "McLaren"
  },
  {
    "userId": "10",
    "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
    "fName": "Nico",
    "lName": "Hülkenberg",
    "dob": "1987-08-19",
    "nationality": "German",
    "email": "asd1@gmail.com",
    "address": "Sauber"
  },
  {
    "userId": "11",
    "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
    "fName": "Sergio",
    "lName": "Pérez",
    "dob": "1990-01-26",
    "nationality": "European-Union",
    "email": "asd1@gmail.com",
    "address": "McLaren"
  },
  {
    "userId": "12",
    "url": "http://en.wikipedia.org/wiki/Paul_di_Resta",
    "fName": "Paul",
    "lName": "di Resta",
    "dob": "1986-04-16",
    "nationality": "British",
    "email": "asd1@gmail.com",
    "address": "Force India"
  },
  {
    "userId": "13",
    "url": "http://en.wikipedia.org/wiki/Adrian_Sutil",
    "fName": "Adrian",
    "lName": "Sutil",
    "dob": "1983-01-11",
    "nationality": "German",
    "email": "asd1@gmail.com",
    "address": "Force India"
  },
  {
    "userId": "14",
    "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
    "fName": "Daniel",
    "lName": "Ricciardo",
    "dob": "1989-07-01",
    "nationality": "Australian",
    "email": "asd1@gmail.com",
    "address": "Toro Rosso"
  },
  {
    "userId": "15",
    "url": "http://en.wikipedia.org/wiki/Jean-%C3%89ric_Vergne",
    "fName": "Jean-Éric",
    "lName": "Vergne",
    "dob": "1990-04-25",
    "nationality": "French",
    "email": "asd1@gmail.com",
    "address": "Toro Rosso"
  },
  {
    "userId": "16",
    "url": "http://en.wikipedia.org/wiki/Esteban_Guti%C3%A9rrez",
    "fName": "Esteban",
    "lName": "Gutiérrez",
    "dob": "1991-08-05",
    "nationality": "Georgia",
    "email": "asd1@gmail.com",
    "address": "Sauber"
  },
  {
    "userId": "17",
    "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
    "fName": "Valtteri",
    "lName": "Bottas",
    "dob": "1989-08-29",
    "nationality": "Finnish",
    "email": "asd1@gmail.com",
    "address": "Williams"
  },
  {
    "userId": "18",
    "url": "http://en.wikipedia.org/wiki/Pastor_Maldonado",
    "fName": "Pastor",
    "lName": "Maldonado",
    "dob": "1985-03-09",
    "nationality": "Dominican-Republic",
    "email": "asd1@gmail.com",
    "address": "Williams"
  },
  {
    "userId": "19",
    "url": "http://en.wikipedia.org/wiki/Jules_Bianchi",
    "fName": "Jules",
    "lName": "Bianchi",
    "dob": "1989-08-03",
    "nationality": "French",
    "email": "asd1@gmail.com",
    "address": "Marussia"
  },
  {
    "userId": "20",
    "url": "http://en.wikipedia.org/wiki/Charles_Pic",
    "fName": "Charles",
    "lName": "Pic",
    "dob": "1990-02-15",
    "nationality": "French",
    "email": "asd1@gmail.com",
    "address": "Caterham"
  },
  {
    "userId": "21",
    "url": "http://en.wikipedia.org/wiki/Giedo_van_der_Garde",
    "fName": "Giedo",
    "lName": "van der Garde",
    "dob": "1985-04-25",
    "nationality": "Dutch",
    "email": "asd1@gmail.com",
    "address": "Caterham"
  },
  {
    "userId": "22",
    "url": "http://en.wikipedia.org/wiki/Heikki_Kovalainen",
    "fName": "Heikki",
    "lName": "Kovalainen",
    "dob": "1981-10-19",
    "nationality": "Finnish",
    "email": "asd1@gmail.com",
    "address": "Lotus F1"
  },
  {
    "userId": "23",
    "url": "http://en.wikipedia.org/wiki/Max_Chilton",
    "fName": "Max",
    "lName": "Chilton",
    "dob": "1991-04-21",
    "nationality": "British",
    "email": "asd1@gmail.com",
    "address": "Marussia"
  }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get list of user
exports.getUserList = function (req, res) {
  res.json(userList);
};

//Get specific user
exports.getUserDetail = function (req, res) {
  var userId = req.params.uId;
  console.log('inside service '+userId);
  var user = _.find(userList, { userId: userId });
  if (!user) {
    res.json({ error: 'Invalid user address' });
  } else {
    if (_.isArray(user)) user = user[0];
    res.json(user);
  }
};
