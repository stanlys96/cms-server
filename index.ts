import express, { Request, Application } from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(
  cors<Request>({
    origin: [
      process.env.CORS_ORIGIN as string,
      process.env.CORS_ORIGIN2 as string,
      process.env.CORS_ORIGIN3 as string,
    ],
    optionsSuccessStatus: 200,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
