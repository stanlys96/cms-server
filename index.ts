import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors<Request>);
app.use(router);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
