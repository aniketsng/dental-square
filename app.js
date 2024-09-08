function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Change the theme icon
    const themeIcon = document.querySelector('.theme-btn i');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}
