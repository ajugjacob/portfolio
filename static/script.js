var menu = document.getElementById('nav-extention');
var landing = document.getElementById('landing');
var y = 0

function myFunction(x) {
    x.classList.toggle("change");
    if(y%2==1){
        y++;
        closemenu()
    }
    else{
        y++;
        openmenu();
    }
    
}

function closemenu () {
    menu.style.left = "-85vh";
    landing.style.left = "-85vh";
}

function openmenu () {
    menu.style.left = "0vh";
    landing.style.left = "0vh";
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

  var text = document.getElementById("text-overlay")

  function displaytext() {
      text.style.display=' '; 
  }