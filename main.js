document.getElementById('send').addEventListener('click', register);
function register () {
    // console.log('diste un click');
    // let nombre = document.getElementById('name').value;
    // let nick = document.getElementById('nickname').value;
    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
    // .then(function() {
    //   let usuario = createUserWithEmailAndPassword(correo, contraseña) + nombre + nick;
    //   console.log(usuario);
    // })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });

    // console.log(correo);
    // console.log(contraseña);  
};

document.getElementById('logIn').addEventListener('click', access);
function access () {
    console.log('diste un click');
    let correoLog = document.getElementById('emailLog').value;
    let passwordLog = document.getElementById('passwordLog').value;

    firebase.auth().signInWithEmailAndPassword(correoLog, passwordLog).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });  
};

function observer () {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log('Existe usuario activo');
          show();
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          console.log('No existe usuario activo');
          
          // ...
        }
      });
};
observer();

function show () {
    let contenido = document.getElementById('content');
    contenido.innerHTML = `<h2>Bienvenido</h2>
    <button id="close1">Cerrar sesión</button>`;
};

// document.getElementById('close1').addEventListener('click',close);
// function close () {
  
// firebase.auth().signOut()
// .then(function() {
// // Sign-out successful.
// console.log('Saliendo...')
// })
// .catch(function(error) {
// // An error happened.
// });
// };