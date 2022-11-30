import { Sequelize, DataTypes } from "sequelize";
import express from "express";

// Подключение к базе данных
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.db",
});

// Определение модели книги
const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    author: DataTypes.STRING,
    name: DataTypes.STRING,
  },
  {
    createdAt: false,
    updatedAt: false,
    tableName: "books",
  }
);

// Приложение
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
