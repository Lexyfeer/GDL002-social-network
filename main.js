'use strict'
//Despues de que termino de cargar eñ html entonces entro al load del window

window.addEventListener("load", () => {

  function observer() {
    firebase.auth().onAuthStateChanged(function (user) {
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

  function show(){
    document.getElementById('content').style.display ='block';
  }

  document.getElementById('send').addEventListener('click', ()=> {
    // console.log('diste un click');

    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(correo, contraseña)
       .then(function() {
      //   let usuario = createUserWithEmailAndPassword(correo, contraseña) + nombre + nick;
        // let nombre = document.getElementById('name').value;
        // let nick = document.getElementById('nickname').value;
        // let datas = {
        //   'email': correo,
        //   'name': nombre, 
        //   'nick': nick,
        //   'photo': 'url'
        // }
        // firebase.getCollectioName('users')(){
        //   firebase.savePost(datas)
        // }
         console.log('usuario agregado correctamente');
       })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      }); 
  });

  document.getElementById('logIn').addEventListener('click', ()=> {
    console.log('diste un click');
    let correoLog = document.getElementById('emailLog').value;
    let passwordLog = document.getElementById('passwordLog').value;
  
    firebase.auth().signInWithEmailAndPassword(correoLog, passwordLog).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  });

  
    document.getElementById("close1").addEventListener('click', ()=>{
      firebase.auth().signOut()
      .then(function () {
        // Sign-out successful.
        console.log('Saliendo...')
        document.getElementById('content').style.display ='none';
      })
      .catch(function (error) {
        // An error happened.
      });
    });
    


});//Fin del load del window
