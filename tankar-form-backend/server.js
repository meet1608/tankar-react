const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,  // ✅ Bypass self-signed certificate issue
    },
  });
  

app.post("/send-email", async (req, res) => {  // ✅ Corrected route
  const { name, email, message, subject, phone, company } = req.body;

  const mailOptions = {
    from: email,  // ✅ Fixed sender email
    to: "meetvisodiya5@gmail.com",
    subject: subject || "New Contact Form Submission",
    text: `
    📩 **New Contact Form Submission** 📩

    🔹 **Name:** ${name}
    🔹 **Email:** ${email}
    🔹 **Phone:** ${phone}
    🔹 **Company:** ${company}
    📝 **Message:**
    ${message}

    Regards,  
    Your Website Team
    `,
};

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);  // Log error for debugging
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));





