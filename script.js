document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickMe");
    button.addEventListener("click", () => {
      alert("You clicked the button!");
    });
  });  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevents page refresh
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
  
      alert(`Thank you, ${name}! Your message: "${message}" has been received.`);
      form.reset(); // Clears the form
    });
  });  