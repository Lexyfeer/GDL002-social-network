'use strict'
//Despues de que termino de cargar el html entonces entro al load del window.
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    if (user.emailVerified) {
      document.getElementById('content').style.display = 'block';
    }
    // show(user);
    // User is signed in.
    // var displayName = user.displayName;
    // var email = user.email;
    // console.log(user);
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // ...
    console.log('Existe usuario activo');
  } else {
    // User is signed out.
    console.log('No existe usuario activo');
    // ... 
  }
});

window.addEventListener("load", () => {

  // function show(user){
  //   let user = (user);
  //   if(user.emailVerified) {
  //     document.getElementById('content').style.display ='block';
  //   }; 
  // };

  // Registra usuarios en base firebase por correo y contraseña.
  document.getElementById('send').addEventListener('click', (e) => {
    e.preventDefault();
    // saveUserData(); //Guarda los demas datos del usuario en otra base por separado.

    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('password').value;


    firebase.auth().createUserWithEmailAndPassword(correo, contraseña).then(cred => {
      let db = firebase.firestore();
      db.collection('users').doc(cred.uid).set({
        name: document.getElementById('name').value,
        nick: document.getElementById('nickname').value,
        date: document.getElementById('date').value
      }).then(function () {
        verify(); //manda correo de verificacion.
        console.log('usuario agregado correctamente');
      }).catch(function (error1) {
        console.log(error1);
      });
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      // if (errorCode === 'auth/email-already-in-use') {
      //   let textError = getElementById('errores').style.display = block;
      //   textError.innerHTML = 'El correo esta en uso por otra cuenta';
      // } else if (errorCode === 'auth/weak-password') { 
      //   let textError = getElementById('errores').style.display = block;
      //   textError.innerHTML = 'La contraseña debe tener minimo 6 caracteres';
      // };

    });
  });

  document.getElementById('logIn').addEventListener('click', () => {
    console.log('diste un click');
    let correoLog = document.getElementById('emailLog').value;
    let passwordLog = document.getElementById('passwordLog').value;

    firebase.auth().signInWithEmailAndPassword(correoLog, passwordLog)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  });


  document.getElementById("close1").addEventListener('click', () => {
    firebase.auth().signOut()
      .then(function () {
        // Sign-out successful.
        console.log('Saliendo...')
        document.getElementById('content').style.display = 'none';
      })
      .catch(function (error) {
        // An error happened.
      });
  });

  function verify() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification()
      .then(function () {
        // Email sent.
        console.log('Enviando correo...');
        alert('email enviado');
        firebase.auth().signOut();
        document.getElementById('formRegister').reset();
      })
      .catch(function (error) {
        // An error happened.
      });
  };

});//Fin del load del window

  //  guardando informacion del usuario al momento de darle click al boton registrar
  // function saveUserData() {
  //   let correo = document.getElementById('email').value;
  //   let name = document.getElementById('name').value;
  //   let nick = document.getElementById('nickname').value;
  //   let date = document.getElementById('date').value;
  //   let yearAct = 2019;
  //   let age = (yearAct - date);

  // Initialize Cloud Firestore through Firebase
  //   var db = firebase.firestore();
  //   db.collection("users").add({
  //     email: correo,
  //     name: name,
  //     nickname: nick,
  //     birthdate: date,
  //     age: age
  //   })
  //     .then(function (docRef) {
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch(function (error) {
  //       console.error("Error adding document: ", error);
  //     });
  // };




// const posts = document.querySelector('posts');
// //setup posts
// const setupPosts = (data) => {
//     let html = '';
//     data.forEach(doc => {
//         const post = doc.data();
//         const li = `
//         <li>
//             <div class = 'collabsible post'>${post.content}</div>
//         </li>
//         `;
//         html += li
//     })
// }
