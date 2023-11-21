const { User } = require("../models/user");

const { ctrlWrapper } = require("../helpers");

const register = async (req, res) => {
  await User.create(req.body);
  res.status(201).send({ message: "Registration successfully" });
};

module.exports = {
  register: ctrlWrapper(register),
};
