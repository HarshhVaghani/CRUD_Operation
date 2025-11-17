const modal = document.getElementById("studentModal");
const addBtn = document.querySelector("button.px-4.py-2.bg-blue-600");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("studentForm");

addBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

const table = document.querySelector("table");


// Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        grid: document.getElementById("grid").value,
        gender: document.getElementById("gender").value,
        course: document.getElementById("course").value,
        department: document.getElementById("department").value,
        contact: document.getElementById("contact").value
    };

    // Save to db.json using json-server
    fetch("http://localhost:3000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
    })
        .then(res => res.json())
        .then(data => console.log("Saved:", data));

    // Create HTML table row
    const row = document.createElement("tr");   
    row.innerHTML = `
        <td class="px-6 py-4"><input type="checkbox"></td>
        <td class="px-6 py-4 text-sm text-gray-800">${studentData.name}</td>
        <td class="px-6 py-4 text-sm text-gray-600">${studentData.email}</td>
        <td class="px-6 py-4 text-sm text-gray-600">${studentData.age}</td>
        <td class="px-6 py-4 text-sm text-gray-600">${studentData.grid}</td>
        <td class="px-6 py-4 text-sm text-gray-600">${studentData.gender}</td>
        <td class="px-6 py-4 text-sm text-gray-600">${studentData.course}</td>
        <td class="px-6 py-4 text-sm text-gray-600">${studentData.department}</td>
        <td class="px-6 py-4 text-sm text-gray-600">${studentData.contact}</td>
        <td class="px-6 py-4 text-right text-sm text-gray-600">
            <button class="edit-btn text-blue-600 hover:underline">Edit</button>
            <button class="delete-btn text-red-600 hover:underline ml-2">Delete</button>
        </td>
    `;

    table.appendChild(row);

    // Close modal
    modal.classList.add("hidden");
    form.reset();
});

// DELETE Button
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const row = e.target.closest("tr");

        if (confirm("Are you sure you want to delete this student?")) {
            row.remove();
        }
    }
});
