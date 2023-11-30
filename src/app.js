import express from "express";
import { connectDb } from "./db/config.js";
import allRouter from "./router/main.js";
import dbInit from "./db/init.js";
const app = express();
const PORT = 3300;
//comemnts
connectDb();
dbInit()
  .then(() => {
    console.log("DB sync");
  })
  .catch((error) => {
    console.log(`not async ${error}`);
  });

app.use(express.json());
app.use("/", allRouter);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server starting at http://localhost:${PORT}`);
  } else {
    console.log("something went wrong");
  }
});
