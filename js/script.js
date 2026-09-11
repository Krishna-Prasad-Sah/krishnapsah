document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('btn-theme');

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});