var countDownDate = new Date("Oct 16, 2021 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
},1000);