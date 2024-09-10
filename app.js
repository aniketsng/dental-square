// Function to toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.querySelector('.theme-btn i');

    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Function to show the desired section and hide others
function showSection(sectionId) {
    // Array of all sections in the new order
    const sections = ['home-section', 'appointment-section', 'updates-section', 'contact-section'];

    // Hide all sections
    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Function to set valid date range for the appointment form (excluding Sundays)
function setAppointmentDateOptions() {
    const dateInput = document.getElementById('date');
    const today = new Date();
    let daysAdded = 0;
    let optionsHTML = '';

    // Loop to find the next 7 days excluding Sundays
    while (daysAdded < 7) {
        const currentDate = new Date();
        currentDate.setDate(today.getDate() + daysAdded);

        // Skip Sundays (0 = Sunday)
        if (currentDate.getDay() !== 0) {
            const formattedDate = currentDate.toISOString().split('T')[0];
            optionsHTML += `<option value="${formattedDate}">${currentDate.toDateString()}</option>`;
        } else {
            // Skip incrementing daysAdded if it's a Sunday
            daysAdded++;
            continue;
        }

        daysAdded++;
    }

    // Set options dynamically
    dateInput.innerHTML = optionsHTML;
}

// Event listener for form submission
document.getElementById('appointment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && contact && email && date) {
        alert('Thank you for booking an appointment! We will contact you shortly.');
        document.getElementById('appointment-form').reset(); // Reset form fields
        setAppointmentDateOptions(); // Reset date options after form submission
    } else {
        alert('Please fill in all required fields.');
    }
});

// Show home section by default on page load and set appointment date options
document.addEventListener('DOMContentLoaded', () => {
    showSection('home-section');
    setAppointmentDateOptions();
});
