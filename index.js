document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

function showTab(event, tabName) {
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    var tabLinks = document.getElementsByClassName("tab");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Function to show success modal
function showSuccessModal() {
    const successModal = document.getElementById('success-modal');
    successModal.style.display = 'block';
    
    // Automatically hide the modal after 2 seconds
    setTimeout(hideSuccessModal, 2000);
}

// Function to hide success modal
function hideSuccessModal() {
    const successModal = document.getElementById('success-modal');
    successModal.style.display = 'none';
}

// Function to send email
function sendEmail(e) {
    e.preventDefault();

    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: `${firstName} ${lastName}`,
        to_name: 'Suganth Chandran',
        message: message,
        from_email: email,
        subject: subject
    };

    emailjs.send('service_121204', 'template_yj84y1r', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           // Show success modal
           showSuccessModal();
           // Clear form fields
           document.getElementById('contact-form').reset();
        }, function(error) {
           console.log('FAILED...', error);
           alert('There was an error sending your message. Please try again later.');
        });
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', sendEmail);

// Event listener for closing success modal
document.querySelector('.close-button').addEventListener('click', hideSuccessModal);





document.addEventListener('DOMContentLoaded', function() {
    const skillDescriptions = {
        HTML: "HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
        CSS: "CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen.",
        JavaScript: "JavaScript is a programming language that enables interactive web pages.",
        React: "React is a JavaScript library for building user interfaces.",
        Java: "Java is a high-level programming language used to create applications for a variety of platforms.",
        Figma: "Figma is a web-based UI/UX design tool that enables real-time collaboration."
    };

    const modal = document.getElementById("skillModal");
    const modalTitle = document.getElementById("modalSkillTitle");
    const modalDescription = document.getElementById("modalSkillDescription");
    const closeButton = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('click', function() {
            const skill = this.getAttribute('data-skill');
            modalTitle.textContent = skill;
            modalDescription.textContent = skillDescriptions[skill];
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
        });
    });

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});