import express from "express";
import notifyRoute from "./routes/notify.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Saif Assistant Server is running");
});

app.use("/notify", notifyRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
