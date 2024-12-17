document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsay�lan g�nderimini engelle

    // Email ve �ifre alanlar�n� kontrol et
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }
    else {

        localStorage.setItem("isLoggedIn", "true");
        
        alert("Login successful!");

        // Ba�ka bir sayfaya y�nlendir
        window.location.href = "index.html";
    }

});
