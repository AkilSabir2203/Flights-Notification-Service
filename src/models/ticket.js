import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // define association here
    }
  }

  Ticket.init(
    {
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recepientEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("PENDING", "SUCCESS", "FAILED"),
        defaultValue: "PENDING",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );

  return Ticket;
};
