document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:3000"; // Backend URL
    const messageDiv = document.getElementById("message");
  
    const showMessage = (message, isError = false) => {
      messageDiv.textContent = message;
      messageDiv.className = isError ? "message error" : "message";
    };
  
    // Toggle between Sign Up and Sign In forms
    const toggleForms = () => {
      const signupForm = document.getElementById("signup-form");
      const signinForm = document.getElementById("signin-form");
      
      signupForm.classList.toggle("hidden");
      signinForm.classList.toggle("hidden");
    };
  
    // Event listener for "Sign In" link
    document.getElementById("show-signin").addEventListener("click", () => {
      toggleForms();
    });
  
    // Event listener for "Sign Up" link
    document.getElementById("show-signup").addEventListener("click", () => {
      toggleForms();
    });
  
    // Sign Up
    document.getElementById("signup-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
  
      try {
        const response = await fetch(`${baseUrl}/auth/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
  
        window.location.href = data.redirect; // Redirect to home.html
      } catch (error) {
        showMessage(`Error: ${error.message}`, true);
      }
    });
  
    // Sign In
    document.getElementById("signin-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("signin-email").value;
      const password = document.getElementById("signin-password").value;
  
      try {
        const response = await fetch(`${baseUrl}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
  
        window.location.href = data.redirect; // Redirect to home.html
      } catch (error) {
        showMessage(`Error: ${error.message}`, true);
      }
    });
  });
  