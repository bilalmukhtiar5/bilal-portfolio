import express from 'express';
const port = 3000
const connectDB = require('./database/db')
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
connectDB();


// Contact form route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like Outlook, Yahoo
    auth: {
      user: process.env.EMAIL_USER, // Your email from .env
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  // Email options
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})