import express from "express";
import { router } from "./route.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
