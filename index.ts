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
      process.env.CORS_ORIGIN4 as string,
      process.env.CORS_ORIGIN5 as string,
      process.env.CORS_ORIGIN6 as string,
      process.env.CORS_ORIGIN7 as string,
      process.env.CORS_ORIGIN8 as string,
      "http://localhost:3000",
      "http://127.0.0.1:5500",
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
