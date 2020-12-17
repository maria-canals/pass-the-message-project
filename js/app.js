// Tu código aquí

const form = document.querySelector('#message-form')
const button = document.querySelector('#submitBtn');
const messageContent = document.querySelector('.message-content');
const information = document.querySelector('information');

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault()
    messageContent.textContent = document.querySelector('#message').value;

    if(document.querySelector('#message').value == '') {
       
            let errorMessage = document.createElement('H5');
            let errorMessageText = document.createTextNode("please enter a value to pass");
            errorMessage.appendChild(errorMessageText);
            document.querySelector('.information').appendChild(errorMessage);

    } else {

    }
})
