const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const colors = require("colors");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(cors());

app.use(express.json()); //to accept JSON

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/user", userRoutes);

app.use("/api/chat", chatRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(5000, console.log(`Server Started on PORT ${PORT}`.yellow.bold));
