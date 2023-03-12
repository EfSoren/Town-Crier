const router = require("express").Router();
const { Comment, Post, User } = require("../models");
const withAuth = require("../middleware/auth");

// Get login page
router.get("/", (req, res) => {
  res.render("login");
});
router.get("/login", (req, res) => {
  res.render("login");
});

// Get signup page
router.get("/signup", (req, res) => {
  try {
    res.render("sign-up", {});
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get individual city
router.get("/city/:username", withAuth, async (req, res) => {
  try {
    const requestedUser = req.params.username;

    const userInfo = await User.findAll({
      where: {
        username: requestedUser,
      },
    });

    const cityData = await Post.findAll({
      where: {
        city_name: userInfo[0].location,
      },
      include: [
        { model: Comment },
        { model: User, attributes: { exclude: ["password"] } },
      ],
      exclude: User.password,
    });
    const newest = cityData.map((post) => post.get({ plain: true }));
    const posts = newest.reverse();
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get individual posts
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      raw: true,
    });
    if (!postData) {
      res.status(404).json({ message: "No post with this id found." });
      return;
    }
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(postData);
    res.render("landing", {
      postData,
      comments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
