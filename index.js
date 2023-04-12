document.getElementById('time').innerHTML= "Last Modified: "+ document.lastModified;

/*
function welcome(){
    let firstName = prompt("Please enter your first name");
    let lastName = prompt("Please enter your last name");
    let x= document.querySelector("h1.heading1");
    if(firstName!= null && lastName!=null)
    {
        document.querySelector('h1').innerHTML = "Welcome, <em>"+ firstName + " " + lastName+"</em>! Enjoy learning about pet fish.";
        x.style.color="pink";
    }
    else
    {
        document.querySelector('h1').innerHTML ="Hello Guest! Welcome to Aqua Knowledge..."
        x.style.color="white";
    }
    
}
*/
let myHeading = document.querySelector('h1');
function welcome()
{
    const firstName = prompt("Please enter your name");
    if(!firstName)
    {
        welcome();
    }
    else
    {
    localStorage.setItem("name", firstName);
    myHeading.textContent= `Welcome, ${firstName}! Enjoy learning about pet fish.`;
    myHeading.style.color="pink";
    }
}


if(!localStorage.getItem("name"))
{
    welcome();
}
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent= `Welcome back, ${storedName}! Keep Learning about pet fish...`;
}

document.getElementById('user1').addEventListener('click', function()
{
    welcome();
});

