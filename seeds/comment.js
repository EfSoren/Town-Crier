const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "Same here, I had to wait until 2pm before the snowplows came around",
    post_id: "1",
  },
  {
    comment_text: "Yeah but it makes for great skiing",
    post_id: "1",
  },
  {
    comment_text: "What activities are there going to be?",
    post_id: "2",
  },
  {
    comment_text:
      "I saw someone get a flat tire there the other day! They need to fix that ASAP",
    post_id: "3",
  },
  {
    comment_text: "Ugg, I guess I need to find a new route to work.",
    post_id: "3",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
