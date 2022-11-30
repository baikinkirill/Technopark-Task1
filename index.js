import express from "express";
import { IndexRoute } from "./controllers/index.js";

// Приложение
const app = express();
const port = 5000;

IndexRoute(app);

app.listen(port);
