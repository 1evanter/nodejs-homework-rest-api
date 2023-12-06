const nodemailer = require("nodemailer");

const { MAILTRAP_USER, MAILTRAP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASSWORD,
  },
});

const sendEmail = async (message) => {
  const email = { ...message, from: "rita.oleksenkoo@gmail.com" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
