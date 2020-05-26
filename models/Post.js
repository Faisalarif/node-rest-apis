const mango = require("mongoose");

const PostSchema = mango.Schema({
  name: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  joining_Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mango.model("Post", PostSchema);
