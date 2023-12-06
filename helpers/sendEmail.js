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

// const message = {
//   to: "rita.oleksenkoo@gmail.com",
//   from: "rita.oleksenkoo@gmail.com",
//   subject: "Test email",
//   html: "<h1><b>Test email</b> from me</h1>",
//   rext: "Test email from me",
// };

const sendEmail = async (message) => {
  return transport.sendMail(message);
};

module.exports = sendEmail;
