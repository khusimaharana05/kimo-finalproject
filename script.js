document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginAgainBtn = document.getElementById('loginAgainBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
        

            if (username === 'user' && password === 'pass') {
                window.location.href = 'index.html';
            } else {
                document.getElementById('error-message').textContent = 'Invalid username or password!';
            }
        });
    }

    if (loginAgainBtn) {
        loginAgainBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'logout.html';
        });
    }
});