/*document.getElementById("fname2").innerHTML = localStorage.getItem("fname1");
document.getElementById("lname2").innerHTML = localStorage.getItem("lname1");
document.getElementById("email2").innerHTML = localStorage.getItem("email1");
document.getElementById("phone2").innerHTML = localStorage.getItem("phone1");
document.getElementById("comment2").innerHTML = localStorage.getItem("comment1");
*/
function text()
{
    document.writeln("Feeback received on"+ Date());
    //const fname2= localStorage.getItem("fname1");
    //document.contentType =`First Name:, ${fname2}`;
}

document.getElementById("dated").innerHTML=Date();
var firsName = sessionStorage.getItem("fname1");
document.getElementById("fname2").innerHTML = firsName;
var lastName = sessionStorage.getItem("lname1");
document.getElementById("lname2").innerHTML = lastName;
var email3 = sessionStorage.getItem("email1");
document.getElementById("email2").innerHTML = email3;
var tele = sessionStorage.getItem("phone1");
document.getElementById("phone2").innerHTML = tele;
var comm = sessionStorage.getItem("comment1");
document.getElementById("comment2").innerHTML = comm;
