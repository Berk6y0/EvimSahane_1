
document.querySelectorAll('.delete-ad-btn').forEach(button => {
    button.addEventListener('click', function () {
        const ad = this.parentElement;
        ad.remove(); 
        alert('Advertisement deleted successfully!');
    });
});


document.getElementById('postAdForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('adTitle').value;
    const description = document.getElementById('adDescription').value;

    if (title && description) {
 
        const adList = document.querySelector('.ad-list');
        const newAd = document.createElement('li');
        newAd.innerHTML = `
            <strong>Title:</strong> ${title} <br>
            <strong>Description:</strong> ${description} <br>
            <button class="delete-ad-btn">Delete</button>
        `;
        adList.appendChild(newAd);

     
        newAd.querySelector('.delete-ad-btn').addEventListener('click', function () {
            newAd.remove();
            alert('Advertisement deleted successfully!');
        });

  
        document.getElementById('postAdForm').reset();

        alert('Advertisement posted successfully!');
    }
 

});


//document.querySelectorAll('#submitchanges').forEach(button => {//çalýþmýyor  burayý çözemedim
//    button.addEventListener('click', function () {
//        alert('Changes successfully saved!');
//    });

//});
//document.addEventListener("DOMContentLoaded", () => {// inline  koydum bunlarýný hatasýný bulamadým 
//    // Formu ve inputlarý seç
//    const personalInfoForm = document.getElementById("personalInfoForm");

//    if (personalInfoForm) { // Formun var olup olmadýðýný kontrol et
//        // Form submit olayýný dinle
//        personalInfoForm.addEventListener("submit", function (event) {
//            event.preventDefault(); // Sayfa yenilenmesini engelle

//            // Input deðerlerini al
//            const name = document.getElementById("name").value;
//            const surname = document.getElementById("surname").value;
//            const birthdate = document.getElementById("birthdate").value;
//            const tel = document.getElementById("tel").value;
//            const email = document.getElementById("email").value;

//            // Yeni bilgileri console'a yazdýr (test amaçlý)
//            console.log("Updated Information:");
//            console.log("Name:", name);
//            console.log("Surname:", surname);
//            console.log("Birth Date:", birthdate);
//            console.log("Tel No:", tel);
//            console.log("Email:", email);

//            // Baþarý mesajý göster
//            alert("Changes successfully saved!");
//        });
//    } else {
//        console.error("Form with ID 'personalInfoForm' not found.");
//    }
//});




