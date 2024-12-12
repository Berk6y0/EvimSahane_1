document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    if (!email || !name) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Profile updated successfully!");
});
