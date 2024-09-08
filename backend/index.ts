import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/router";
import { createContext } from "./trpc/trpc";
import axios from "axios";

// init express server
const app = express();
const port = process.env.PORT || 4000;
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
