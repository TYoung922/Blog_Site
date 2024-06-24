const Post = require("../models/post");

function insertPostData() {
  Post.insertMany([
    {
      title: "Post One",
      body: "this is the first post we will be adding.",
    },
    {
      title: "Post Two",
      body: "This is another post we will be including in our database. ",
    },
    {
      title: "test post",
      body: "this is a test to see if I unserstand some of the functions.",
    },
  ]);
}

insertPostData();

module.exports = insertPostData;
