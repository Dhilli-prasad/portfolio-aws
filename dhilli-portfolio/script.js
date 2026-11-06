const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

const words = ["Cloud", "AI", "Infrastructure", "Innovation"];
let wordIndex = 0;
const typed = document.getElementById("typed-word");
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  typed.textContent = words[wordIndex];
}, 2200);

const output = document.getElementById("terminal-output");
const form = document.getElementById("terminal-form");
const input = document.getElementById("terminal-input");

const commands = {
  help: `<p>Available commands:</p><p><b>about</b> · who I am</p><p><b>skills</b> · my technical toolkit</p><p><b>projects</b> · things I’ve built</p><p><b>aws</b> · my cloud journey</p><p><b>achievements</b> · milestones so far</p><p><b>funfact</b> · a quick personal note</p><p><b>contact</b> · ways to reach me</p><p><b>clear</b> · clear this terminal</p>`,
  about: `<p>I'm G Dhilli Prasad, a B.Tech AI & Data Science student at Annamacharya Institute of Technology and Sciences, Tirupati. I’m curious about cloud computing, AI and infrastructure.</p>`,
  skills: `<p>Cloud: AWS EC2, S3, IAM, RDS, VPC, CloudWatch</p><p>Programming: Java, Python, SQL</p><p>AI: Generative AI, Streamlit, RAG</p><p>Tools: Linux, Git, GitHub, Docker</p>`,
  projects: `<p>01 · CI/CD Workshop — <a href="https://github.com/Dhilli-prasad/cicd-workshop" target="_blank" rel="noreferrer">open repository ↗</a></p><p>02 · Microsoft Project — <a href="https://github.com/Dhilli-prasad/Microsoft" target="_blank" rel="noreferrer">open repository ↗</a></p><p>03 · AI Support Agent — <a href="https://github.com/Dhilli-prasad/hive-sde-intern-ai-support--agent" target="_blank" rel="noreferrer">open repository ↗</a></p>`,
  aws: `<p>AWS Certified Cloud Practitioner.</p><p>Exploring cloud infrastructure, architecture and deployment. This portfolio is hosted with AWS Amplify Hosting.</p><p><a href="https://aws.amazon.com/amplify/hosting/" target="_blank" rel="noreferrer">Learn about Amplify Hosting ↗</a></p>`,
  achievements: `<p>• Flipkart GRiD — advanced to Round 3</p><p>• AWS Builder content creator</p><p>• GeeksforGeeks Technical Scripter</p><p>• AWS Community Day presenter</p><p>• Technical leadership and campus community activities</p>`,
  funfact: `<p>I enjoy sharing what I learn with developer communities — from writing about beginner AWS projects to presenting cloud concepts at AWS Community Day.</p>`,
  contact: `<p>Email: <a href="mailto:dhilliprasad579@gmail.com">dhilliprasad579@gmail.com</a></p><p>GitHub: <a href="https://github.com/Dhilli-prasad" target="_blank" rel="noreferrer">Dhilli-prasad ↗</a></p><p>LinkedIn: <a href="https://www.linkedin.com/in/g-dhilli-prasad-3aa89030a/" target="_blank" rel="noreferrer">Connect ↗</a></p>`,
};
function addLine(html, className = "") {
  const p = document.createElement("div");
  if (className) p.className = className;
  p.innerHTML = html;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}
form.addEventListener("submit", event => {
  event.preventDefault();
  const command = input.value.trim().toLowerCase();
  if (!command) return;
  addLine(`visitor@dhilli:~$ ${escapeHTML(command)}`, "cmd-line");
  if (command === "clear") output.innerHTML = "";
  else if (commands[command]) addLine(commands[command]);
  else addLine(`<p class="terminal-error">Command not found: ${escapeHTML(command)}. Type <b>help</b> to see available commands.</p>`);
  input.value = "";
});
document.getElementById("clear-terminal").addEventListener("click", () => {
  output.innerHTML = '<p class="terminal-welcome">Terminal cleared. Type <b>help</b> to continue.</p>';
  input.focus();
});
function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
}