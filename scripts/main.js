function validateForm() {
    var fn = document.forms["myForm"]["first_name"].value;
    var ln = document.forms["myForm"]["last_name"].value;
    var e = document.forms["myForm"]["email"].value;
    var m = document.forms["myForm"]["message"].value;
    
    if (fn == "") {
        document.getElementById("fn").style.backgroundColor = "red"
        
        return false;
    }
}

function set_time()
{
    var d = new Date();
    
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    if (h < 10){h = "0" + h}
    if (m < 10){m = "0" + m}
    if (s < 10){s = "0" + s}
    
    var t = (h +":"+ m + ":" + s);
    
    document.getElementById("time").innerHTML = t;
    
    
    setInterval(set_time,500);
}

