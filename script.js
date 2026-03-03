// ═══════════════════════════════════════ NAVBAR FUNCTIONALITY ═══════════════════════════════════════
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ═══════════════════════════════════════ SMOOTH SCROLLING ═══════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ═══════════════════════════════════════ NAVBAR SCROLL EFFECT ═══════════════════════════════════════
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// ═══════════════════════════════════════ CONTACT FORM HANDLING ═══════════════════════════════════════
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Show success message
    alert('Thank you for contacting us! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
  });
}

// ═══════════════════════════════════════ ACTIVE NAV LINK HIGHLIGHTING ═══════════════════════════════════════
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// ═══════════════════════════════════════ ANIMATION ON SCROLL ═══════════════════════════════════════
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.8s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.program-card, .stat-box, .info-box').forEach(el => {
  observer.observe(el);
});

// ═══════════════════════════════════════ UTILITY FUNCTIONS ═══════════════════════════════════════
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    background: ${type === 'success' ? '#27ae60' : '#3498db'};
    color: white;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    animation: slideInUp 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ═══════════════════════════════════════ PAGE LOAD ANIMATIONS ═══════════════════════════════════════
window.addEventListener('load', () => {
  document.querySelectorAll('.section-content, .college-image').forEach((el, index) => {
    el.style.animation = `slideInUp 0.8s ease ${index * 0.2}s forwards`;
    el.style.opacity = '0';
  });
});
const signinBtn = document.getElementById("signinBtn");

if (signinBtn) {
    signinBtn.addEventListener("click", () => {
        window.location.href = "/signin";
    });
}

const form = document.getElementById("authForm");
let isSignIn = true;

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMsg = document.getElementById("errorMsg");

        if (isSignIn) {
            // Temporary Sign In check
            if (email === "student@qis.com" && password === "12345") {
                window.location.href = "/";
            } else {
                errorMsg.textContent = "Invalid Email or Password";
            }
        } else {
            alert("Sign Up Successful (Demo)");
            toggleForm();
        }
    });
}

function toggleForm() {
    const title = document.getElementById("formTitle");
    const button = document.querySelector(".auth-btn");
    const switchText = document.querySelector(".switch-text");

    isSignIn = !isSignIn;

    if (isSignIn) {
        title.textContent = "Sign In";
        button.textContent = "Sign In";
        switchText.innerHTML = `Don't have an account? <span onclick="toggleForm()">Sign Up</span>`;
    } else {
        title.textContent = "Sign Up";
        button.textContent = "Sign Up";
        switchText.innerHTML = `Already have an account? <span onclick="toggleForm()">Sign In</span>`;
    }
}

function googleLogin() {
    alert("Google Login (Demo Only)");
    window.location.href = "/";
}