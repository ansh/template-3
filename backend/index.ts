import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./src/trpc/router";
import { createContext } from "./src/trpc/trpc";
import axios from "axios";
import cors from "cors";

// init express server
const app = express();
const port = process.env.PORT || 4000;

// Add this line to enable CORS
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(morgan("dev")); // for pretty logging

app.get("/", (req, res) => {
  res.send("Your backend server is running :)");
});

// initialize trpc on express servers
const TRPC_ENDPOINT = "/trpc";
app.use(
  TRPC_ENDPOINT,
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// start the express server
app.listen(port, () => {
  console.log(
    `[server]: Backend Server is running at PORT ${port} at ${`http://localhost:${port}`}`
  );
});
