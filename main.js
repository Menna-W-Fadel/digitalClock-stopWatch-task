///clock function
function clockSet(){
    var clockTime = document.getElementById("clock");

    var currentTime= new Date();
    var hours=currentTime.getHours();
    var minutes =currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = hours<10 ?'0'+ hours : hours;
    minutes = minutes<10 ?'0'+ minutes : minutes;
    seconds = seconds<10 ?'0'+ seconds : seconds;
    
    var pmAmValue = hours >=12 ? "PM" :"AM";

    var hours12Format = hours%12 || 12;

    clockTime.textContent= hours12Format +":"+minutes+":"+seconds + " "+ pmAmValue;

}

setInterval(clockSet,1000);

///
var modal=document.getElementById("sec2");
modal.style.display='none';
///stopwatch functions
var startTime = 0 ,elapsedTime = 0 ,timerInterval = 0 ;


function stopWatch(){
    clearInterval(timerInterval);
}
function resetWatch(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('stopWatch').innerHTML = '00:00:00';
}

function startWatch(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    document.getElementById('stopWatch').innerHTML = formatTime(elapsedTime);
  }, 10);

}

function formatTime(time) {
    var ms = String(time % 1000).slice(0, 2); 
    var seconds = String(Math.floor(time / 1000) % 60).padStart(2, '0');
    var minutes = String(Math.floor(time / 60000) % 60).padStart(2, '0');
    var hours = String(Math.floor(time / 3600000) % 24).padStart(2, '0');
    return hours + ":"+ minutes + ":"+ seconds +"."+ ms;
}

//padStart(2, '0') function is used to ensure that each component (seconds, minutes, and hours) 
//is formatted with leading zeros if they are less than two digits

//slice(0, 2) is used to extract the first two digits (to display only milliseconds up to two decimal places). 

//Math.floor(time / 1000) % 60 calculates the number of complete seconds by dividing the total time by 1000 
//(to convert it from milliseconds to seconds) and then taking modulo 60 to get the remainder after removing complete 
//minutes. and so on the rest...