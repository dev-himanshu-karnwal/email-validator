const checkBtn = document.querySelector('.button');
const inputLabel = document.querySelector('.input');
const form = document.querySelector('form');
const messageCtr = document.querySelector('.text');

const validateEmail = function (e) {

    e.preventDefault();

    const input = inputLabel.value.trim();
    const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    form.classList.add('error');
    form.classList.remove('valid');

    if (input === '') {
        messageCtr.textContent = 'Enter a Email';
    }
    else if (!input.match(rgx)) {
        messageCtr.textContent = 'Invalid Email';
    }
    else {
        messageCtr.textContent = 'Its a valid Email'
        form.classList.replace('error', 'valid');
    }
}

form.addEventListener('submit', validateEmail);
inputLabel.addEventListener('focus', () => {
    form.classList.remove('error', 'valid');
    messageCtr.textContent = '';
});