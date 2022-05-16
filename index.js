import express from "express";
import { router } from "./route.js";
// import { promisify } from "util";
// import client from "./redis-client.js";

const app = express();
// const startServer = promisify(app.listen);

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// client.on("error", (err) => {
//   throw new Error(err.message);
// });

// await client.connect();

// await startServer(PORT);

// console.log(`Server listening on port ${PORT}`);

export default { app };
