

const form = document.querySelector('#message-form');


form.addEventListener('submit', function(e){
    e.preventDefault();
    const messageContent = document.querySelector('.message-content');
    const feedback = document.querySelector('.feedback');
    const message = document.querySelector('#message');

    if(message.value == '') {
        feedback.classList.add('show');
        setTimeout( () => {
        feedback.classList.remove('show');
        }, 2000);
    } else {
        messageContent.textContent = message.value;
    }
});
