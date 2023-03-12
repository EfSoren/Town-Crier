const { Post } = require("../models");

const postData = [
  {
    creator_id: 1,
    post_title: "Recent Weather",
    post_text:
      "It has been snowing so much! I couldn't even leave for work today!",
    city_name: "Provo",
  },
  {
    creator_id: 2,
    post_title: "Easter Party",
    post_text:
      "Hey guys, just wanted to remind everyone that the city is holding a big easter party down at riverside park",
    city_name: "Provo",
  },
  {
    creator_id: 3,
    post_title: "New pothole",
    post_text:
      "Theres a new pothole on the corner of 500 and Pioneer that is SO BAD. Watch out everyone",
    city_name: "Provo",
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
