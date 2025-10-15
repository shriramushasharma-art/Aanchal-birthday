document.addEventListener('DOMContentLoaded', () => {
  // Replace [Your Girlfriend's Name] with her actual name in the title
  const gfNamePlaceholder = "[Aanchal]";
  const yourNamePlaceholder = "[Yuvraj]"; // Also your name
  const currentYearSpan = document.getElementById('currentYear');
  
  // Update dynamic content
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  
  // Handle the surprise button
  const surpriseButton = document.getElementById('surpriseButton');
  if (surpriseButton) {
    surpriseButton.addEventListener('click', () => {
      alert("Surprise! You're the most wonderful person I know. Sending you all my love today!");

       
       
       if (typeof confetti !== 'undefined') {
           confetti({
               particleCount: 100,
               spread: 70,
               origin: { y: 0.6 }
         });
       }
    });
  }
  
  // To use Google Fonts, add these lines inside the <head> of your index.html:
  // <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Georgia&display=swap" rel="stylesheet">
  // (Or replace Dancing Script with 'Caveat' for a different handwriting feel)
});