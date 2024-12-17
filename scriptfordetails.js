// G�rsel ge�i�leri i�in basit slider mant���
document.addEventListener("DOMContentLoaded", () => {
    const bedroomImages = document.querySelectorAll(".bedroom-images img");
    const mainImage = document.querySelector(".main-image img");
    const thumbnails = document.querySelectorAll(".side-images img");

    // K���k g�rsellere t�klad�k�a ana g�rseli de�i�tir
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            const newSrc = thumbnail.getAttribute("src");
            mainImage.setAttribute("src", newSrc);
        });
    });

    // Yatak odas� g�rselleri i�in ge�i� ekle
    let currentIndex = 0;
    const totalImages = bedroomImages.length;

    setInterval(() => {
        bedroomImages.forEach((img, index) => {
            img.style.display = index === currentIndex ? "block" : "none";
        });
        currentIndex = (currentIndex + 1) % totalImages;
    }, 3000); // 3 saniyede bir ge�i� yapar
});

// Sat�c�n�n telefon numaras�n� gizleme/ g�sterme mant���
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
