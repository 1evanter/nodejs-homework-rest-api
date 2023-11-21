const { User } = require("../models/user");

const { ctrlWrapper, HttpError } = require("../helpers");

const register = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email }).exec();

  if (user !== null) {
    throw HttpError(409, "Email in use");
  }

  await User.create(req.body);

  res.status(201).json({
    user: {
      email,
      subscription: "starter",
    },
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
