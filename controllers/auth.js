const bcrypt = require("bcrypt");

const { User } = require("../models/user");

const { ctrlWrapper, HttpError } = require("../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).exec();

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  await User.create({ email, password: hashPassword });

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
