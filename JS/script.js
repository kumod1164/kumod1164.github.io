// Typing Effect
function typeEffect() {
    const titles = ["Full Stack Web Developer", "Passionate Learner", "Tech Enthusiast"];
    const titleElement = document.getElementById("developer-title");
    let currentIndex = 0;

    function type() {
        const currentTitle = titles[currentIndex];
        let index = 0;

        function typeCharacter() {
            titleElement.textContent += currentTitle[index];
            index++;

            if (index < currentTitle.length) {
                setTimeout(typeCharacter, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            setTimeout(() => {
                if (titleElement.textContent.length > 0) {
                    titleElement.textContent = titleElement.textContent.slice(0, -1);
                    erase();
                } else {                   
                    currentIndex = (currentIndex + 1) % titles.length;                 
                    type();                }
            }, 30);
        }
        typeCharacter();
    }
    type();
}

document.addEventListener("DOMContentLoaded", typeEffect);


// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

function downloadResume() {

  var driveLink = "https://drive.google.com/file/d/1UTfCUehsleS3UGjEuJv-YKvYxjeohLYq/view?usp=sharing";
  window.open(driveLink, '_blank');

  // Start downloading the resume
  var link = document.createElement('a');
  link.href = driveLink.replace("view", "export?format=pdf"); 
  link.download = 'Kumod-Sharma-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Live and Github Links

document.getElementById("githubButton").addEventListener("click", function() {
  var githubURL = "https://github.com/1ashutoshverma/Green-Paradise";
  window.open(githubURL, "_blank");
});

document.getElementById("liveButton").addEventListener("click", function() {
  var liveURL = "https://green-paradise-team.netlify.app/index.html";
  window.open(liveURL, "_blank");
});



document.getElementById("alcazarGithubButton").addEventListener("click", function() {
  var githubURL = "https://github.com/Shubham10320/Travel-website";
  window.open(githubURL, "_blank");
});

document.getElementById("alcazarLiveButton").addEventListener("click", function() {
  var liveURL = "https://alcazartravelling.netlify.app/html/index.html";
  window.open(liveURL, "_blank");
});


document.getElementById("oestinGithubButton").addEventListener("click", function() {
  var githubURL = "https://github.com/kumod1164/Oestin_CW";
  window.open(githubURL, "_blank");
});

document.getElementById("oestinLiveButton").addEventListener("click", function() {
  var liveURL = "https://64dcecef4c77132933378ad2--silver-piroshki-29b668.netlify.app/index.html";
  window.open(liveURL, "_blank");
});

document.getElementById("contactGithub").addEventListener("click", function() {
  var gitURL = "https://github.com/kumod1164";
  window.open(gitURL, "_blank");
});

document.getElementById("contactLinkedin").addEventListener("click", function() {
  var linkedinURL = "https://www.linkedin.com/in/kumodks/";
  window.open(linkedinURL, "_blank");
});

document.getElementById("resume-button").onclick = () => {
  window.open("https://drive.google.com/file/d/1UTfCUehsleS3UGjEuJv-YKvYxjeohLYq/view?usp=drive_link");
}