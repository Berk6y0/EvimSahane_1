
document.addEventListener("DOMContentLoaded", () => {
    // Kullanýcýnýn giriþ durumunu kontrol et
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    const authButtons = document.querySelector(".auth-buttons");
    const logButton = document.getElementById("log-button");

    if (isLoggedIn) {
        // Giriþ yapýlmýþsa butonlarý kaldýr ve profil ikonunu ekle
        authButtons.innerHTML = `
            <div class="profile-icon" onclick="window.location.href='personalinformations.html'">
                <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt="Profile">
            </div>
        `;
        logButton.style.display = "block";
    } else {
        // Giriþ yapýlmamýþsa Log Out butonunu gizle
        logButton.style.display = "none";
    }
});

// Logout Fonksiyonu
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
}




   

