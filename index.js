var stop = document.querySelector("stop");

var pause = document.getElementsByClassName("pause");
var flag = document.querySelector("flag");
var content = document.getElementById("content");



var stopwatch = () => {
    var start = document.querySelector(".start");
    var flag = document.querySelector(".flag");
    var pause = document.getElementsByClassName("pause")[0];
    
    var content = document.querySelector("#content");
    if(flag.style.display != "none"){
        flag.style.display = "none"
        start.style.display = "inline-block";
        start.style.left = "22%";
        pause.style.display = "inline-block";
        content.innerHTML = "Stop";

        var intervalList = document.querySelector("ul");
        intervalList.innerHTML = "";
    }
}

var startwatch = () => {
    var content = document.querySelector("#content");
    var start = document.querySelector(".start");
    var flag = document.querySelector(".flag");
    var pause = document.getElementsByClassName("pause")[0];
    var pauseicon = document.getElementsByClassName("pauseicon");
    console.log(pauseicon)
    
   
    if(start.style.display != "none"){
        flag.style.left = "22%";
        flag.style.display = "block";
        start.style.display = "none"
        pause.style.display = "inline-block";
        pauseicon[0].style.backgroundColor = "skyblue";
        pauseicon[1].style.backgroundColor = "skyblue";
       
    }
    else{
        start.style.display = "inline-block"
        start.style.left = "48%";
       
    }
    
    content.innerHTML = "Start"
}

var pausewatch = () => {
    var content = document.querySelector("#content");
    var pause = document.getElementsByClassName("pause")[0];
    var start = document.querySelector(".start");
    var flag = document.querySelector(".flag");

    if(flag.style.display != "none"){
        if(pause.style.display != "none"){
            pause.style.display = "none"
            start.style.left = "48%";
            start.style.display = "inline-block"
        }
        else{
            pause.style.display = "inline-block"
            pause.style.left = "48%";
            start.style.display = "none"
        }
        content.innerHTML = "Pause"
    }
}

var flagwatch = () => {
    var intervalList = document.querySelector("ul");
    var li = document.createElement("li");
    li.innerHTML = "Interval"
   intervalList.appendChild(li)
}