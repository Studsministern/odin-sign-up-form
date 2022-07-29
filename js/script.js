function validateForm(e) {
    if(form.checkValidity() && 
      (confirmPassword.value === password.value)) {
        // Form is valid
    } else {
        e.preventDefault(); // Cancel submit

        labels.forEach(label => {
            const input = label.querySelector('input');
            
            if(!input.checkValidity()) {
                input.classList.add('error');
                input.classList.add('hasError');
            }
        });

        if(confirmPassword.value !== password.value) {
            confirmPassword.classList.add('error');
        }
    }
}

const form = document.querySelector('form');
form.noValidate = true;

const labels = form.querySelectorAll('label');
const password = form.querySelector('#pass');
const confirmPassword = form.querySelector('#confirm-pass');
const submit = document.querySelector('[type="submit"]');

labels.forEach(label => {
    const input = label.querySelector('input');
    
    label.addEventListener('focusout', () => {
        if(input.checkValidity()) {
            input.classList.remove('hasError');
        } else if(input.value !== '' && !input.checkValidity()) {
            input.classList.add('error');
            input.classList.add('hasError');
        }
    });

    input.addEventListener('input', () => {
        if(input.className.includes('hasError')) {
            if(input.checkValidity()) {
                input.classList.remove('error');
            } else {
                input.classList.add('error');
            }
        }
    });
});

password.addEventListener('input', () => {
    if(confirmPassword.value === password.value) {
        confirmPassword.classList.remove('error');
    } else {
        confirmPassword.classList.add('error');
    }
});

confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value === password.value) {
        confirmPassword.classList.remove('error');
    } else {
        confirmPassword.classList.add('error');
    }
});

submit.addEventListener('click', validateForm);