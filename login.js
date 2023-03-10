function validate()
{
    var u=document.getElementById('uname').value;
    var p=document.getElementById('pass').value;
    if(u.trim()=="" || p.trim() =="")
    {
        alert("Please provide the credentials and try signing in again.")
        return false;
    }
    else if(u == "SaraKhan" && p == "12345")
    {
        alert ("Sign-in successful! Welcome, "+u);
        return true;
    }
    {
        alert("Sign-in unsuccessful! Please check the credentials and try again");
        return false;
    }
}