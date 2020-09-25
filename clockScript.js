
function today (){
    var myDate = new Date();
    var h = myDate.getHours() % 12 || 12;
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();
    if (myDate.getHours() > 12) {
        var current= `${h}:${m}:${s}   PM`;
    } else {
        var current= `${h}:${m}:${s} AM`;
    }
    
    console.log(current);
    document.querySelector("#clock").innerHTML = current;
    setTimeout("today()", 1000)
}

function myClock(){
    
}









// hh:mm:ss am/pm