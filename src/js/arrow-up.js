window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}

// Get the "Back to Top" button element
const backToTopButton = document.getElementById('backToTopBtn');

// Function to show or hide the button based on the user's scroll position
function toggleBackToTopButton() {
    if (window.scrollY > 0) {
        backToTopButton.style.display = 'block'; // Show the button when scrolling down
    } else {
        backToTopButton.style.display = 'none'; // Hide the button when at the top of the page
    }
}

// Event listener to trigger the function when the user scrolls
window.addEventListener('scroll', toggleBackToTopButton);