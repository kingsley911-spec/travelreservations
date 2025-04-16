
// alert('Welcome to Travel + Reservation');


// JavaScript to toggle the navigation menu on small screens
const hamburger = document.querySelector('.hamburger');
const navContent = document.querySelector('.nav-content');

hamburger.addEventListener('click', () => {
  navContent.style.display = navContent.style.display === 'flex' ? 'none' : 'flex';
});
