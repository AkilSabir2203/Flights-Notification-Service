"use strict";

/** @type {import('sequelize-cli').Migration} */

import { Enums } from "../utils/common/index.js";

const { PENDING, SUCCESS, FAILED } = Enums.TICKET_ENUMS;

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Tickets", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    recepientEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM(PENDING, SUCCESS, FAILED),
      defaultValue: PENDING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable("Tickets");
}
