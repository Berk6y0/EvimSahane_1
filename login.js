document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsayýlan gönderimini engelle

    // Email ve þifre alanlarýný kontrol et
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }
    else {

        localStorage.setItem("isLoggedIn", "true");
        
        alert("Login successful!");

        // Baþka bir sayfaya yönlendir
        window.location.href = "index.html";
    }

});
