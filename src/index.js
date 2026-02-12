require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

const apiRouter = require("./routes");
const { requestLogger, errorHandler } = require("./middleware");

// --- Global Middleware Setup ---
app.use(express.json());
app.use(cors());
app.use(requestLogger); // We add our logger to the pipeline

// --- Routes ---
app.get("/", (req, res) => {
  res.send("Homepage!");
});

// Mount API routes at /api/v1
app.use("/api/v1", apiRouter);

// Mount it at the very end of the file
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
