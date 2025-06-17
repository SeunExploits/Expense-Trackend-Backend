// importing the modules
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import routes from "./route/index.js";


// initializing the dotenv
// to use the environment variables from the .env file
dotenv.config();


// initializing the express app
const app = express();
const PORT = process.env.PORT || 8000;


// initializing the middleware
// to use the cors and express.json() middleware
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-v1", routes);


// initializing the default route
// to handle the default route
  // app.use("*", (req, res) => {
  // res.status(404).json({
  //     status: "404 Not found",
  //     message: "Route not found",
  //   });
  // });


// initializing the server
// to listen to the port specified in the .env file or 8000 by default
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});