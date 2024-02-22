function timeCounter(){
    let now = new Date().getTime();
    let deadLine = new Date("February 22, 2024 00:00:00").getTime();
 
    let total = deadLine - now ;
 
    let s = Math.floor(total / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    // let d = Math.floor(h / 24);
 
    s %= 60;
    m %= 60;
    h %= 24;
 
    // d = d < 10 ? '0' + d : d ;
    h = h < 10 ? '0' + h : h ;
    m = m < 10 ? '0' + m : m ;
    s = s < 10 ? '0' + s : s ;
 
    
    // document.querySelector('#day').innerText = d; 
    document.querySelector('#hour').innerText = h; 
    document.querySelector('#minute').innerText = m; 
    document.querySelector('#second').innerText = s; 
 
   setInterval(timeCounter,1000);
 
   
   
   var audio = document.getElementById('birthdayAudio');
   var container = document.getElementById('container');
   var isPlaying = false;
   
   container.addEventListener('click', function() {
       if (!isPlaying) {
           audio.play();
           isPlaying = true;
       } else {
           audio.pause();
           isPlaying = false;
       }
   });
   
 
 
if (total < 0) {
    clearInterval(timeCounter, 1000);
    // Selecting the element with class "display"
var displayElement = document.querySelector(".display");

// Assigning the first part of the text
displayElement.innerHTML = "🎉💖Happy Birthday🎊🌸";

// Appending a line break
displayElement.innerHTML += "<br>";

// Assigning the second part of the text
displayElement.innerHTML += "🥰Heartbeat💗";

 
    document.querySelector('.display').style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.4)";
    document.querySelector('.display').style.fontSize = "2rem";

    document.querySelector('.display').style.padding = "1.5rem";
    document.querySelector('.display').style.fontWeight = "bold";
    document.querySelector('.display').style.textTransform = "uppercase";
  }
}
 
timeCounter();
