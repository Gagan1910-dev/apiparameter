function fetchSubjects() {
    const regNo = document.getElementById('regNoInput').value;

    if (!regNo) {
        alert("Please enter registration number");
        return;
    }

    const apiUrl = `http://localhost:5000/api/subjects?reg_no=${encodeURIComponent(regNo)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("📜 Data received from API:", data);
            displaySubjects(data); // Call function to insert into frontend
        })
        .catch(error => {
            console.error("❌ Error fetching data:", error);
            document.getElementById('resultContainer').innerHTML = `<p style="color: red;">Failed to fetch data. Please try again.</p>`;
        });
}

function displaySubjects(subjects) {
    const container = document.getElementById('resultContainer');
    if (subjects.length === 0) {
        container.innerHTML = "<p>No subjects found for this registration number.</p>";
        return;
    }

    let tableHtml = `
        <table>
            <thead>
                <tr>
                    <th>Reg No</th>
                    <th>Academic ID</th>
                    <th>Branch</th>
                    <th>Credits</th>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Grade</th>
                    <th>Internals</th>
                </tr>
            </thead>
            <tbody>
    `;

    subjects.forEach(subject => {
        tableHtml += `
            <tr>
                <td>${subject.student_regno}</td>
                <td>${subject.academic_id}</td>
                <td>${subject.branch}</td>
                <td>${subject.credits}</td>
                <td>${subject.sub_code}</td>
                <td>${subject.sub_name}</td>
                <td>${subject.result_grade}</td>
                <td>${subject.internals}</td>
            </tr>
        `;
    });

    tableHtml += `
            </tbody>
        </table>
    `;

    container.innerHTML = tableHtml;
}
