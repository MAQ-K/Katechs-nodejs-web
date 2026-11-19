import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    api_key: process.env.SENDGRID_API_KEY,
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  const { name, email, number, text, company, company_info, Domain, Type } = req.body;
  const data = {
    to: "support@knoztech.com",
    from: "support@knoztech.com",
    subject: "طلب عرض سعر",
    text,
    html: `<b>Name:</b> ${name} <br />
      <b>Email:</b> ${email} <br />
      <b>Number:</b> ${number} <br />
      <b>Company Name:</b> ${company} <br />
      <b>Company info:</b> ${company_info} <br />
      <b>Type:</b> ${Type} <br />
      <b>Domain:</b> ${Domain} <br />
      <b>Message:</b> ${text} <br />`,
  };

  try {
    await mailer.sendMail(data);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing request");
  }
};
