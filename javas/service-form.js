


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





document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 service-form.js loaded!"); // Debugging Log

    const contactForm = document.getElementById("service-contact-form");

    if (!contactForm) {
        console.warn("⚠️ Contact form not found on this page.");
        return; // Stops script execution if form is missing
    }

    const responseMessage = document.getElementById("serviceResponseMessage");

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("service-full-name").value,
            email: document.getElementById("service-email").value,
            phone: document.getElementById("service-phone-number").value,
            message: document.getElementById("service-comments").value
        };

        console.log("🚀 Sending data:", formData);

        try {
            const response = await fetch("https://contact-form-backend-6yjx.onrender.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            console.log("🚀 Backend Response:", response.status, response.statusText);
            const result = await response.text();

            responseMessage.style.display = "block";

            if (response.ok) {
                responseMessage.innerText = "✅ Message sent successfully!";
                responseMessage.className = "response-success";
                contactForm.reset();
            } else {
                responseMessage.innerText = "❌ Failed to send message.";
                responseMessage.className = "response-error";
            }

            setTimeout(() => {
                responseMessage.style.display = "none";
            }, 5000);
        } catch (error) {
            console.error("❌ Network error:", error);
            responseMessage.style.display = "block";
            responseMessage.innerText = "❌ Network issue. Try again later.";
            responseMessage.className = "response-error";

            setTimeout(() => {
                responseMessage.style.display = "none";
            }, 5000);
        }
    });
});
