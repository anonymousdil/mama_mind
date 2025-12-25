// Authentication utilities
const auth = firebase.auth();

// Check authentication state
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is signed in:', user.email);
    } else {
        console.log('No user is signed in');
    }
});

// Login function
function loginUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Login successful:', user.email);
            return user;
        })
        .catch((error) => {
            console.error('Login error:', error.message);
            throw error;
        });
}

// Register function
function registerUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Registration successful:', user.email);
            return user;
        })
        .catch((error) => {
            console.error('Registration error:', error.message);
            throw error;
        });
}

// Logout function
function logoutUser() {
    return auth.signOut()
        .then(() => {
            console.log('User signed out successfully');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Logout error:', error.message);
            throw error;
        });
}

// Get current user
function getCurrentUser() {
    return auth.currentUser;
}

// Setup logout button
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logoutUser();
        });
    }
});

// Sanitize HTML to prevent XSS
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Display error message
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        const sanitizedMessage = sanitizeHTML(message);
        element.innerHTML = `<div class="alert alert-error">${sanitizedMessage}</div>`;
        setTimeout(() => {
            element.innerHTML = '';
        }, 5000);
    }
}

// Display success message
function showSuccess(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        const sanitizedMessage = sanitizeHTML(message);
        element.innerHTML = `<div class="alert alert-success">${sanitizedMessage}</div>`;
        setTimeout(() => {
            element.innerHTML = '';
        }, 5000);
    }
}

// Display info message
function showInfo(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        const sanitizedMessage = sanitizeHTML(message);
        element.innerHTML = `<div class="alert alert-info">${sanitizedMessage}</div>`;
    }
}

console.log('Authentication utilities loaded');
