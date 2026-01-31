import { TicketRepository } from "../repositories/index.js";
import { MAILER } from "../config/index.js";

const ticketRepo = new TicketRepository();

export async function sendEmail(mailFrom, mailTo, subject, text) {
  try {
    const response = await MAILER.sendMail({
      from: mailFrom,
      to: mailTo,
      subject,
      text,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createTicket(data) {
  try {
    return await ticketRepo.create(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPendingEmails() {
  try {
    return await ticketRepo.getPendingTickets();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
