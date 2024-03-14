
    // Function to store username and password in session storage
    function storeCredentials(username, password) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);
    }

    // Function to retrieve stored username and password from session storage
    function retrieveCredentials() {
        return {
            username: sessionStorage.getItem('username'),
            password: sessionStorage.getItem('password')
        };
    }

    // Event listener for login form submission
    document.getElementById("login").addEventListener('submit', function(event) {
        event.preventDefault();
        var credentials = retrieveCredentials();
        var enteredUsername = document.getElementById("username1").value;
        var enteredPassword = document.getElementById("password1").value;
        if (credentials && enteredUsername === credentials.username && enteredPassword === credentials.password) {
            window.location.href = "welcome.html";
        } else {
            alert("Invalid username or password");
        }
    });

    // Event listener for signup form submission
    document.getElementById("signup").addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        storeCredentials(username, password);
        alert("Signup successful! You can now log in.");
        // Redirect to login page
        window.location.href = "index.html";
    });

