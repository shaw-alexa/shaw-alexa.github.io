document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scrollContainer');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  const scrollAmount = container.offsetWidth / 2;

  leftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});

function navHome(loc) {
  if (loc == "home") {
    window.location.href = "index.html";
  }
  else if (loc == "projects") {
    window.location.href = "../index.html";
  }
  else {
    window.location.href = "../../../index.html";
  }
}

function openLink(link) {
  window.open(link, '_blank');
}

function openProject(link) {
  window.open(link, '_self');
}

function showEventiVideo(num) {
  let vid;
  let btn;
  if (num == 1) {
    vid = document.getElementById("demo");
    btn = document.getElementById("demoBtn");
  }
  else {
    vid = document.getElementById("demo2");
    btn = document.getElementById("demoBtn2");
  }
 
  if (window.getComputedStyle(vid).display === "none"){
    vid.style.display = "block";
    if (num == 1) {
      btn.innerHTML = "Close PC Demo";
    }
    else {
      btn.innerHTML = "Close Mobile Demo";
    }
    
  }
  else {
    vid.style.display = "none";
    if (num == 1) {
      btn.innerHTML = "View PC Demo";
    }
    else {
      btn.innerHTML = "View Mobile Demo";
    }
  }
}

function showVideo() {
  let vid = document.getElementById("demo");
  let btn = document.getElementById("demoBtn");
 
  if (window.getComputedStyle(vid).display === "none"){
    vid.style.display = "block";
    btn.innerHTML = "Close Demo";
  }
  else {
    vid.style.display = "none";
    btn.innerHTML = "View Demo";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('darkMode', true);
  }
  
  const logo = document.getElementById('logo');
  const modeBtn = document.getElementById('modeBtn');
  const isDarkMode = localStorage.getItem('darkMode') === 'true'; // Retrieve dark mode state
  const currentPath = window.location.pathname;

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }

  if (currentPath.includes('index')) {
    logo.src = isDarkMode ? "images/darkModelogo.png": "images/logo.png";
    modeBtn.src = isDarkMode ? "images/lightMode.png": "images/darkMode.png";
  } 
  else if (currentPath.includes('projects.html') || currentPath.includes('about')) {
    logo.src = isDarkMode ? "../images/darkModelogo.png": "../images/logo.png";
    modeBtn.src = isDarkMode ? "../images/lightMode.png": "../images/darkMode.png";
  } 
  else {
    logo.src = isDarkMode ? "../../images/darkModelogo.png": "../../images/logo.png";
    modeBtn.src = isDarkMode ? "../../images/lightMode.png": "../../images/darkMode.png";
  }
});

function darkMode(loc) {
  const modeBtn = document.getElementById('modeBtn');
  const logo = document.getElementById('logo');
  const isDarkMode = document.body.classList.toggle('dark-mode');

  localStorage.setItem('darkMode', isDarkMode);

  if (loc === 'home') {
    logo.src = isDarkMode ? "images/darkModelogo.png": "images/logo.png" ;
    modeBtn.src = isDarkMode ? "images/lightMode.png": "images/darkMode.png";
  } 
  else if (loc === 'projects') {
    logo.src = isDarkMode ?  "../images/darkModelogo.png": "../images/logo.png";
    modeBtn.src = isDarkMode ?  "../images/lightMode.png": "../images/darkMode.png";
  } 
  else {
    logo.src = isDarkMode ? "../../images/darkModelogo.png": "../../images/logo.png";
    modeBtn.src = isDarkMode ? "../../images/lightMode.png": "../../images/darkMode.png";
  }
}

