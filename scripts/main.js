
var count = 0;

function main_index()
{
    setInterval(set_time,500);
    setInterval(set_img,3000); 
    
    //rollover image event listeners
    document.getElementById("img_pizza1").addEventListener("mouseover", mouse_over_img_pizza1);
    document.getElementById("img_pizza1").addEventListener("mouseout" , mouse_out_img_pizza1);
    document.getElementById("img_pizza2").addEventListener("mouseover", mouse_over_img_pizza2);
    document.getElementById("img_pizza2").addEventListener("mouseout" , mouse_out_img_pizza2);
}
function main_contact()
{
    //contact form input event listeners
    document.getElementById("input_fn").addEventListener("input", validate);
    document.getElementById("input_ln").addEventListener("input", validate);
    document.getElementById("input_m") .addEventListener("input", validate);
    document.getElementById("input_e") .addEventListener("input", validate);
    document.getElementById("submit")  .addEventListener("click", submit_form);
}

function main_order()
{
    
}
function submit_form(event)
{
    
    if(document.getElementById("fn_tickcross").innerHTML == "✔" && document.getElementById("ln_tickcross").innerHTML == "✔" &&
       document.getElementById("e_tickcross") .innerHTML == "✔" && document.getElementById("m_tickcross") .innerHTML == "✔")
    {
          console.log("SUBMIT");
          document.getElementById("error_msg_1").style.display = 'none';
    }
    else
    {
        console.log("ERROR")
        document.getElementById("error_msg_1").style.display = 'inline';
        event.preventDefault();
        
    var fn = document.getElementById("input_fn"),
        ln = document.getElementById("input_ln"),
        e = document.getElementById("input_e"),
        m= document.getElementById("input_m");
    
    var fn_tc = document.getElementById("fn_tickcross"),
        ln_tc = document.getElementById("ln_tickcross"),
        e_tc  = document.getElementById("e_tickcross"),
        m_tc  = document.getElementById("m_tickcross");
        
    if(fn.value.length < 3)  // Is input length at least 3
        {
            fn.style.backgroundColor = "#f14a51";  //negative result
            fn_tc.innerHTML = "✘";
            fn_tc.style.color = "#f14a51";
        }
    if(ln.value.length < 3) // Is input length at least 3
        {
            ln.style.backgroundColor = "#f14a51"; //negative result
            ln_tc.innerHTML = "✘";
            ln_tc.style.color = "#f14a51";
        } 
         if(m.value.length < 10) // Is input length at least 10
        {
            m.style.backgroundColor = "#f14a51"; //negative result
            m_tc.innerHTML = "✘";
            m_tc.style.color = "#f14a51";
        }
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value)) // Is input length at least 5
        {
            return true
        }
        else
        {
            e.style.backgroundColor = "#f14a51"; //negative result
            e_tc.innerHTML = "✘";
            e_tc.style.color = "#f14a51";
            return false
        }
    }
}
function validate() //Validate contact form
{
    var fn = document.getElementById("input_fn"),
        ln = document.getElementById("input_ln"),
        e = document.getElementById("input_e"),
        m= document.getElementById("input_m");
    
    var fn_tc = document.getElementById("fn_tickcross"),
        ln_tc = document.getElementById("ln_tickcross"),
        e_tc  = document.getElementById("e_tickcross"),
        m_tc  = document.getElementById("m_tickcross");
    
    
   document.activeElement === document.getElementById("")
    
    if (document.activeElement === fn) //first name input has focus
    {
        if(fn.value.length < 3)  // Is input length at least 3
        {
            fn.style.backgroundColor = "#f14a51";  //negative result
            fn_tc.innerHTML = "✘";
            fn_tc.style.color = "#f14a51";
        }
        else
        {
            fn.style.backgroundColor = "white"; //positive result
            fn_tc.innerHTML = "✔";
            fn_tc.style.color = "green";
        }
    } 
    
    else if (document.activeElement === ln) //last name input has focus
    {
        if(ln.value.length < 3) // Is input length at least 3
        {
            ln.style.backgroundColor = "#f14a51"; //negative result
            ln_tc.innerHTML = "✘";
            ln_tc.style.color = "#f14a51";
        }
        else
        {
            ln.style.backgroundColor = "white"; //positive result
            ln_tc.innerHTML = "✔";
            ln_tc.style.color = "green";
        }
    }
    
    else if (document.activeElement === e) //email input has focus
    {
        
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value)) // Is input length at least 5
        {
            e.style.backgroundColor = "white"; //positive result
            e_tc.innerHTML = "✔";
            e_tc.style.color = "green";
            return true
        }
        else
        {
            e.style.backgroundColor = "#f14a51"; //negative result
            e_tc.innerHTML = "✘";
            e_tc.style.color = "#f14a51";
            return false
        }
    }
    else if (document.activeElement === m) //message input has focus
    {
        if(m.value.length < 10) // Is input length at least 10
        {
            m.style.backgroundColor = "#f14a51"; //negative result
            m_tc.innerHTML = "✘";
            m_tc.style.color = "#f14a51";
        }
        else
        {
            m.style.backgroundColor = "white"; //positive result
            m_tc.innerHTML = "✔";
            m_tc.style.color = "green";
        }
    }
}
function set_img() //run carousel
{
    var picture1 = "img/p1.jpg", 
        picture2 = "img/p2.jpg",
        picture3 = "img/p3.jpg", 
        picture4 = "img/p4.jpg", 
        picture5 = "img/p5.jpg", 
        picture6 = "img/p6.jpg", 
        picture7 = "img/p7.jpg";
        
    var slideshow = document.getElementById("pizza_slide");

         if (count == 7) {slideshow.src = picture1; count = 0;}
    else if (count == 1) {slideshow.src = picture2;}
    else if (count == 2) {slideshow.src = picture3;}
    else if (count == 3) {slideshow.src = picture4;}
    else if (count == 4) {slideshow.src = picture5;}
    else if (count == 5) {slideshow.src = picture6;}
    else if (count == 6) {slideshow.src = picture7;}

    count = count + 1;    
}

function set_time() 
{
    var d = new Date();  //new date object
    
    var y = d.getFullYear();    //return year
    var mn = d.getUTCMonth() + 1;  //return month (add one for readable format)
    var dy = d.getDate();       //return day of month
    
    if (mn < 10){mn = "0" + mn;} //Convert to 
    if (dy < 10){dy = "0" + dy;} //two digit format
    
    var h = d.getHours();   //return hour of day
    var m = d.getMinutes(); //return minutes
    var s = d.getSeconds(); //return seconds
    
    if (h < 10){h = "0" + h;} //convert to
    if (m < 10){m = "0" + m;} //hh:mm:ss
    if (s < 10){s = "0" + s;} //format
    
    var t = (h +":"+ m + ":" + s);  //convert to readable format
    var dte = (dy +"-"+ mn + "-" + y);
    
    document.getElementById("time").innerHTML = t; //HTML = strings
    document.getElementById("date").innerHTML = dte;
}
function mouse_over_img_pizza1() //mouse over 1
{
    document.getElementById("img_pizza1").src = "img/p1edit.png";
}
function mouse_out_img_pizza1() //mouse out 1
{
    document.getElementById("img_pizza1").src= "img/p1.jpg";
}
function mouse_over_img_pizza2() //mouse over 2
{
    document.getElementById("img_pizza2").src = "img/p6edit.png";
}
function mouse_out_img_pizza2() //mouse out 2
{
    document.getElementById("img_pizza2").src = "img/p6.jpg";
}

