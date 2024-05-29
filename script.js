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