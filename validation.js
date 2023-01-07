const small = document.querySelector('.contact-form-small');
const email = document.querySelector('#email');
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    small.innerHTML = 'Please enter email in lowercase';
  } else {
    small.innerHTML = '';
    form.submit();
  }
});