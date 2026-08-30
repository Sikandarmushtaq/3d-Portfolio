const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectToDatabase = require("./Database/Connection");

const adminRoutes = require("./Routes/adminRoutes");
const contactRoutes = require("./Routes/contactRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  process.env.FRONTEND_URL,

  "http://localhost:3001",
  "http://localhost:5173",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("Blocked by CORS:", origin);

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(
  express.json({
    limit: "10mb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cookieParser());

connectToDatabase();

app.use("/admin", adminRoutes);

app.use("/contact", contactRoutes);

app.get("/pingportfolio", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Server is awake",
  });
});

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "Portfolio backend is running",
  });
});

app.use((req, res) => {
  return res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      status: "error",
      message: "This origin is not allowed",
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);

  console.log("Allowed frontend origins:", allowedOrigins);
});
