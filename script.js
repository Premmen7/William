// Typewriter effect for the tagline
function typewriter(element, text, speed = 75) {
  element.textContent = '';
  element.classList.add('typing');
  let i = 0;
  const timer = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      // Remove cursor 1s after typing finishes
      setTimeout(() => element.classList.remove('typing'), 1000);
    }
  }, speed);
}

// Show a "Copied!" tooltip above the given element
function showTooltip(el, message) {
  const existing = el.querySelector('.tooltip');
  if (existing) existing.remove();

  const tooltip = document.createElement('span');
  tooltip.className = 'tooltip';
  tooltip.textContent = message;
  el.appendChild(tooltip);
  // Remove after animation completes
  setTimeout(() => tooltip.remove(), 1500);
}

// Click-to-copy phone number
function setupPhoneCopy() {
  const phoneEl = document.querySelector('.phone');
  if (!phoneEl) return;

  phoneEl.addEventListener('click', () => {
    const number = '5148706061';
    navigator.clipboard.writeText(number).then(() => {
      showTooltip(phoneEl, 'Copied!');
    }).catch(() => {
      showTooltip(phoneEl, 'Copy failed');
    });
  });
}

// Card entrance animation + init everything on load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for any anchor links on the page
  document.documentElement.style.scrollBehavior = 'smooth';

  // Trigger card slide-in after a short delay so the transition is visible
  const card = document.querySelector('.card');
  if (card) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => card.classList.add('card-visible'));
    });
  }

  // Start typewriter 400ms after card begins animating in
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    setTimeout(() => typewriter(tagline, 'Professional Cleaner'), 400);
  }

  setupPhoneCopy();
});
