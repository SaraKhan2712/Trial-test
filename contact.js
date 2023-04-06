var fname= document.getElementById('fname').value;
sessionStorage.setItem("fname1", fname);

var lname= document.getElementById('lname').value;
sessionStorage.setItem("lname1", lname);
var email= document.getElementById('email').value;
sessionStorage.setItem("email1", email);
var phone= document.getElementById('phone').value;
sessionStorage.setItem("phone1", phone);
var comment= document.getElementById('comment').value;
sessionStorage.setItem("comment1", comment);


function print1()
{
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value; 
    var robot = document.getElementById('robot').value;
    var email= document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    
    if (fname.trim() == "" || lname.trim() == "" || robot.trim == "" || comment.trim()=="" || email.trim() == "")
    {
        alert("Some or all the mandatory fields - First Name, Last Name, Email, Suggestion/query and robot check, are not provided. Please input them and submit the form again");
        return false;
       
    }
    else if(robot!="98")
    {
    alert("Please check the robot check calculation and try submitting the form again");
    return false;
    }
    else if(fname.length <2 || lname.length <2)
    {
        alert("First Name and Last Name cannot be less than 2 characters");
        return false;
    }
    else if(comment.length<30)
    {
        alert("Please provide a detailed suggestion with a minimum of 30 characters to help you serve better!")
        return false
    }
    else 
    {
        return true;
    }
}

/*
function print1()
{
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value; 
    var robot = document.getElementById('robot').value;
    var comment = document.getElementById('comment').value;
    if(fname.trim() == "")
    {
        alert("First name cannot be left blank")
        form.fname.focus();
        return false;
    }
    else if(fname.length <3)
    {
        alert("First name cannot be less than 3 characters");
        return false;
    }
    else if(lname.length <3)
    {
        alert("Las t name cannot be less than 3 characters");
        return false;
    }
    else{
        myFunction();
        return true;  
    }
}
*/
/*
function myFunction()
{
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var email= document.getElementById('email').value;
    var phone= document.getElementById('phone').value;
    var comment= document.getElementById('comment').value;
    localStorage.setItem("fname1", fname);
    localStorage.setItem("lname1", lname);
    localStorage.setItem("email1", email);
    localStorage.setItem("phone1", phone);
    localStorage.setItem("comment1", comment);
   
    
    /*const mywindow = window.open();
    mywindow.document.open();

    mywindow.document.title ="Thank You";
    mywindow.document.write("<b>Form Data Submitted</b><br>")
    mywindow.document.write("Thank you for you feedback/suggestion, <strong>"+fname + " " + lname+ "</strong>!<br> <br> Feedback received on "+ Date() +"<br><br> We value your inputs and our team will contact you shortly through email at <strong>"+ email+ "</strong>. <br><br> Have a great day!");
    mywindow.document.writeln("<br><br><p><b>Below is the summary of your feedback:</b></p>" );
    mywindow.document.writeln("<p><b>First Name:</b> "+ fname + "</p>");
    mywindow.document.writeln("<p><b>Last Name:</b> "+ lname + "</p>");
    mywindow.document.writeln("<p><b>Email:</b> "+ email + "</p>" );
    mywindow.document.writeln("<p><b>Telephone:</b> "+ phone + "</p>");
    mywindow.document.writeln("<p><b>Please provide your suggestion/query in the textbox below:</b> "+ comment + "</p>" );
       mywindow.document.write("<br><br><br><font-align:center><strong>You can now close this window.</strong>")
    //mywindow.document.write(<a href="index.html">Home Page</a>);
    mywindow.document.close()

}*/


function myFunction1()
{
    let x = document.getElementById("submit")
    x.addEventListener("click", function()
    {
        alert("Thank you!");
    })
}


function mycolor()
{
    document.body.backgroundColor = "blue";
    
}

document.getElementById('time').innerHTML= "Last Modified: "+ document.lastModified;

/*to validate the phone number
function validatePhoneNumber(phone_num)
{
    var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return regex.test(phone_num);
}

function validateForm(event)
{
    var phone = document.getElementById('phone').value;
    if(!validatePhoneNumber(phone))
    {
        alert("Wrong phone number/format");
    }
    else
    {
        alert("success");
        }
        event.preventDefault();
}
*/