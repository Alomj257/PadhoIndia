const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const examRoutes = require("./routes/examRoutes");
const levelRoutes = require("./routes/levelRoutes");
const resultlRoutes = require("./routes/resultRoutes");


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", authRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/levels", levelRoutes);
app.use("/api/result", resultlRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
