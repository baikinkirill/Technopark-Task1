import { Book } from "../models/Book.js";

export function IndexRoute(app) {
  app.get("/", async (req, res) => {
    // получение всех книг
    const books = await Book.findAll();

    res.send(books);
  });
}
