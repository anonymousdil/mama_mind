// ASHA Worker Portal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const loginForm = document.getElementById('asha-login-form');

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

    // Show dashboard when user is logged in
    function showDashboard(user) {
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'block';

        // Set ASHA worker name
        const ashaName = document.getElementById('asha-name');
        if (ashaName) {
            ashaName.textContent = user.displayName || user.email;
        }

        // Load ASHA worker data
        loadPatients();
        loadVisits();
        loadReports();
        loadAlerts();
        loadResources();
        loadStatistics();
    }

    // Load patients list
    function loadPatients() {
        const patientsList = document.getElementById('patients-list');
        if (patientsList) {
            patientsList.innerHTML = `
                <div class="patient-item">
                    <p><strong>Patient Name:</strong> Priya Sharma</p>
                    <p><strong>Status:</strong> 6 months pregnant</p>
                    <p><strong>Last Visit:</strong> December 20, 2024</p>
                    <p><strong>Risk Level:</strong> Low</p>
                </div>
                <div class="patient-item" style="margin-top: 1rem;">
                    <p><strong>Patient Name:</strong> Anjali Patel</p>
                    <p><strong>Status:</strong> 3 months pregnant</p>
                    <p><strong>Last Visit:</strong> December 22, 2024</p>
                    <p><strong>Risk Level:</strong> Medium</p>
                </div>
            `;
        }
    }

    // Load scheduled visits
    function loadVisits() {
        const visitsList = document.getElementById('visits-list');
        if (visitsList) {
            visitsList.innerHTML = `
                <div class="visit-item">
                    <p><strong>Today:</strong> Home visit to Priya Sharma</p>
                    <p><strong>Time:</strong> 2:00 PM</p>
                    <p><strong>Purpose:</strong> Routine checkup</p>
                </div>
                <div class="visit-item" style="margin-top: 1rem;">
                    <p><strong>Tomorrow:</strong> Community health camp</p>
                    <p><strong>Time:</strong> 10:00 AM</p>
                    <p><strong>Location:</strong> Village Center</p>
                </div>
            `;
        }
    }

    // Load health reports
    function loadReports() {
        const reportsList = document.getElementById('reports-list');
        if (reportsList) {
            reportsList.innerHTML = `
                <div class="report-item">
                    <p><strong>Monthly Report:</strong> December 2024</p>
                    <p><strong>Patients Visited:</strong> 45</p>
                    <p><strong>Referrals Made:</strong> 8</p>
                    <p><strong>Status:</strong> Submitted</p>
                </div>
            `;
        }
    }

    // Load alerts and notifications
    function loadAlerts() {
        const alertsList = document.getElementById('alerts-list');
        if (alertsList) {
            alertsList.innerHTML = `
                <div class="alert-item">
                    <p><strong>High Risk Alert:</strong> Anjali Patel - Elevated blood pressure detected</p>
                    <p><em>1 day ago</em></p>
                </div>
                <div class="alert-item" style="margin-top: 1rem;">
                    <p><strong>Reminder:</strong> Monthly training session on January 5, 2025</p>
                    <p><em>3 days ago</em></p>
                </div>
            `;
        }
    }

    // Load educational resources
    function loadResources() {
        const resourcesList = document.getElementById('resources-list');
        if (resourcesList) {
            resourcesList.innerHTML = `
                <div class="resource-item">
                    <p><strong>Video:</strong> Prenatal Care Best Practices</p>
                    <p><strong>Document:</strong> Nutritional Guidelines for Pregnant Women</p>
                    <p><strong>Guide:</strong> Recognizing Pregnancy Complications</p>
                </div>
            `;
        }
    }

    // Load community statistics
    function loadStatistics() {
        const statistics = document.getElementById('statistics');
        if (statistics) {
            statistics.innerHTML = `
                <div class="stats-item">
                    <p><strong>Total Patients:</strong> 85</p>
                    <p><strong>Active Cases:</strong> 62</p>
                    <p><strong>High Risk Cases:</strong> 12</p>
                    <p><strong>Successful Deliveries (This Year):</strong> 45</p>
                </div>
            `;
        }
    }

    // Add patient button
    const addPatientBtn = document.getElementById('add-patient-btn');
    if (addPatientBtn) {
        addPatientBtn.addEventListener('click', function() {
            alert('Add patient feature coming soon!');
        });
    }

    // Schedule visit button
    const scheduleVisitBtn = document.getElementById('schedule-visit-btn');
    if (scheduleVisitBtn) {
        scheduleVisitBtn.addEventListener('click', function() {
            alert('Schedule visit feature coming soon!');
        });
    }

    // Create report button
    const createReportBtn = document.getElementById('create-report-btn');
    if (createReportBtn) {
        createReportBtn.addEventListener('click', function() {
            alert('Create report feature coming soon!');
        });
    }

    // Check if user is already logged in
    auth.onAuthStateChanged((user) => {
        if (user) {
            showDashboard(user);
        }
    });
});

console.log('ASHA worker portal functionality loaded');
