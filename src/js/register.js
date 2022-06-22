
function register() {
    error = document.getElementById('error-message');

    user = document.getElementById('username-form')

    email = document.getElementById('email-form');

    password = document.getElementById('password-form');

    if (user.value === '') {
        console.log('error')
        user.style.border = '1px solid red';
        error.style.display = 'block';
    } else {
        user.style.border = 'none';
    }
    
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