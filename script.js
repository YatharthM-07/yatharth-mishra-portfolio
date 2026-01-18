window.addEventListener("scroll", () => {
  const scroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width = (scroll / height) * 100 + "%";
});

function openModal(project) {
  const body = document.getElementById("modal-body");

  const content = {
    pcos: `
      <h2>PCOS Health Tracker</h2>
      <p>Backend-driven HealthTech application built with Java & Spring Boot.</p>
      <ul>
        <li>User, Cycle & Symptom modules</li>
        <li>REST APIs with Spring MVC</li>
        <li>Hibernate/JPA data modeling</li>
        <li>MySQL persistence</li>
      </ul>
      <a href="https://github.com/YatharthM-07/pcos-tracker" target="_blank">GitHub</a>
    `,
    hospital: `<h2>Hospital Seat Allocation</h2><p>C++ logic-based system.</p>`,
    phishing: `<h2>Phishing Detection</h2><p>ML + Flask + Google Safe Browsing API.</p>`,
    hate: `<h2>Hate Speech Detection</h2><p>NLP classification project.</p>`
  };

  body.innerHTML = content[project];
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
