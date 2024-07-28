document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulating a stored username and password
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (!storedUsername && !storedPassword) {
        // Store credentials in localStorage (not secure)
        localStorage.setItem('username', 'testUser');
        localStorage.setItem('password', 'testPass');
    }

    // Check if the entered credentials match the stored ones
    if (username === storedUsername && password === storedPassword) {
        errorMessage.textContent = '';
        alert('Login successful!');
        // Redirect or perform any other action after successful login
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});