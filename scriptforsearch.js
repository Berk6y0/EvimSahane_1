// Sayfa yüklendiğinde DOMContentLoaded event listener'ı eklenir
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const propertyCards = document.querySelectorAll(".property-card");
    const favoriteButtons = document.querySelectorAll(".favorite-button");

    // Arama çubuğuna filtreleme işlemi ekleme
    searchInput.addEventListener("input", () => {
        const filterText = searchInput.value.toLowerCase();

        propertyCards.forEach((card) => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const price = card.querySelector(".price").textContent.toLowerCase();

            // İlgili başlık veya fiyat içeriğine göre filtreleme
            if (title.includes(filterText) || price.includes(filterText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Favori butonlarına event listener ekleme
    favoriteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("favorited");
            if (button.classList.contains("favorited")) {
                button.textContent = "♥ Favorited";
            } else {
                button.textContent = "♡ Add to Favorites";
            }
        });
    });

    // Haritada bir örnek işaretleme (Static Map Pin Logic - geliştirme aşamasında)
    const mapPlaceholder = document.getElementById("map");
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener("click", () => {
            alert("Map interaction is under development.");
        });
    }
});
