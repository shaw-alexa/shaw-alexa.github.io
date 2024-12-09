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