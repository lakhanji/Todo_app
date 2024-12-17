const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
