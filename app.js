const topnav = document.querySelector(".topnav-right");


// Hides navigation menu if anywhere is clicked on the screen besides sandwich menu

if(window.matchMedia("(max-width: 600px)").matches) { 
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.menu-container')) {
      topnav.style.display = "none";
    }
  });
}

//Shows or hides the navigation menu

window.onload = function(){
  document.body.addEventListener('click', showMenu, false);

  function showMenu(e){
    if(e.target.classList.contains("menu-container")){
      if(topnav.style.display == "none"){
        topnav.style.display = "initial";
      }else{
        topnav.style.display = "none";
      }
    }
  }
}

// Main Project


// Event for medias 750px and over
// if(window.matchMedia("(min-width: 750px)").matches) { 
//   document.querySelector("#my-work").addEventListener('click', slideImage);

//   function slideImage(e){
//     if(e.target.classList.contains("work-grid")) 
//       console.log(e.target);
//   }
// }

// CSS image strings and variables

let bgImages = [];

bgImages.push("url(https://drive.google.com/open?id=1GSXye9vGx8rGK4wEPTRZpNF6Ux8Ddqzs) no-repeat scroll center center / cover");

bgImages.push("url(https://drive.google.com/open?id=1sDKEkxdmd5bEyMQCZLX3J_4mvFcPbreP) no-repeat scroll center center / cover");

bgImages.push("url(https://drive.google.com/open?id=16ict3Mcd_SDlotjaAwPPSs6FO0bYQz5n) no-repeat scroll center center / cover");

bgImages.push("url(https://drive.google.com/open?id=1XUcAlFKP3NclVkUFZZEFY2k3v0k9IFqC) no-repeat scroll center center / cover");

bgImages.push("url(https://drive.google.com/open?id=1R7gr-EQpThzcRbFR3_pQLqrk13AY87Po) no-repeat scroll center center / cover");
  

console.log(bgImages);

const projects = document.querySelectorAll(".img-card");
const overlayText = document.querySelectorAll(".img-desc");
var tempImage = "";

console.log(projects);
projects[0].style.background




// Event for medias below 750px
if(window.matchMedia("(min-width: 750px)").matches) { 
  document.querySelector("#my-work").addEventListener('click', slideImage);

  function slideImage(e){
    //Slide Left
    if(e.target.classList.contains("project1")){
      tempImage = bgImages[0];

      //Update project images
      for(var i = 0; i < 5; i++){
        if(i == 4){
          projects[4].style.background = bgImages[0];
          break;
        }
        projects[i].style.background = bgImages[i + 1];
        //add fade animation class
      }

      //Update Image array
      for(var i = 0; i < 5; i++){
        if(i == 4){
          bgImages[4] = tempImage;
          break;
        }
        bgImages[i] = bgImages[i + 1];
      }       
    }


    //Slide Right
    if(e.target.classList.contains("project3")){
      tempImage = bgImages[4];

      //Update project images
      for(var i = 4; i > -1; i--){
        if(i == 0){
          projects[0].style.background = bgImages[4];
          break;
        }
        projects[i].style.background = bgImages[i - 1];
      }


      //Update Image array
      for(var i = 4; i > -1; i--){
        if(i == 0){
          bgImages[0] = tempImage;
          break;
        }
        bgImages[i] = bgImages[i - 1];
      }       
    }

    projects[0].classList.add("fade-in");
    projects[1].classList.add("fade-inMain")
    projects[2].classList.add("fade-in");
    //Remove fade class
    setTimeout(function(){
      projects[0].classList.remove("fade-in");
      projects[1].classList.remove("fade-inMain")
      projects[2].classList.remove("fade-in");
    }, 1000);
  }
}