import express from "express";

const app = express();
const port = 3021;

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

app.listen(port, () => {
  console.log(`Listening on http://localost:${port}`);
});
