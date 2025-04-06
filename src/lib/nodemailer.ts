import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_SENDER_EMAIL || "taruncv516@gmail.com",
    pass: process.env.SENDER_PASSWORD || "tarun516",
  },
});
