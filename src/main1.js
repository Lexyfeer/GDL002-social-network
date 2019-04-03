window.addEventListener("load", () => {
document.getElementById('send').addEventListener('click', ()=> {
    let correo = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let nick = document.getElementById('nickname').value;
    let date = document.getElementById('date').value;

    firebase.initializeApp({
        apiKey: "AIzaSyDyLgS065H1XTNDOP-7WV4sKqXSnOsXewE",
        authDomain: "redsocialusuarios.firebaseapp.com",
        projectId: "redsocialusuarios",
      });

     // Initialize Cloud Firestore through Firebase
     var db = firebase.firestore();
     db.collection("users").add({
     email: correo,
     name: name,
     nickname: nick,
     birthdate: date
     })
     .then(function(docRef) {
       console.log("Document written with ID: ", docRef.id);
     })
     .catch(function(error) {
       console.error("Error adding document: ", error);
     });
});
});
