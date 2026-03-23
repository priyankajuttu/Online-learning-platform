function validateForm() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    if (name === "" || password === "") {
        alert("All fields required");
        return false;
    }
    if (password !== confirm) {
       alert("Passwords do not match");
        return false;
    }
    return true;
}