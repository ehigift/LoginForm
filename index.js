
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (name.length < 3) {
        e.preventDefault();
        alert('Name must be at least 3 characters long.');
    } else if (!password.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

