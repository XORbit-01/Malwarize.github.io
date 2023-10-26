window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    const scrollY = window.scrollY;

    // Show the button when the user scrolls down (at least 200px from the top)
    if (scrollY >= 200) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});