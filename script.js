const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuLinks = document.querySelectorAll('.list-item > a');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const crossIcon = document.querySelector('#cross-icon');
const menuToggle = document.querySelector('#menu-toggle');

menuToggle.addEventListener('click', (event) => {
  event.preventDefault();
  if (mobileMenuOverlay.style.display === 'none' || mobileMenuOverlay.style.display === '') {
    mobileMenuOverlay.style.right = '0';
    mobileMenuOverlay.style.display = 'flex';
    hamburgerIcon.style.display = 'none';
    crossIcon.style.display = 'block';
  } else {
    mobileMenuOverlay.style.right = '100%';
    mobileMenuOverlay.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    crossIcon.style.display = 'none';
  }
});

mobileMenuLinks.forEach((mobileMenuLink) => {
  mobileMenuLink.addEventListener('click', () => {
    mobileMenuOverlay.style.right = '100%';
    mobileMenuOverlay.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    crossIcon.style.display = 'none';
  });
});
