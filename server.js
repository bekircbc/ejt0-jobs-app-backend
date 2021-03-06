import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());

app.get("/jobs", (req, res) => {
  res.send([
    {
      name: "Job #1",
    },
    {
      name: "Job #2",
    },
  ]);
});

app.get("*", function (req, res) {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
