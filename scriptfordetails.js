// Görsel geçiþleri için basit slider mantýðý
document.addEventListener("DOMContentLoaded", () => {
    const bedroomImages = document.querySelectorAll(".bedroom-images img");
    const mainImage = document.querySelector(".main-image img");
    const thumbnails = document.querySelectorAll(".side-images img");

    // Küçük görsellere týkladýkça ana görseli deðiþtir
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            const newSrc = thumbnail.getAttribute("src");
            mainImage.setAttribute("src", newSrc);
        });
    });

    // Yatak odasý görselleri için geçiþ ekle
    let currentIndex = 0;
    const totalImages = bedroomImages.length;

    setInterval(() => {
        bedroomImages.forEach((img, index) => {
            img.style.display = index === currentIndex ? "block" : "none";
        });
        currentIndex = (currentIndex + 1) % totalImages;
    }, 3000); // 3 saniyede bir geçiþ yapar
});

// Satýcýnýn telefon numarasýný gizleme/ gösterme mantýðý
const phoneButton = document.createElement("button");
phoneButton.textContent = "Show Phone Number";
phoneButton.style.padding = "10px";
phoneButton.style.marginTop = "10px";

const sellerInfoSection = document.querySelector(".seller-info");
sellerInfoSection.appendChild(phoneButton);

phoneButton.addEventListener("click", () => {
    const phoneNumber = "0546843125";
    phoneButton.textContent = phoneNumber;
});
