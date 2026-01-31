import nodemailer from "nodemailer";
import { GMAIL_EMAIL, GMAIL_PASS } from "./server-config.js";

const mailsender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASS,
  },
});

export default mailsender;
