const express = require("express");
const app = express();
express.json();
const authRoute = require("./routes/auth.route");
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth/", authRoute);

app.listen("5000", () => {
  console.log(`server running on port http://localhost:5000`);
});
