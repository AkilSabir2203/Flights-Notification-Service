import { StatusCodes } from "http-status-codes";
import { Logger } from "../config/index.js";
import AppError from "../utils/errors/app-error.js";

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(id) {
    const response = await this.model.destroy({
      where: { id },
    });

    if (!response) {
      throw new AppError(
        "Not able to find the resource",
        StatusCodes.NOT_FOUND
      );
    }

    return response;
  }

  async get(id) {
    const response = await this.model.findByPk(id);

    if (!response) {
      throw new AppError(
        "Not able to find the resource",
        StatusCodes.NOT_FOUND
      );
    }

    return response;
  }

  async getAll() {
    return await this.model.findAll();
  }

  async update(id, data) {
    return await this.model.update(data, {
      where: { id },
    });
  }
}

export default CrudRepository;
