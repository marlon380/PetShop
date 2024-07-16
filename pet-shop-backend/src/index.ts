import "dotenv/config";
import express, { Express } from "express";
import { router } from "./routes/routes";
import { runMongo } from "./database/mongo-connetc";
import cors from "cors";

const PORT = process.env.PORT || "3001";
const app: Express = express();

runMongo();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
