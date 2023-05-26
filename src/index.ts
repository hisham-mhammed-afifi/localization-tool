import "express-async-errors";
import env from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { join } from "path";
import routes from "./routes/localization.routes";

env.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:4200", credentials: true }));

// Serve static files from the 'public' folder
app.use(express.static(join(__dirname, "public")));

// Middleware to parse JSON bodies
app.use(express.json());

// Error handler middleware
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   // Handle the error or send an error response
//   res.status(500).json({ error: "Internal Server Error" });
// });

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello, this is my Localization tool" });
});

// Set up routes
app.use("/localization", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
