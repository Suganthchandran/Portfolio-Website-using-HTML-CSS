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


/* Resume Download */

document.getElementById('resume').addEventListener('click', () => {
    const pdfUrl = 'Images/WEB DEVELOPMENT PROJECTS.pdf'; // Replace with your PDF file path
    renderPDF(pdfUrl);
});

function renderPDF(url) {
    const pdfContainer = document.getElementById('pdfContainer');
    pdfContainer.innerHTML = ''; // Clear previous content

    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(pdf => {
        console.log('PDF loaded');
        
        // Fetch the first page
        pdf.getPage(1).then(page => {
            console.log('Page loaded');

            const scale = 1.5;
            const viewport = page.getViewport({ scale });

            // Prepare canvas using PDF page dimensions
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            pdfContainer.appendChild(canvas);

            // Render PDF page into canvas context
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext).promise.then(() => {
                console.log('Page rendered');
            });
        });
    }, reason => {
        console.error(reason);
    });
}
