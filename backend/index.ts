import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import morgan from "morgan";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./src/trpc/router";
import { createContext } from "./src/trpc/trpc";
import axios from "axios";
import cors from "cors";
import ViteExpress from "vite-express";

// init express server
const app = express();
const port = 3000;

// Add this line to enable CORS
app.use(cors());

app.use(express.json()); // for parsing application/json
app.use(morgan("dev")); // for pretty logging

app.get("/api", (req, res) => {
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

ViteExpress.listen(app, port, () => console.log("Server is listening..."));
