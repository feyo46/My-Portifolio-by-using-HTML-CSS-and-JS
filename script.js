// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Initialize skill bars
window.addEventListener('load', animateSkills);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Sample skills data
const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', level: '95%' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', level: '90%' },
    { name: 'JavaScript', icon: 'fab fa-js', level: '70%' },
    { name: 'Git', icon: 'fab fa-git-alt', level: '75%' },
    { name: 'Python', icon: 'fab fa-python', level: '85%' },
    { name: 'Dart', icon: 'fas fa-code', level: '65%' }, // No Dart icon in Font Awesome
    { name: 'PHP', icon: 'fab fa-php', level: '65%' },
    { name: 'Java', icon: 'fab fa-java', level: '70%' },
    { name: 'C++', icon: 'fas fa-code', level: '60%' } // Generic icon for C++
  ];
  
// Sample projects data
const projects = [
    {
        title: 'E-commerce Website',
        description: 'A full-featured online store with payment integration and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
        demo: '#',
        code: '#'
    },
    {
        title: 'Digital Stopwatch',
        description: 'A responsive digital stopwatch with start, stop, and reset functionalities using HTML, CSS, and JavaScript.',
        image: 'https://media.istockphoto.com/id/942676992/photo/stopwatch-on-digital-display.webp?a=1&b=1&s=612x612&w=0&k=20&c=zAve29BLoPr7fkD93_cL5uWZLKggr7P7YVjP0lIe68Y=',
        demo: '#',
        code: 'https://github.com/feyo46/Digital-Stopwatch---HTML-CSS-JavaScript'
    },    
    {
        title: 'Unit Converter (Java GUI)',
        description: 'A desktop application built with Java Swing for converting units such as length, weight, days, times, volumes and temperature with a simple and user-friendly interface.',
        image: 'https://images.unsplash.com/photo-1523901839036-a3030662f220?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VpZ2h0fGVufDB8fDB8fHww',
        demo: '#',
        code: 'https://github.com/feyo46/simple-unit-converter-by-Java-netbeans-'
    },
    
    {
        title: 'Weather App Website',
        description: 'Real-time weather information with 5-day forecast for any location.',
        image: 'https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D',
        demo: '#',
        code: 'https://github.com/feyo46/Weather-App-website-by-using-HTML-CSS-and-JS'
    },
    {
        title: 'Personal Portfolio Website',
        description: 'A personal portfolio to showcase skills, projects, and contact info.',
        image: 'https://images.unsplash.com/photo-1603549931147-05c180c8a767?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ucyUyMGJhY2t8ZW58MHx8MHx8fDA%3D',
        demo: '#',
        code: '#'
    },
    {
        title: 'Responsive Landing Page',
        description: 'A beautifully designed responsive landing page built with HTML, CSS, and JavaScript. Features include a fixed navbar, background image, and interactive elements.',
        image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        demo: '#',
        code: 'https://github.com/feyo46/Responsive-Landing-Page-created-using-HTML-CSS-and-JavaScript.'
    },
    {
        title: 'Tic-Tac-Toe Web Application',
        description: 'A classic two-player Tic-Tac-Toe game built using HTML, CSS, and JavaScript with interactive UI and win/draw detection.',
        image: 'https://media.istockphoto.com/id/91227309/photo/crosses-and-noughts-game.webp?a=1&b=1&s=612x612&w=0&k=20&c=zC8gDTuUvcoLI3-9afpn2yxxJGc-B_loRwzGwQGdaAA=',
        demo: '#',
        code: 'https://github.com/feyo46/Tic-Tac-Toe-Web-application-by-using-HTML-CSS-and-JS-'
    }
    
];


// Populate skills section
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = '';
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3>${skill.name}</h3>
            <div class="skill-bar">
                <div class="skill-progress" data-width="${skill.level}"></div>
            </div>
        `;
        skillsGrid.appendChild(skillItem);
    });
    
    // Re-initialize skill bar animation
    setTimeout(animateSkills, 300);
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.demo}"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="${project.code}"><i class="fab fa-github"></i> View Code</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectItem);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateProjects();
    
    // Particles.js configuration
    particlesJS('particles-container', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#4cc9f0" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#4cc9f0", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
});