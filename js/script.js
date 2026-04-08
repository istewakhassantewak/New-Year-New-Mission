// Countdown Timer to New Year 2027
function updateCountdown() {
    const now = new Date();
    const newYear = new Date('January 1, 2027 00:00:00');
    const timeDiff = newYear - now;

    if (timeDiff <= 0) {
        document.getElementById('countdown').innerHTML = 'Happy New Year 2027!';
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until New Year 2027`;
}

document.addEventListener('DOMContentLoaded', function () {
    // Add countdown div to header
    const header = document.querySelector('.header');
    const countdownDiv = document.createElement('div');
    countdownDiv.id = 'countdown';
    header.appendChild(countdownDiv);

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Join Now buttons
    const joinButtons = document.querySelectorAll('.joinnow, .c2btn');
    joinButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Thank you for joining the New Year 2026 Party! More details coming soon.');
        });
    });

    // Subscribe form
    const subscribeBtn = document.querySelector('.emailbtn');
    const emailInput = document.querySelector('.email');
    subscribeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            alert('Thank you for subscribing! You will receive updates about New Year 2026.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Portfolio images click
    const images = document.querySelectorAll('.c5img');
    images.forEach(img => {
        img.addEventListener('click', function () {
            alert('Portfolio image: ' + img.alt || 'Awesome gift image');
        });
    });

    // Social media links
    const socialIcons = document.querySelectorAll('.icons');
    socialIcons.forEach(icon => {
        const src = icon.src;
        if (src.includes('Facebook')) {
            icon.addEventListener('click', () => window.open('https://www.facebook.com/istewakhassantewak121', '_blank'));
        } else if (src.includes('Instagram')) {
            icon.addEventListener('click', () => window.open('https://www.instagram.com/istewak_hassan_tewak/?__pwa=1', '_blank'));
        } else if (src.includes('Twitter')) {
            icon.addEventListener('click', () => window.open('https://x.com/Istewak', '_blank'));
        } else if (src.includes('LinkedIn') || src.includes('Linkedin')) {
            icon.addEventListener('click', () => window.open('https://www.linkedin.com/in/istewak-hassan-tewak', '_blank'));
        } else if (src.includes('GitHub')) {
            icon.addEventListener('click', () => window.open('https://github.com/istewakhassantewak', '_blank'));
        }
    });
});
