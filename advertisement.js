// Handle deleting an advertisement
document.querySelectorAll('.delete-ad-btn').forEach(button => {
    button.addEventListener('click', function () {
        const ad = this.parentElement;
        ad.remove(); // Remove the advertisement from the list
        alert('Advertisement deleted successfully!');
    });
});

// Handle posting a new advertisement
document.getElementById('postAdForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('adTitle').value;
    const description = document.getElementById('adDescription').value;

    if (title && description) {
        // Add new advertisement to the list
        const adList = document.querySelector('.ad-list');
        const newAd = document.createElement('li');
        newAd.innerHTML = `
            <strong>Title:</strong> ${title} <br>
            <strong>Description:</strong> ${description} <br>
            <button class="delete-ad-btn">Delete</button>
        `;
        adList.appendChild(newAd);

        // Add delete functionality to the new button
        newAd.querySelector('.delete-ad-btn').addEventListener('click', function () {
            newAd.remove();
            alert('Advertisement deleted successfully!');
        });

        // Reset the form
        document.getElementById('postAdForm').reset();

        alert('Advertisement posted successfully!');
    }
});
