document.getElementById('myButton').addEventListener('click', function () {
    login();
});

function login() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    if (username === "amps" && password === "12345678") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}
