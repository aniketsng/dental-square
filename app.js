// Function to show the desired section and hide others
function showSection(sectionId) {
    const sections = ['home-section', 'updates-section', 'contact-section', 'review-container', 'appointment-container'];

    // Hide all sections with fade-out effect
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            element.style.opacity = 0;
            setTimeout(() => {
                element.style.display = 'none';
            }, 300);
        }
    });

    // Show the selected section with fade-in effect
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        setTimeout(() => {
            targetElement.style.display = 'block';
            setTimeout(() => {
                targetElement.style.opacity = 1;
            }, 50);
        }, 300);
    }
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
    appointmentIframe.src = 'dental-appointment.html';
    showSection('appointment-container');
}

// Function to handle loading the external HTML for Review section
function handleReviewClick() {
    const reviewIframe = document.getElementById('review-iframe');
    reviewIframe.src = 'dental-review.html';
    showSection('review-container');
}

// Function to handle loading the external HTML for Developer Info section
function handleDevInfoClick() {
    const devInfoIframe = document.getElementById('home-iframe'); // Assuming iframe exists for content loading
    devInfoIframe.src = 'dev-info.html';
    showSection('home-section'); // Show the section where the iframe is loaded
}

// Event listeners for the navigation buttons in the footer
document.getElementById('home-button').addEventListener('click', handleHomeClick);
document.getElementById('updates-button').addEventListener('click', handleUpdatesClick);
document.getElementById('contact-button').addEventListener('click', handleContactClick);

// Event listeners for the buttons in the header
document.getElementById('review-button').addEventListener('click', handleReviewClick);
document.getElementById('dev-info-button').addEventListener('click', handleDevInfoClick);
document.getElementById('appointment-button').addEventListener('click', handleAppointmentClick);

// Function to expand/collapse the hidden buttons when More is clicked
document.getElementById('more-button').addEventListener('click', function() {
    const reviewButton = document.getElementById('review-button');
    const devInfoButton = document.getElementById('dev-info-button');
    const appointmentButton = document.getElementById('appointment-button');
    
    // Use a boolean to check if buttons are visible or not
    const isCollapsed = reviewButton.style.display === 'none' || reviewButton.style.display === '';

    if (isCollapsed) {
        // Expand the buttons
        reviewButton.style.display = 'block';
        devInfoButton.style.display = 'block';
        appointmentButton.style.display = 'block';
        
        setTimeout(() => {
            reviewButton.style.opacity = 1;
            devInfoButton.style.opacity = 1;
            appointmentButton.style.opacity = 1;
        }, 50);  // Small delay to ensure smooth fade-in
    } else {
        // Collapse the buttons
        reviewButton.style.opacity = 0;
        devInfoButton.style.opacity = 0;
        appointmentButton.style.opacity = 0;
        
        setTimeout(() => {
            reviewButton.style.display = 'none';
            devInfoButton.style.display = 'none';
            appointmentButton.style.display = 'none';
        }, 300);  // Same delay as fade-out duration
    }
});

// Load the home section by default on page load
document.addEventListener('DOMContentLoaded', handleHomeClick);
