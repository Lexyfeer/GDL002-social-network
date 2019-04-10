// 'use strict'

// const postList = document.querySelector('#posts-list');
// const form = document.querySelector('#add-post');

// //create element and render them
// const renderPost = (doc) => {
//     let li = document.createElement('li');
//     let post = document.createElement('span');
//     let deletePost = document.createElement('button');
//     let updatePost = document.createElement('button');

//     li.setAttribute('data-id', doc.id);
//     post.textContent = doc.data().post;
//     deletePost.textContent = 'Eliminar';
//     updatePost.textContent = 'Editar';

//     li.appendChild(post);
//     li.appendChild(updatePost);
//     li.appendChild(deletePost);
//     postList.appendChild(li);

//     //deleting post
//     deletePost.addEventListener('click', (e) => {
//         e.stopPropagation();
//         let id = e.target.parentElement.getAttribute('data-id');
//         db.collection('posts').doc(id).delete();
//     })

//     updatePost.addEventListener('click', (e) => {
//         const oldElement = post;
//         const oldText = oldElement.textContent;
//         const newElement = document.createElement('input');
//         newElement.type = 'text';
//         li.appendChild(newElement);

//         oldElement.replaceWith(newElement);
//         newElement.value = oldText;
//         const updateButton = document.createElement('button');
//         updateButton.textContent = 'Actualizar';
//         li.appendChild(updateButton);

//         updateButton.addEventListener('click', (e) => {
//             post.textContent = newElement.value;
//             newElement.replaceWith(oldElement);
//             let id = e.target.parentElement.getAttribute('data-id');
//             console.log('id', id);
//             e.stopPropagation();
//             e.preventDefault();
//             db.collection('posts').doc(id).update({
//                 post: newElement.value
//             });
//             li.removeChild(updateButton);
//         })

//     })
// }

// //getting posts
// // db.collection('posts').get().then((snapshot) => {
// //     snapshot.docs.forEach(doc => {
// //         renderPost(doc);
// //         // console.log(doc.data());
// //     })
// // })

// //saving posts
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('posts').add({
//         post: form.post.value
//     })
//     form.post.value = '';
// })


// //real-time listener
// db.collection('posts').onSnapshot(snapshot => {
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         if (change.type === 'added') {
//             renderPost(change.doc)
//         } else if (change.type === 'removed') {
//             let li = postList.querySelector('[data-id=' + change.doc.id + ']');
//             postList.removeChild(li);
//         }
//     })
// })

