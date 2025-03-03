// require("dotenv").config();
// const express = require("express");
// const subjectRoutes = require("./routes/subjects");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware for parsing JSON
// app.use(express.json());

// // Use Routes
// app.use("/api", subjectRoutes);

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });







require("dotenv").config();
const express = require("express");
const subjectRoutes = require("./routes/subjects");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

// Use Routes
app.use("/api/subjects", subjectRoutes);  // example: GET /api/subjects/226M1A4264

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
