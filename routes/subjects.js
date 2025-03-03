// const express = require("express");
// const { getSubjects } = require("../controllers/subjectsController");

// const router = express.Router();

// // Define API Route
// router.get("/subjects", getSubjects);

// module.exports = router; 



const express = require("express");
const router = express.Router();
const { getSubjects } = require("../controllers/subjectsController");

// Define route to get subjects by student_regno (parameter)
router.get("/:regNo", getSubjects);

module.exports = router;
