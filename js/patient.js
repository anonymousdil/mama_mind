// Patient Portal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const loginForm = document.getElementById('patient-login-form');
    const registerForm = document.getElementById('patient-register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    // Toggle between login and register forms
    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', function(e) {
            e.preventDefault();
            loginSection.style.display = 'none';
            registerSection.style.display = 'block';
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            registerSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            loginUser(email, password)
                .then((user) => {
                    showDashboard(user);
                })
                .catch((error) => {
                    showError('login-section', 'Login failed: ' + error.message);
                });
        });
    }

    // Handle registration form submission
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const phone = document.getElementById('reg-phone').value;

            registerUser(email, password)
                .then((user) => {
                    // Save additional user data
                    return savePatientData(user.uid, {
                        name: name,
                        email: email,
                        phone: phone,
                        role: 'patient',
                        createdAt: new Date().toISOString()
                    });
                })
                .then(() => {
                    showSuccess('register-section', 'Registration successful! Redirecting to dashboard...');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
                .catch((error) => {
                    showError('register-section', 'Registration failed: ' + error.message);
                });
        });
    }

    // Show dashboard when user is logged in
    function showDashboard(user) {
        loginSection.style.display = 'none';
        registerSection.style.display = 'none';
        dashboardSection.style.display = 'block';

        // Set patient name
        const patientName = document.getElementById('patient-name');
        if (patientName) {
            patientName.textContent = user.displayName || user.email;
        }

        // Load patient data
        loadAppointments();
        loadHealthRecords();
        loadMedications();
        loadMessages();
    }

    // Load appointments
    function loadAppointments() {
        const appointmentsList = document.getElementById('appointments-list');
        if (appointmentsList) {
            // Mock data for demonstration
            appointmentsList.innerHTML = `
                <div class="appointment-item">
                    <p><strong>Next Appointment:</strong> January 15, 2025 at 10:00 AM</p>
                    <p><strong>Doctor:</strong> Dr. Smith</p>
                    <p><strong>Type:</strong> Regular Checkup</p>
                </div>
            `;
        }
    }

    // Load health records
    function loadHealthRecords() {
        const healthRecords = document.getElementById('health-records');
        if (healthRecords) {
            healthRecords.innerHTML = `
                <div class="record-item">
                    <p><strong>Last Visit:</strong> December 20, 2024</p>
                    <p><strong>Blood Pressure:</strong> 120/80 mmHg</p>
                    <p><strong>Weight:</strong> 65 kg</p>
                    <p><strong>Status:</strong> Healthy</p>
                </div>
            `;
        }
    }

    // Load medications
    function loadMedications() {
        const medicationsList = document.getElementById('medications-list');
        if (medicationsList) {
            medicationsList.innerHTML = `
                <div class="medication-item">
                    <p><strong>Folic Acid:</strong> 5mg daily</p>
                    <p><strong>Iron Supplement:</strong> 60mg daily</p>
                    <p><strong>Calcium:</strong> 1000mg daily</p>
                </div>
            `;
        }
    }

    // Load messages
    function loadMessages() {
        const messagesList = document.getElementById('messages-list');
        if (messagesList) {
            messagesList.innerHTML = `
                <div class="message-item">
                    <p><strong>From ASHA Worker:</strong> "Remember to take your prenatal vitamins daily."</p>
                    <p><em>2 days ago</em></p>
                </div>
            `;
        }
    }

    // Save patient data to database
    function savePatientData(userId, data) {
        const db = firebase.firestore();
        return db.collection('patients').doc(userId).set(data);
    }

    // Book appointment button
    const bookAppointmentBtn = document.getElementById('book-appointment-btn');
    if (bookAppointmentBtn) {
        bookAppointmentBtn.addEventListener('click', function() {
            alert('Appointment booking feature coming soon!');
        });
    }

    // Check if user is already logged in
    auth.onAuthStateChanged((user) => {
        if (user) {
            showDashboard(user);
        }
    });
});

console.log('Patient portal functionality loaded');
