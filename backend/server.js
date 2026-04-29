const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ New - reads from .env
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/myAppDB";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Local MongoDB Connected"))
  .catch(err => console.log("❌ Error:", err));

// Routes
app.use("/api", require("./routes"));

// Server
app.listen(5000, () => console.log("🚀 Server running on 5000"));