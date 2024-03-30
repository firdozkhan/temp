const mongoose = require("mongoose");

const community = new mongoose.Schema({
  communityName: {
    type: String,
    required: true,
  },
  communityDescription: {
    type: String,
    required: true,
  },
  subscribers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  justChats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  ],
  qnaForum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QnaForum",
  },
  rules: {
    type: [String],
    required: true,
  },
  facts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
  ],
});

module.exports = mongoose.model("community", community);
