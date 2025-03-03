// const db = require("../config/db");  // Import database connection

// // Function to Fetch Subjects from Database
// const getSubjects = (req, res) => {
//   const sql =  "SELECT DISTINCT st.student_regno, st.academic_id, st.branch, rt.credits, rt.sub_code, s.sub_name, rt.result_grade, rt.internals 	FROM student_table st 	INNER JOIN result_table rt	ON st.student_regno = rt.student_regno	INNER JOIN sub_table s	ON rt.sub_code = s.sub_code	WHERE st.student_regno = '226M1A0527' "  ;  // ✅ SQL Query to get all subjects

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error("❌ Error fetching data: ", err);
//       return res.status(500).json({ error: "Database error" });
//     }
    
//     console.log("📜 Retrieved Data from Database:", results);  // ✅ Print data in terminal
//     res.json(results);  // ✅ Send data as JSON response
//   });
// };

// module.exports = { getSubjects };



const db = require("../config/db");  // Import database connection

// Function to Fetch Subjects using reg_no from URL parameter
const getSubjects = (req, res) => {
    const regNo = req.params.regNo;  // ✅ Read from URL parameter

    const sql = `
        SELECT DISTINCT st.student_regno, st.academic_id, st.branch, rt.credits, rt.sub_code, s.sub_name, rt.result_grade, rt.internals
        FROM student_table st
        INNER JOIN result_table rt ON st.student_regno = rt.student_regno
        INNER JOIN sub_table s ON rt.sub_code = s.sub_code
        WHERE st.student_regno = ?
    `;  // ✅ Use parameterized query for safety (avoid SQL injection)

    db.query(sql, [regNo], (err, results) => {
        if (err) {
            console.error("❌ Error fetching data: ", err);
            return res.status(500).json({ error: "Database error" });
        }
        
        console.log("📜 Retrieved Data from Database:", results);  // ✅ Print data in terminal
        res.json(results);  // ✅ Send data as JSON response
    });
};

module.exports = { getSubjects };
