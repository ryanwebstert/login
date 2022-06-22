
function login() {
    error = document.getElementById('error-message');

    email = document.getElementById('email-form');

    password = document.getElementById('password-form');

    if (email.value === '') {
        console.log('error')
        email.style.border = '1px solid red';
        error.style.display = 'block';
    } else {
        email.style.border = 'none';
    }
    
    if (password.value === '') {
        console.log('error')
        password.style.border = '1px solid red';
        error.style.display = 'block';
    } else {
        password.style.border = 'none';
    }

    if (password.value && email.value !=='') {
        error.style.display = 'none';
    }
}   