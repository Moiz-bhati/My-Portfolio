/* ─────────────────────────────────────────────────────────
   script.js — Abdul Moiz Portfolio
   ───────────────────────────────────────────────────────── */

/* ─── NAV TOGGLE ────────────────────────────────────────── */
function toggleNav() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("open");
}

// Close menu when any nav link is clicked
document.getElementById("navLinks").querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
  });
});

/* ─── SCROLL REVEAL ─────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal, .skill-card").forEach((el) => {
  revealObserver.observe(el);
});

/* ─── NAVBAR SCROLL EFFECT ──────────────────────────────── */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.style.background =
    window.scrollY > 50
      ? "rgba(8, 8, 8, 0.97)"
      : "rgba(10, 10, 10, 0.85)";
});

/* ─── ACTIVE NAV LINK HIGHLIGHT ─────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 200) {
      current = sec.id;
    }
  });
  navLinks.forEach((a) => {
    // Don't override the nav-cta orange background
    if (!a.classList.contains("nav-cta")) {
      a.style.color =
        a.getAttribute("href") === "#" + current ? "#ff6b00" : "";
    }
  });
});

/* ─── CONTACT FORM SUBMIT ───────────────────────────────── */
function handleSubmit(btn) {
  // Basic validation
  const fname   = document.getElementById("fname").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!fname || !email || !message) {
    btn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill required fields';
    btn.style.background = "#ef4444";
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = "";
    }, 2500);
    return;
  }

  // Success state
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = "#22c55e";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = "";
    btn.disabled = false;

    // Clear form
    document.getElementById("fname").value   = "";
    document.getElementById("lname").value   = "";
    document.getElementById("email").value   = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }, 3000);
}
