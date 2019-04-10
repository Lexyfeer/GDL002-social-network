'use strict'

//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = signupForm['signup-email'].value;
    const verifiedEmail = signupForm['verified-email'].value;
    const password = signupForm['signup-password'].value;
    const verifiedPassword = signupForm['verified-password'].value;

    if (email === verifiedEmail && password === verifiedPassword) {
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            db.collection('users').doc(auth.user.uid).set({
                name: signupForm['signup-name'].value,
                nickname: signupForm['signup-nickname'].value,
                bd: signupForm['signup-bd'].value
            }).then(function () {
                console.log('usuario creado');
                signupForm.reset();
                
            }).catch(function (error) {
                console.log(error.code);
                console.log(error.message);
            })
        })
    } else {
        alert('Por favor revisa tus datos y vuelve a intentarlo.')
    }
})

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    document.querySelector('#postsList').style.display = 'none';
})

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            console.log('sesion iniciada');
        }).catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });
    
    /*user.updateProfile({
        displayName: nickname
    }).then(cred => {
        updateForm.reset();
    })
        .then(console.log(user))*/
})