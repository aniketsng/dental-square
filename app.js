// Function to show the desired section and hide others
function showSection(sectionId) {
    const sections = ['home-section', 'updates-section', 'contact-section', 'appointment-container'];

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
    appointmentIframe.src = 'dental-contact.html';
    showSection('appointment-container');
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
document.getElementById('dev-info-button').addEventListener('click', handleDevInfoClick);

// Function to expand/collapse the hidden buttons when More is clicked
document.getElementById('more-button').addEventListener('click', function() {
    const devInfoButton = document.getElementById('dev-info-button');
    
    const isCollapsed = devInfoButton.style.display === 'none' || devInfoButton.style.display === '';

    if (isCollapsed) {
        devInfoButton.style.display = 'block';
        setTimeout(() => {
            devInfoButton.style.opacity = 1;
        }, 50);  // Small delay to ensure smooth fade-in
    } else {
        devInfoButton.style.opacity = 0;
        setTimeout(() => {
            devInfoButton.style.display = 'none';
        }, 300);  // Same delay as fade-out duration
    }
});

// Load the home section by default on page load
document.addEventListener('DOMContentLoaded', handleHomeClick);
