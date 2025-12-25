// Doctor Portal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const loginForm = document.getElementById('doctor-login-form');

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

        // Set doctor name
        const doctorName = document.getElementById('doctor-name');
        if (doctorName) {
            doctorName.textContent = user.displayName || user.email;
        }

        // Load doctor data
        loadCases();
        loadAppointments();
        loadConsultations();
        loadPrescriptions();
        loadLabReports();
        loadUrgentCases();
    }

    // Load patient cases
    function loadCases() {
        const casesList = document.getElementById('cases-list');
        if (casesList) {
            casesList.innerHTML = `
                <div class="case-item">
                    <p><strong>Patient:</strong> Priya Sharma</p>
                    <p><strong>Age:</strong> 28 years</p>
                    <p><strong>Condition:</strong> 6 months pregnant, Normal pregnancy</p>
                    <p><strong>Last Review:</strong> December 18, 2024</p>
                </div>
                <div class="case-item" style="margin-top: 1rem;">
                    <p><strong>Patient:</strong> Anjali Patel</p>
                    <p><strong>Age:</strong> 32 years</p>
                    <p><strong>Condition:</strong> 3 months pregnant, Elevated BP</p>
                    <p><strong>Last Review:</strong> December 22, 2024</p>
                </div>
            `;
        }
    }

    // Load today's appointments
    function loadAppointments() {
        const appointmentsList = document.getElementById('appointments-list');
        if (appointmentsList) {
            appointmentsList.innerHTML = `
                <div class="appointment-item">
                    <p><strong>10:00 AM:</strong> Priya Sharma - Regular Checkup</p>
                </div>
                <div class="appointment-item" style="margin-top: 1rem;">
                    <p><strong>11:30 AM:</strong> Anjali Patel - Follow-up Consultation</p>
                </div>
                <div class="appointment-item" style="margin-top: 1rem;">
                    <p><strong>2:00 PM:</strong> Riya Gupta - First Trimester Screening</p>
                </div>
            `;
        }
    }

    // Load consultations
    function loadConsultations() {
        const consultationsList = document.getElementById('consultations-list');
        if (consultationsList) {
            consultationsList.innerHTML = `
                <div class="consultation-item">
                    <p><strong>Pending:</strong> 3 teleconsultations</p>
                    <p><strong>Completed Today:</strong> 5 consultations</p>
                    <p><strong>Next:</strong> Video call with Meera Singh at 3:30 PM</p>
                </div>
            `;
        }
    }

    // Load prescriptions
    function loadPrescriptions() {
        const prescriptionsList = document.getElementById('prescriptions-list');
        if (prescriptionsList) {
            prescriptionsList.innerHTML = `
                <div class="prescription-item">
                    <p><strong>Patient:</strong> Priya Sharma</p>
                    <p><strong>Date:</strong> December 20, 2024</p>
                    <p><strong>Medications:</strong> Folic Acid, Iron Supplement</p>
                </div>
                <div class="prescription-item" style="margin-top: 1rem;">
                    <p><strong>Patient:</strong> Anjali Patel</p>
                    <p><strong>Date:</strong> December 22, 2024</p>
                    <p><strong>Medications:</strong> BP medication, Calcium</p>
                </div>
            `;
        }
    }

    // Load lab reports
    function loadLabReports() {
        const labReportsList = document.getElementById('lab-reports-list');
        if (labReportsList) {
            labReportsList.innerHTML = `
                <div class="lab-report-item">
                    <p><strong>New Reports:</strong> 4</p>
                    <p><strong>Latest:</strong> Hemoglobin test - Priya Sharma (Normal)</p>
                    <p><strong>Pending Review:</strong> Ultrasound - Anjali Patel</p>
                </div>
            `;
        }
    }

    // Load urgent cases
    function loadUrgentCases() {
        const urgentCasesList = document.getElementById('urgent-cases-list');
        if (urgentCasesList) {
            urgentCasesList.innerHTML = `
                <div class="urgent-case-item">
                    <p><strong>High Priority:</strong> Anjali Patel - Elevated blood pressure</p>
                    <p><strong>Action Required:</strong> Follow-up appointment scheduled</p>
                </div>
                <div class="urgent-case-item" style="margin-top: 1rem;">
                    <p><strong>Alert:</strong> Riya Gupta - Low hemoglobin levels</p>
                    <p><strong>Action Required:</strong> Iron supplementation started</p>
                </div>
            `;
        }
    }

    // View all cases button
    const viewAllCasesBtn = document.getElementById('view-all-cases-btn');
    if (viewAllCasesBtn) {
        viewAllCasesBtn.addEventListener('click', function() {
            alert('View all cases feature coming soon!');
        });
    }

    // Start consultation button
    const startConsultationBtn = document.getElementById('start-consultation-btn');
    if (startConsultationBtn) {
        startConsultationBtn.addEventListener('click', function() {
            alert('Start consultation feature coming soon!');
        });
    }

    // Create prescription button
    const createPrescriptionBtn = document.getElementById('create-prescription-btn');
    if (createPrescriptionBtn) {
        createPrescriptionBtn.addEventListener('click', function() {
            alert('Create prescription feature coming soon!');
        });
    }

    // Check if user is already logged in
    auth.onAuthStateChanged((user) => {
        if (user) {
            showDashboard(user);
        }
    });
});

console.log('Doctor portal functionality loaded');
