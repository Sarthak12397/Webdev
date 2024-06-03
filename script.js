document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.slider .list .item');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let itemActive = 0;
    let index = 0;

    function showNextSlide() {
        items[index].classList.remove('active');
        index = (index + 1) % items.length;
        items[index].classList.add('active');
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    window.onload = function() {
        setTimeout(() => {
            document.querySelector('.slider').classList.add('fade-out');
        }, 5000); // Start fade-out animation after 5 seconds
    };

    // Toggle menu functionality
    const toggles = document.querySelector('.toggles');
    const nav = document.querySelector('.nav');

    toggles.addEventListener('click', () => {
        toggles.classList.toggle('active');
        nav.classList.toggle('active');
    });

    next.addEventListener('click', function() {
        showSlider((itemActive + 1) % items.length);
    });

    prev.addEventListener('click', function() {
        showSlider((itemActive - 1 + items.length) % items.length);
    });

    function showSlider(index) {
        items[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        items[index].classList.add('active');
        thumbnails[index].classList.add('active');
        itemActive = index;
    }

    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Toggle menu function
    function toggleMenu() {
        const toggleMenu = document.querySelector(".toggles");
        const nav = document.querySelector('.nav');
        toggleMenu.classList.toggle('active');
        nav.classList.toggle('active');
    }

    // Form submission handling
    document.getElementById("contact").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Display an alert message
        alert("Thank you for your message! We will get back to you soon.");

        // Reset the form
        event.target.reset();
    });

    // Review submission
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

    // Sanitize input
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    // Modal functions
    function openModal(gameId) {
        document.getElementById(gameId + '-modal').style.display = "block";
    }

    function closeModal(gameId) {
        document.getElementById(gameId + '-modal').style.display = "none";
    }
});
