import express from "express";
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
//Configure env
dotenv.config();

//database config
connectDB();

//esmodule fix
// const _filename = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);

//rest object
const app = express();

//middelwares
app.use(
  cors({
    origin: [
      "https://symphonious-klepon-a8132c.netlify.app/",
      "https://dreamy-sorbet-7a7e6c.netlify.app",
      "https://dreamy-sorbet-7a7e6c.netlify.app/",
      "https://ecommerce-website-l239-i0j4a263i-amittiwari10s-projects.vercel.app",
    ], // The origin you want to allow
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers in the request
    exposedHeaders: ["Content-Type", "Authorization"], // Headers to expose in the response
  })
);
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// app.use("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
