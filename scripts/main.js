function validateForm() {
    var fn = document.forms["myForm"]["first_name"].value;
    var ln = document.forms["myForm"]["last_name"].value;
    var e = document.forms["myForm"]["email"].value;
    var m = document.forms["myForm"]["message"].value;
    
    if (fn ||  ||   == "") {
        document.getElementById("fn").style.backgroundColor = "red"
        
        return false;
    }
}
