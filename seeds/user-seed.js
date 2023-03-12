const { User } = require("../models");

const userData = [
  {
    username: "EfSoren",
    email: "ef.sorensen@me.com",
    password: "password",
    location: "Provo",
  },
  {
    username: "mGask",
    email: "testemail@email.com",
    password: "password2",
    location: "Provo",
  },
  {
    username: "LoBako",
    email: "useremail@gmail.com",
    password: "password3",
    location: "Provo",
  },
  {
    username: "JacobAston",
    email: "fakemail@gmail.com",
    password: "password4",
    location: "Sandy",
  },
  {
    username: "Guest",
    email: "fakermail@gmail.com",
    password: "password4",
    location: "Sandy",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
