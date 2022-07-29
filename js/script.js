/* Validations */
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

function validateLabelFocusOut(input) {
    if(input.checkValidity()) {
        input.classList.remove('hasError'); // Resets to lazy validation
    } else if(input.value !== '' && !input.checkValidity()) {
        input.classList.add('error');
        input.classList.add('hasError');    // Activates aggressive validation
    }
}

function validateInputChange(input) { // Aggressive validation on every button press
    if(input.className.includes('hasError')) {
        if(input.checkValidity()) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}

function validateConfirmPassword() { // Makes sure passwords are equal
    if(confirmPassword.value === password.value) {
        confirmPassword.classList.remove('error');
    } else {
        confirmPassword.classList.add('error');
    }
}

/* DOM variables */
const form = document.querySelector('form');
const labels = form.querySelectorAll('label');
const password = form.querySelector('#pass');
const confirmPassword = form.querySelector('#confirm-pass');
const submit = document.querySelector('[type="submit"]');

form.noValidate = true; // Prevents submitting before validation

/* Event listeners */
labels.forEach(label => {
    const input = label.querySelector('input');
    label.addEventListener('focusout', () => validateLabelFocusOut(input));
    input.addEventListener('input', () => validateInputChange(input));
});

password.addEventListener('input', validateConfirmPassword);

confirmPassword.addEventListener('input', validateConfirmPassword);

submit.addEventListener('click', validateForm);