function toggleMenu() {
    let menu = document.querySelector('.mobile-menu');
    let hero = document.querySelector('.hero');

    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        hero.style.opacity = "0.3"; // Dim hero section
    } else {
        hero.style.opacity = "1"; // Restore hero section
    }
}





const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Function to show the testimonial at a given index
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

// Show next testimonial
function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

// Show previous testimonial
function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// Event listeners for buttons
nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

// Automatically change testimonials every 5 seconds
setInterval(nextTestimonial, 8000);











document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const responseMessage = document.getElementById("responseMessage");
  
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent normal form submission
  
        const formData = {
            name: document.getElementById("full-name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone-number").value,
            message: document.getElementById("comments").value
        };
  
        console.log("🚀 Sending data to backend:", formData); // Debugging log
  
        try {
            const response = await fetch("https://contact-form-backend-6yjx.onrender.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
  
            const result = await response.text();
  
            // ✅ Make responseMessage visible
            responseMessage.style.display = "block";
  
            if (response.ok) {
                responseMessage.innerText = "✅ Your message has been sent successfully!";
                responseMessage.className = "response-success"; // Apply success style
                contactForm.reset(); // Clear form
            } else {
                responseMessage.innerText = "❌ Error sending message. Please try again later.";
                responseMessage.className = "response-error"; // Apply error style
            }
  
            // ✅ Hide message after 5 seconds
            setTimeout(() => {
                responseMessage.style.display = "none";
            }, 5000);
        } catch (error) {
            console.error("❌ Network error:", error);
            responseMessage.style.display = "block";
            responseMessage.innerText = "❌ Network error. Please check your connection.";
            responseMessage.className = "response-error";
  
            // ✅ Hide message after 5 seconds
            setTimeout(() => {
                responseMessage.style.display = "none";
            }, 5000);
        }
    });
  });
  
  