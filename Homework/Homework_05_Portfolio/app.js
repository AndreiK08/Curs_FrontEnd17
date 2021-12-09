// Home
function openHome() {
    closeAbout();
    closePortofolio();
    closeContact();
    closeResume();
}

// Close About
function openAbout(){
    var x = document.getElementById("about");
    console.log("About");
    if (x.style.display = 'none'){
        x.style.display = "block";
    }   else {
        x.style.display = "none";
    }
    closeResume();
    closePortofolio();
    closeContact();
}

function closeAbout(){
    document.getElementById("about").style.display = "none";
    }

// Close Resume
function openResume(){
    var x = document.getElementById("resume");
    if (x.style.display = 'none'){
        x.style.display = "block";
        
    }   else {
        x.style.display = "none";
    }
    closeAbout();
    closePortofolio();
    closeContact();

}
function closeResume(){
    document.getElementById("resume").style.display = "none";
}

// Close Portofolio
function openPortofolio(){
    var x = document.getElementById("portofolio");
    if (x.style.display = 'none'){
        x.style.display = "block";
        
    }   else {
        x.style.display = "none";
    }
    closeAbout();
    closeResume();
    closeContact();
}
function closePortofolio(){
    document.getElementById("portofolio").style.display = "none";
}

// Close Contact
function openContact(){
    var x = document.getElementById("contact");
    if (x.style.display = 'none'){
        x.style.display = "block";
        
    }   else {
        x.style.display = "none";
    }

    closeResume();
    closePortofolio();
    closeAbout();

}
function closeContact(){
    document.getElementById("contact").style.display = "none";
}


// Close all divs on Background click
var close = document.getElementById("background");
close.style.cursor = 'pointer';

close.onclick = function close() {
    console.log('Background');
    closeAbout();
    closeResume();
    closePortofolio();
    closeContact();
}


// HAMBURGER MENU
function menu() {
    var x = document.getElementById("nav-left");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    
    if( x.style.display = "block") {
    closeAbout();
    closeResume();
    closePortofolio();
    closeContact();
    }
  }