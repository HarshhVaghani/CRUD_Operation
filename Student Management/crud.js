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

    // Use of DOM to get the value from the HTML
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const grid = document.getElementById("grid").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("course").value;
    const department = document.getElementById("department").value;
    const contact = document.getElementById("contact").value;

    // Create table row
    const row = document.createElement("tr");
    row.innerHTML = `
    <td class="px-6 py-4"><input type="checkbox"></td>
    <td class="px-6 py-4 text-sm text-gray-800">${name}</td>
    <td class="px-6 py-4 text-sm text-gray-600">${email}</td>
    <td class="px-6 py-4 text-sm text-gray-600">${age}</td>
    <td class="px-6 py-4 text-sm text-gray-600">${grid}</td>
    <td class="px-6 py-4 text-sm text-gray-600">${gender}</td>
    <td class="px-6 py-4 text-sm text-gray-600">${course}</td>
    <td class="px-6 py-4 text-sm text-gray-600">${department}</td>
    <td class="px-6 py-4 text-sm text-gray-600">${contact}</td>
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

