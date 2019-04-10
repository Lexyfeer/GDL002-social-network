'use strict'

const postList = document.querySelector('#postsList');
const form = document.querySelector('#addPost');

const renderPost = (doc) => {
    let li = document.createElement('li');
    let namePost = document.createElement('span');
    let datePost = document.createElement('span');
    let post = document.createElement('span');
    let deletePost = document.createElement('button');
    let updatePost = document.createElement('button');
    let nLikes = document.createElement('span');
    let likePost = document.createElement('button');
    li.setAttribute('data-id', doc.id);
    
    //get date
    const date = new Date (doc.data().date);
    const year = date.getFullYear();
    const hour = date.getHours();
    const getDay = () => {
        const day = date.getDate();
        if(day < 10) {
            return '0' + day;
        } else {
            return day;
        }
    }
    const getMonthF = () => {
        const month = date.getMonth();
        if(month < 10) {
            return '0' + month;
        } else {
            return month;
        }
    }
    const getMinutesF = () => {
        const minutes = date.getMinutes();
        if(minutes < 10) {
            return '0' + minutes;
        } else {
            return minutes;
        }
    }
    const formattedDate = hour + ':' + getMinutesF() + 'hrs' + ' - ' + getDay() + '/' + getMonthF() + '/' + year + ' ';

    namePost.textContent = name;
    datePost.textContent = formattedDate;
    post.textContent = doc.data().post;
    nLikes.textContent = doc.data().likes;
    deletePost.textContent = 'Eliminar';
    updatePost.textContent = 'Editar';
    likePost.textContent = 'Likes';
    
    li.appendChild(namePost);
    li.appendChild(datePost);
    li.appendChild(post);
    li.appendChild(updatePost);
    li.appendChild(deletePost);
    li.appendChild(nLikes);
    li.appendChild(likePost);
    postList.appendChild(li);

    //delete post
    deletePost.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('users').doc(auth.currentUser.uid).collection('posts').doc(id).delete();
    })

    //update post
    updatePost.addEventListener('click', (e) => {
        const oldElement = post;
        const oldText = oldElement.textContent;
        const newElement = document.createElement('input');
        newElement.type = 'text';
        li.appendChild(newElement);

        oldElement.replaceWith(newElement);
        newElement.value = oldText;
        updatePost.textContent = 'Guardar';
        updatePost.addEventListener('click', (e) => {
            let id = e.target.parentElement.getAttribute('data-id');
            db.collection('users').doc(auth.currentUser.uid).collection('posts').doc(id).update({
                post: newElement.value
            });
            updatePost.textContent = 'Editar';
        })
    })
    //update likes
    likePost.addEventListener('click', (e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        const getPost = db.collection('users').doc(auth.currentUser.uid).collection('posts').doc(id);
        getPost.get().then(function (doc) {
            let currentLikes = doc.data().likes;
            currentLikes += 1;
            getPost.update({
                likes: currentLikes
            })
            nLikes.textContent = currentLikes;
        })
    })
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('users').doc(auth.currentUser.uid).collection('posts').add({
        post: form.post.value,
        likes: 0,
        date: new Date().toJSON()
    })
    form.post.value = '';
    console.log('submit post');
    
});

//real-time listener
auth.onAuthStateChanged(user => {
    if(user) {
        db.collection('users').doc(auth.currentUser.uid).collection('posts').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if(change.type === 'added') {
                    renderPost(change.doc)
                } else if (change.type === 'removed') {
                    let li = postList.querySelector('[data-id=' + change.doc.id + ']');
                    postList.removeChild(li);
                    renderPost(change.doc);
                } else if (change.type === 'modified') {
                    let li = postList.querySelector('[data-id=' + change.doc.id + ']');
                    postList.removeChild(li);
                    renderPost(change.doc);
                } else {
                    renderPost(change.doc);
                }
            })
        })
    }
})

