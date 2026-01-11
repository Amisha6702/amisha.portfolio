// 1. CONSOLE SECRET HANDSHAKE
// Use this to check if developers/recruiters are inspecting your site
const styleTitle = [
    'font-size: 20px',
    'font-weight: bold',
    'color: #5E7CE2',
    'padding: 10px',
  ].join(';');
  
  const styleContent = [
    'font-size: 14px',
    'color: #2D3748',
    'padding: 10px',
  ].join(';');
  
  console.log('%cHello, World! 🚀', styleTitle);
  console.log('%cIf you are looking at this, you probably care about how things work under the hood. \nI built this site to showcase how data strategies can solve real-world problems. \n\nLet\'s build the future together: amisharma0607@gmail.com', styleContent);
  
  
  // 2. SMOOTH SCROLLING
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  // 3. KONAMI CODE (ELON MODE)
  // Sequence: Up, Up, Down, Down, Left, Right, Left, Right, b, a
  const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let currentSequence = [];
  
  document.addEventListener('keydown', (e) => {
      currentSequence.push(e.key);
      
      // Keep array same length as secret code
      currentSequence.splice(-secretCode.length - 1, currentSequence.length - secretCode.length);
  
      if (currentSequence.join('').includes(secretCode.join(''))) {
          activateElonMode();
          currentSequence = [];
      }
  });
  
  function activateElonMode() {
      alert("🚀 SYSTEM OVERRIDE: FIRST PRINCIPLES MODE ACTIVATED 🚀");
      
      // Change CSS Variables for Matrix/Dark Look
      document.body.style.backgroundColor = "#000000";
      document.body.style.fontFamily = "'Courier New', monospace";
      
      // Change all text color
      const allText = document.querySelectorAll('h1, h2, h3, p, span, a, li, .card-content');
      allText.forEach(el => {
          el.style.color = "#00FF41"; // Matrix Green
          el.style.borderColor = "#00FF41";
      });
  
      // Change Hero Image to Rocket
      const heroImg = document.getElementById('heroImg');
      heroImg.src = "https://cdn-icons-png.flaticon.com/512/3211/3211365.png"; // Rocket Icon
      
      // Change Cards to Black with Green Border
      const cards = document.querySelectorAll('.timeline-card, .skill-box, .idea-card, .navbar');
      cards.forEach(card => {
          card.style.backgroundColor = "#111";
          card.style.border = "1px solid #00FF41";
          card.style.boxShadow = "none";
      });
  }