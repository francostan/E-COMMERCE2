const nodemailer = require("nodemailer");

//transporter es el objeto que nos permite enviar el mail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "francostan98@gmail.com",
    pass: "tkoytksfeaiqapvb",
  },
});

//funcion que se encarga de enviar el mail

const sendMail = async (email) => {
  //primero recibimos el transporter y le pasamos el mail
  const info = await transporter.sendMail({
    from: '"diVino" <francostan98@gmail.com>',
    to: `${email}`,
    subject: "Compra exitosa!",
    html: "<h1>detalles compra</h1>",
  });
  console.log(info);
  return;
};

module.exports = { sendMail };
