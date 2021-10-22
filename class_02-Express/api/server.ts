import express, { NextFunction, Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// http://localhost:3000/api/
app.use("/api", (req: Request, res: Response, next: NextFunction) => {
  console.log("Hello world!");
  res.status(200).json({
    message: "Oh no! Error!",
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on http://localhost:3000/");
});
