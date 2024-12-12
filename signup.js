document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsayýlan gönderimini engelle

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Sign up successful!");
    window.location.href = "login.html"; // Sign-up sonrasý yönlendirme
});
