function changeColor() {
    let heading = document.getElementById('heading');
    heading.classList.toggle('pink');
  }

  function yourName(){
    let user = prompt("What's your name?");
    return document.write(user);
  }

function timeOfDay(){
  let time = prompt("What hour is it? (0 - 23)");
  let location = prompt("What country are you in?");
  let message ="";

if(time <= 11 || location === 'england'){
  message = "Good Morning";
} else if(time <= 18 || location === "england"){
  message = "Good Evening";
} else if(time <= 18 || location === "england"){
  message = "Good Afternoon";
} else{
  message = "Good Afternoon";
}
return document.write(message);
}
