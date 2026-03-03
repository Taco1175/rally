const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.documentElement.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});
