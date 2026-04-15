let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

// DISPLAY
function displayStudents() {
    let data = document.getElementById("student_data");
    data.innerHTML = "";

    students.forEach((s, i) => {
        data.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.grid}</td>
            <td>${s.course}</td>
            <td>${s.fees}</td>
            <td>${s.age}</td>
            <td>${s.email}</td>
            <td>
                <button onclick="editStudent(${i})">Edit</button>
                <button onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>`;
    });

    localStorage.setItem("students", JSON.stringify(students));
}

// ADD
document.getElementById("addForm").addEventListener("submit", function(e){
    e.preventDefault();

    let student = {
        name: document.getElementById("name").value,
        grid: document.getElementById("grid").value,
        course: document.getElementById("course").value,
        fees: document.getElementById("fees").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value
    };

    students.push(student);
    displayStudents();
    this.reset();
    closeAddModal();
});

// DELETE
function deleteStudent(i){
    students.splice(i,1);
    displayStudents();
}

// EDIT
function editStudent(i){
    editIndex = i;
    let s = students[i];

    document.getElementById("edit_name").value = s.name;
    document.getElementById("edit_grid").value = s.grid;
    document.getElementById("edit_course").value = s.course;
    document.getElementById("edit_fees").value = s.fees;
    document.getElementById("edit_age").value = s.age;
    document.getElementById("edit_email").value = s.email;

    openEditModal();
}

// UPDATE
document.getElementById("editForm").addEventListener("submit", function(e){
    e.preventDefault();

    students[editIndex] = {
        name: document.getElementById("edit_name").value,
        grid: document.getElementById("edit_grid").value,
        course: document.getElementById("edit_course").value,
        fees: document.getElementById("edit_fees").value,
        age: document.getElementById("edit_age").value,
        email: document.getElementById("edit_email").value
    };

    displayStudents();
    closeEditModal();
});

// MODAL CONTROL
function openAddModal(){
    document.getElementById("crud-modal").classList.remove("hidden");
}

function closeAddModal(){
    document.getElementById("crud-modal").classList.add("hidden");
}

function openEditModal(){
    document.getElementById("crud-modal1").classList.remove("hidden");
}

function closeEditModal(){
    document.getElementById("crud-modal1").classList.add("hidden");
}

// LOAD
displayStudents();