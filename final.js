var d = new Date();
var time = d.getHours();
var day = d.getDay();
const openMTh = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const openFSA = [10, 11, 12, 13, 14, 15, 16, 17, 18];
const mTh = [1, 2, 3, 4];
const fSA = [5, 6];
var weekhours = openMTh.includes(time);
var endhours = openFSA.includes(time);
var weekdays = mTh.includes(day);
var enddays = fSA.includes(day)

  if(weekhours === true && weekdays === true) {
    document.getElementById("closed").style.display = "none";
    document.getElementById("open").style.display = "block";
  }
else if(endhours === true && enddays === true) {
    document.getElementById("closed").style.display = "none";
    document.getElementById("open").style.display = "block";
  }
  else{
    document.getElementById("closed").style.display = "block";
    document.getElementById("open").style.display = "none";
  }

  function menuToggle() {
    var x = document.getElementById("nav-list");
    if( x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("menu-icon").style.opacity = "1";
    }
    else if(document.getElementById("menu-icon").style.overflow = "hidden"){
      x.style.display = "block";
    }
    else{
      x.style.display = "block";
      document.getElementById("menu-icon").style.opacity = "0.75";
    }
  }
