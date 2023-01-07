const userName = document.getElementById('fname');
const userEmail = document.getElementById('email');
const userComment = document.getElementById('textarea');
const contactForm = document.getElementById('contact-form');

function storeForm() {
  const myStorage = {
    userName: userName.value,
    userEmail: userEmail.value,
    userComment: userComment.value,
  };
  localStorage.setItem('storage', JSON.stringify(myStorage));
}

userName.addEventListener('onchange', storeForm);
userEmail.addEventListener('onchange', storeForm);
userComment.addEventListener('onchange', storeForm);

function refresh() {
  if (localStorage.getItem('storage')) {
    const oldStorage = localStorage.getItem('storage');
    const newStorage = JSON.parse(oldStorage);
    contactForm.fname.value = newStorage.userName;
    contactForm.email.value = newStorage.userEmail;
    contactForm.textarea.value = newStorage.userComment;
  }
}

window.onload = refresh();