// Function to toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Event listener for the theme switch
document.getElementById('theme-checkbox').addEventListener('change', toggleTheme);

// Function to show the desired section and hide others
function showSection(sectionId) {
    const sections = ['home-section', 'updates-section', 'contact-section', 'review-container', 'appointment-container'];

    // Hide all sections with fade-out effect
    sections.forEach(section => {
        const element = document.getElementById(section);
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = 'none';
        }, 300);
    });

    // Show the selected section with fade-in effect
    const targetElement = document.getElementById(sectionId);
    setTimeout(() => {
        targetElement.style.display = 'block';
        setTimeout(() => {
            targetElement.style.opacity = 1;
        }, 50);
    }, 300);
}

// Function to handle loading the external HTML for Home section
function handleHomeClick() {
    const homeIframe = document.getElementById('home-iframe');
    homeIframe.src = 'dental-home.html';
    showSection('home-section');
}

// Function to handle loading the external HTML for Updates section
function handleUpdatesClick() {
    const updatesIframe = document.getElementById('updates-iframe');
    updatesIframe.src = 'dental-updates.html';
    showSection('updates-section');
}

// Function to handle loading the external HTML for Contact section
function handleContactClick() {
    const contactIframe = document.getElementById('contact-iframe');
    contactIframe.src = 'dental-contact.html';
    showSection('contact-section');
}

// Function to handle loading the external HTML for Appointment section
function handleAppointmentClick() {
    const appointmentIframe = document.getElementById('appointment-iframe');
    appointmentIframe.src = 'https://github.com/aniketsng/dental-clinic-app/blob/2d189f2146cda7d7df85300ded9ac51411d1eaea/dental-appointment.html';
    showSection('appointment-container');
}

// Function to handle loading the external HTML for Review section
function handleReviewClick() {
    const reviewIframe = document.getElementById('review-iframe');
    reviewIframe.src = 'dental-review.html';
    showSection('review-container');
}

// Event listeners for the navigation buttons
document.getElementById('home-button').addEventListener('click', handleHomeClick);
document.getElementById('updates-button').addEventListener('click', handleUpdatesClick);
document.getElementById('contact-button').addEventListener('click', handleContactClick);
document.getElementById('appointment-button').addEventListener('click', handleAppointmentClick);
document.getElementById('review-button').addEventListener('click', handleReviewClick);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set up the button click events
    handleHomeClick(); // Optional: Auto-load the Home section on page load
});
