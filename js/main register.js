particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: ["#00f5ff", "#ff00c8"] },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.1, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
  }
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
  const root = document.documentElement;
  if (document.body.classList.contains("light")) {
    root.style.setProperty("--bg", "#f4f4f4");
    root.style.setProperty("--card-bg", "rgba(0,0,0,0.05)");
    root.style.setProperty("--glass-border", "rgba(0,0,0,0.1)");
  } else {
    root.style.setProperty("--bg", "#0d0d0d");
    root.style.setProperty("--card-bg", "rgba(255,255,255,0.05)");
    root.style.setProperty("--glass-border", "rgba(255,255,255,0.1)");
  }
});

document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Register (simulasi).");
});