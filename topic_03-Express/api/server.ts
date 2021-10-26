import express, { NextFunction, Request, Response } from "express";
import cors from "./const/cors.const";
import router from "./const/router.const";
import mongoose from "mongoose";
import { firebaseApp } from "./const/firebase.const";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors);
// Body Parsers. If you don't parse the body, you get buffering.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// http://localhost:4000/api/
// app.use("/api", (req: Request, res: Response, next: NextFunction) => {
//   // console.log("Hello world!");
//   res.status(200).json({
//     message: "Hello, world!",
//   });
// });

app.use("/api", router);

// app.listen(PORT, () => {
//   console.log("Server is listening on http://localhost:4000/");
// });

mongoose.connect("mongodb://localhost:27017/tododb").then(() => {
  app.listen(PORT, () => {
    console.log("Server is listening on http://localhost:4000/");
  });
});
