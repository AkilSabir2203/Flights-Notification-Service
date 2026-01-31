import CrudRepository from "./crud-repository.js";
import db from "../models/index.js";

const { Ticket } = db;

class TicketRepository extends CrudRepository {
  constructor() {
    super(Ticket);
  }

  async getPendingTickets() {
    const response = await Ticket.findAll({
      where: {
        status: "PENDING",
      },
    });
    return response;
  }
}

export default TicketRepository;
