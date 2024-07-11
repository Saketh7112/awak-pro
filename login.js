// login.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Sending the following data to the API endpoint:");
    console.log("Endpoint: https://jsonplaceholder.typicode.com/posts");
    console.log("Username:", username);
    console.log("Password:", password);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response from the API:", data);

            if (data.id) { // Assuming a successful login returns an id
                document.getElementById('message').innerText = 'Login successful!';
                document.getElementById('message').style.color = 'green';
            } else {
                document.getElementById('message').innerText = 'Login failed. Please check your username and password.';
            }
        })
        .catch(error => {
            document.getElementById('message').innerText = 'An error occurred. Please try again later.';
            console.error('Error:', error);
        });
});