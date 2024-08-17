window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        heroContent.style.transform = `translateY(${scrollPosition / 3}px)`;
        heroContent.style.opacity = `${1 - scrollPosition / 500}`;
    } else {
        heroContent.style.transform = 'translateY(0)';
        heroContent.style.opacity = '1';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "The Future of AI & Robotics";
    const typingSpeed = 100; 
    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Start the typing effect
    typeText();
});

//feature section
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000, // Duration of animations
        once: true // Whether animation should happen only once - while scrolling down
    });
});


// aabout section

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Duration of animations
        once: true // Animation happens only once - while scrolling down
    });
});
