const labels = document.querySelectorAll('label');

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