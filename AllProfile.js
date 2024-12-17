
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


//document.querySelectorAll('#submitchanges').forEach(button => {//�al��m�yor  buray� ��zemedim
//    button.addEventListener('click', function () {
//        alert('Changes successfully saved!');
//    });

//});
//document.addEventListener("DOMContentLoaded", () => {// inline  koydum bunlar�n� hatas�n� bulamad�m 
//    // Formu ve inputlar� se�
//    const personalInfoForm = document.getElementById("personalInfoForm");

//    if (personalInfoForm) { // Formun var olup olmad���n� kontrol et
//        // Form submit olay�n� dinle
//        personalInfoForm.addEventListener("submit", function (event) {
//            event.preventDefault(); // Sayfa yenilenmesini engelle

//            // Input de�erlerini al
//            const name = document.getElementById("name").value;
//            const surname = document.getElementById("surname").value;
//            const birthdate = document.getElementById("birthdate").value;
//            const tel = document.getElementById("tel").value;
//            const email = document.getElementById("email").value;

//            // Yeni bilgileri console'a yazd�r (test ama�l�)
//            console.log("Updated Information:");
//            console.log("Name:", name);
//            console.log("Surname:", surname);
//            console.log("Birth Date:", birthdate);
//            console.log("Tel No:", tel);
//            console.log("Email:", email);

//            // Ba�ar� mesaj� g�ster
//            alert("Changes successfully saved!");
//        });
//    } else {
//        console.error("Form with ID 'personalInfoForm' not found.");
//    }
//});




