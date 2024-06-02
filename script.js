document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.slider .list .item');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let itemActive = 0;

    next.addEventListener('click', function() {
        showSlider((itemActive + 1) % items.length);
    });

    prev.addEventListener('click', function() {
        showSlider((itemActive - 1 + items.length) % items.length);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            showSlider(index);
        });
    });

    function showSlider(index) {
        items[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        items[index].classList.add('active');
        thumbnails[index].classList.add('active');
        itemActive = index;
    }
});

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    const toggleMenu = document.querySelector(".toggles");
    const nav = document.querySelector('.nav');
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
}


function openModal(gameId) {
    document.getElementById(gameId + '-modal').style.display = "block";
}

function closeModal(gameId) {
    document.getElementById(gameId + '-modal').style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Display an alert message
        alert("Thank you for your message! We will get back to you soon.");

        // Reset the form
        event.target.reset();
    });
});


function submitReview(gameId) {
    const nameInput = document.getElementById(`reviewerName${gameId}`);
    const reviewInput = document.getElementById(`reviewText${gameId}`);
    const reviewsList = document.getElementById(`reviewsList${gameId}`);

    const reviewerName = sanitizeInput(nameInput.value.trim());
    const reviewText = sanitizeInput(reviewInput.value.trim());

    if (reviewerName && reviewText) {
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `<strong>${reviewerName}:</strong> <p>${reviewText}</p>`;
        reviewsList.appendChild(reviewItem);

        nameInput.value = '';
        reviewInput.value = '';
    }
}

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

