const nodemailer = require("nodemailer");

//transporter es el objeto que nos permite enviar el mail
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "54cc74190d0722",
    pass: "798c6d1e2803b0",
  },
});

//funcion que se encarga de enviar el mail

const sendMail = async () => {
  //primero recibimos el transporter y le pasamos el mail
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: "francostan98@hotmail.com",
    subject: "Test",
    html: "<h1>Test</h1>",
  });
  console.log(info);
  return;
};

module.exports = { sendMail };
