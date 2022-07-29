const labels = document.querySelectorAll('label');
const password = document.querySelector('#pass');
const confirmPassword = document.querySelector('#confirm-pass');
let hasMatched = false;

labels.forEach(label => {
    const input = label.querySelector('input');
    let hasError = false;
    
    label.addEventListener('focusout', () => {
        if(input.checkValidity()) {
            hasError = false;
        } else if(input.value !== '' && !input.checkValidity()) {
            input.classList.add('error');
            hasError = true;
        }
    });

    input.addEventListener('input', () => {
        if(hasError) {
            if(input.checkValidity()) {
                input.classList.remove('error');
            } else {
                input.classList.add('error');
            }
        }
    });
});

password.addEventListener('input', () => {
    if(hasMatched) {
        if(confirmPassword.value === password.value) {
            confirmPassword.classList.remove('error');
        } else {
            confirmPassword.classList.add('error');
        }
    }
});

confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value === password.value) {
        confirmPassword.classList.remove('error');
        hasMatched = true;
    } else {
        confirmPassword.classList.add('error');
        hasMatched = false;
    }
});