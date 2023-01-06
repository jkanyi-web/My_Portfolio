const crossButton = document.querySelector('.overlay-cross-button');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const navHamIcon = document.querySelector('.navigate');
const mobileMenuLinks = document.querySelectorAll('.list-item > a');

navHamIcon.addEventListener('click', () => {
  mobileMenuOverlay.style.right = '0';
  mobileMenuOverlay.style.display = 'flex';
});

crossButton.addEventListener('click', () => {
  mobileMenuOverlay.style.right = '100%';
  mobileMenuOverlay.style.display = 'none';
});

mobileMenuLinks.forEach((mobileMenuLink) => {
  mobileMenuLink.addEventListener('click', () => {
    mobileMenuOverlay.style.right = '100%';
    mobileMenuOverlay.style.display = 'none';
  });
});