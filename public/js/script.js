const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    console.log("Sign Up clicked");
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    console.log("Sign In clicked");
    container.classList.remove('right-panel-active');
});


