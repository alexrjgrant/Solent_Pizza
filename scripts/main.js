
var count = 0;

function main()
{
   setInterval(set_time,500);
    setInterval(set_img,3000); 
}


function validateForm() {
    var fn = document.forms["myForm"]["first_name"].value,
        ln = document.forms["myForm"]["last_name"].value,
        e = document.forms["myForm"]["email"].value,
        m = document.forms["myForm"]["message"].value;
    if (m == "") {
    if (fn == "") 
    {
        document.getElementById("fn").style.backgroundColor = "red"; 
        
    }
    if (ln == "") 
    {
        document.getElementById("ln").style.backgroundColor = "red"; 
        
    }
    if (e == "") 
    {
        document.getElementById("e").style.backgroundColor = "red"; 
       
    }
    if (m == "") 
    {
        document.getElementById("m").style.backgroundColor = "red"; 
        
    }
        return false;
    }
    
}
function set_img()
{
    var a = "img/p1.jpg", 
        b = "img/p2.jpg",
        c = "img/p3.jpg", 
        d = "img/p4.jpg", 
        e = "img/p5.jpg", 
        f = "img/p6.jpg", 
        g = "img/p7.jpg";

         if (count == 7) {document.getElementById("pizza_slide").src = a; count = 0; }
    else if (count == 1) {document.getElementById("pizza_slide").src = b; }
    else if (count == 2) {document.getElementById("pizza_slide").src = c; }
    else if (count == 3) {document.getElementById("pizza_slide").src = d; } 
    else if (count == 4) {document.getElementById("pizza_slide").src = e; }
    else if (count == 5) {document.getElementById("pizza_slide").src = f; }
    else if (count == 6) {document.getElementById("pizza_slide").src = g; }

    count = count + 1;    
    }




function set_time()
{
    var d = new Date();
    
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    
    if (h < 10){h = "0" + h;}
    if (m < 10){m = "0" + m;}
    if (s < 10){s = "0" + s;}
    
    var t = (h +":"+ m + ":" + s);
    
    document.getElementById("time").innerHTML = t;
    
}

