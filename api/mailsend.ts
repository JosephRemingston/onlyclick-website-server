import express from "express";
import nodemailer from "nodemailer";
import "dotenv";
const router = express.Router();

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or 'Outlook', 'Yahoo', or SMTP config
  auth: {
    user: process.env.SEND_MAIL,    // your email
    pass: process.env.PASS, // your email password or App password
  },
});

router.post('/', async (req, res) => {
  const { fullName, address, phoneNumber, pinCode, email } = req.body;

  const mailOptions = {
    from: 'onlyclicknoreply@gmail.com',      // sender address
    to: 'onlyclick.connecy@gmail.com',  // your email to receive submissions
    subject: 'New Form Submission',
    html: `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
        <h2 style="text-align: center; color: #333;">New Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Full Name:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Address:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${address}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone Number:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${phoneNumber}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Pincode:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${pinCode}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
        </table>
        <p style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">This email was generated automatically by OnlyClick server.</p>
      </div>
    </div>
  `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

export default router;
