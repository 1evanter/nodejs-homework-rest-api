const { User } = require("../models/user");

const { ctrlWrapper } = require("../helpers");

const register = async (req, res) => {
  await User.create(req.body);
  res.status(201).json({
    user: {
      email: "example@example.com",
      subscription: "starter",
    },
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
