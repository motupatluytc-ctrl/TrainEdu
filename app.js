function showPage(pageId) {
    document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
    document.getElementById(pageId).style.display = "block";
}

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        showPage("adminPage");
    }
    else if (user !== "" && pass !== "") {
        showPage("dashboardPage");
    }
    else {
        alert("Enter correct username & password");
    }
}

function logout() {
    showPage("loginPage");
}

function uploadCourse() {
    let course = document.getElementById("courseName").value;

    if (course === "") {
        alert("Enter a course title!");
        return;
    }

    document.getElementById("success").innerHTML =
        "✔ Course '" + course + "' uploaded successfully!";
      }
