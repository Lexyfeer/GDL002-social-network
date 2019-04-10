//clik in register
document.querySelector('#linkRegister').addEventListener('click', () => {
  document.querySelector('#modal-sign-up').style.display = 'block';
  document.querySelector('#modal-login').style.display = 'none';
});

//clik in login
document.querySelector('#linkLogin').addEventListener('click', () => {
  document.querySelector('#modal-sign-up').style.display = 'none';
  document.querySelector('#modal-login').style.display = 'block';
});

//if user signed in
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in', user.uid);
    document.querySelector('#modal-sign-up').style.display = 'none';
    document.querySelector('#modal-login').style.display = 'none';
    document.querySelector('#modal-navbar').style.display = 'block';
    document.querySelector('#modal-wallpost').style.display = 'block';
  } else {
    console.log('user logged out');
    document.querySelector('#modal-login').style.display = 'block';
    document.querySelector('#modal-wallpost').style.display = 'none';
    document.querySelector('#modal-navbar').style.display = 'none';
    document.querySelector('#modal-profile').style.display = 'none';
    document.querySelector('#modal-account').style.display = 'none';
  }
})

//functions for navbars
document.querySelector('#linkNewsFeed').addEventListener('click', () => {
  document.querySelector('#modal-wallpost').style.display = 'block';
  document.querySelector('#modal-account').style.display = 'none';
  document.querySelector('#modal-profile').style.display = 'none';
});
document.querySelector('#linkProfile').addEventListener('click', () => {
  document.querySelector('#modal-wallpost').style.display = 'none';
  document.querySelector('#modal-account').style.display = 'none';
  document.querySelector('#modal-profile').style.display = 'block';
});
document.querySelector('#linkAccount').addEventListener('click', () => {
  document.querySelector('#modal-wallpost').style.display = 'none';
  document.querySelector('#modal-account').style.display = 'block';
  document.querySelector('#modal-profile').style.display = 'none';
});
