
/* ==== Select the input element ==== */
const form = document.querySelector('#message-form')
/* ==== Set up Submit Button ==== */

form.addEventListener('submit', function(e){
    e.preventDefault()
    const messageContent = document.querySelector('.message-content');
    const feedback = document.querySelector('.feedback');
    const message = document.querySelector('#message');

    messageContent.textContent = message.value;
    
    if(document.querySelector('#message').value == '') {
        feedback.classList.add('show');
        setTimeout( () => {
        feedback.classList.remove('show')
        }, 2000);
    } else {
    }
})
