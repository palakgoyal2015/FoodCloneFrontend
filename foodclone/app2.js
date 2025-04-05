document.addEventListener("DOMContentLoaded", function() {
    const bookTableLink = document.getElementById('bookTableLink');
    const signupFormContainer = document.querySelector('.signup-form-container');

    bookTableLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupFormContainer.style.display = 'block';
        document.body.classList.add('blur');
    });
});
