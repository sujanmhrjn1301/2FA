document.querySelector('form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
  
    if (!username || !password || !email) {
      alert('All fields are required.');
      event.preventDefault();
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      event.preventDefault();
    }
  });
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  