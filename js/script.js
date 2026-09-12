document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme Toggler ---
    const themeBtn = document.getElementById('btn-theme');
    const icon = themeBtn.querySelector('i');

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });


    // --- 2. BWB UAV Custom Cursor Logic ---
    const uav = document.getElementById('uav-cursor');
    
    // Variables to track mouse and UAV positions
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let uavX = window.innerWidth / 2;
    let uavY = window.innerHeight / 2;

    // Listen for mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation Loop
    function animateUAV() {
        // Calculate distance between mouse and current UAV position
        let dx = mouseX - uavX;
        let dy = mouseY - uavY;

        // Smoothly move UAV towards mouse (easing)
        // Adjust the 0.05 value to make it follow faster or slower
        uavX += dx * 0.05; 
        uavY += dy * 0.05;

        // Calculate the angle to rotate the UAV so it points where it's flying
        // Math.atan2 returns angle in radians, convert to degrees
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Apply position and rotation. 
        // We add +90 to the angle because the SVG path is drawn pointing 'up' by default
        uav.style.transform = `translate(${uavX - 15}px, ${uavY - 15}px) rotate(${angle + 90}deg)`;

        // Request next frame
        requestAnimationFrame(animateUAV);
    }

    // Start animation loop
    animateUAV();
});