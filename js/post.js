import {saveTask} from '../js/config.js'

window.addEventListener('DOMContentLoaded', () => {

})


    const postForm = document.getElementById('post-form');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const title = postForm['post-title']
        const description = postForm['post-description']
        const imgUrl = postForm['post-image']


       saveTask(title.value, description.value, imgUrl.value);

       postForm.reset()
     });


   
