const express = require("express");
const router = express.Router();

const UserPostModel = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const userData = await UserPostModel.find();
    res.json(userData);
  } catch (error) {
    res.json({ message: error });
  }
});

//Save Data
router.post("/saveData", async (req, res) => {
  var myData = new UserPostModel({
    name: req.body.name,
    job_title: req.body.job_title,
  });

  await myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

//Get Spesific Post
router.get("/:PostId", async (req, res) => {
  try {
    const getPost = await UserPostModel.findById(req.params.PostId);
    res.json(getPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//Delete Spesific Data
router.delete("/:PostId", async (req, res) => {
  try {
    await UserPostModel.remove({ _id: req.params.PostId });
    const Postdata = await UserPostModel.find();
    res.json(Postdata);
  } catch (error) {
    res.json({ message: error });
  }
});

//Updte Data
router.patch("/:PostId", async (req, res) => {
  try {
    const updatedpost = await UserPostModel.update(
      { _id: req.params.PostId },
      {
        $set: {
          name: req.body.name,
          job_title: req.body.job_title,
        },
      }
    );

    res.json(updatedpost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
