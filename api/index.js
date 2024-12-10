const express = require("express");
const app = express();
app.use(express.json());

const connectDB = require("./utils/connectDB.js");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const authRoute = require("./routes/auth.route");

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`server running on port http://localhost:${PORT}`);
});
