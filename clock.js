function clock() {
    var dateobj = new Date()
    var min = ((dateobj.getMinutes())-59).toString()
    var sec = dateobj.getSeconds()-60;       
    document.getElementById('clock').innerHTML = Math.abs(min)+":"+sec.toString() + "."+dateobj.getMilliseconds().toString();
    repeater(1,'clock()');
    }

function repeater(refreshRate,func){
    var refresh=refreshRate; // Refresh rate in milli seconds
    mytime=setTimeout(func,refresh)
    }
clock();