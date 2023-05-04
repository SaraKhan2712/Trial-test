

/*const  Image1 = document.querySelector('img');

Image1.onmouseover = () =>{
    const mySrc = Image1.getAttribute("src");
        if(mySrc === "angelfish1.jpg")
    {
        Image1.setAttribute("src", "angelzoom1.jpg");
        Image1.style.width="200px";
        Image1.style.maxHeight = "120px";
    }
    else
    {
        Image1.setAttribute("src", "angelfish1.jpg");
    }
};*/

document.getElementById("quizangel").addEventListener("click", answerAngel);
function answerAngel()
{
    var x = document.getElementById('fishLen');
    var l1 = document.getElementById('yes');
    var l2 = document.getElementById('no');
    var l3 = document.getElementById('maybe');
    if (x.value==10 && l2.checked == true)
    {
        alert("Great Job! You have answered both questions correctly!."); 
        
    }
    else if ((x.value==10) && ((l1.checked == true)||(l3.checked == true)))
    {
        alert("Almost there!. Answer 1 is correct and Answer 2 is wrong. Please try again.");
    }
    else if (x.value!=10 && l2.checked == true)
    {
        alert("Almost there!. Answer 1 is wrong and Answer 2 is correct. Please try again.");
    }
    else
    {
        alert("Sorry! You have answered both questions wrong. Please try again");
    }
}




/*
document.getElementById("ques1").addEventListener("click", answer1);
function answer1()
{
    var x = document.getElementById('fishLen');
    if (x.value==10)
    {
        alert("Great Job! The answer is correct.");
        
        
    }
    else if(x.value>=7 && x.value<=12)
    {
        alert("You're almost there. Keep guessing!");
        
    }
    else if(x.value>12)
    {
        alert("Unfortunately, the fish is not that large! Guess again or read the article above");
    }
    else if(x.value>0 && x.value<=6)
    {
        alert("Sorry, Try again! Just a hint, Angel fish is bigger than you thought!");
    }
    else 
    {
        alert("Either the answer is not provided or Invalid entry.")
    }
    
}

document.getElementById("ques2").addEventListener("click", answer2);
function answer2()
{
    var l1 = document.getElementById('yes');
    var l2 = document.getElementById('no');
    var l3 = document.getElementById('maybe');
    if (l1.checked == true || l3.checked == true )
    {
        alert("Sorry. The correct answer is "+l2.value);
    }
    else if(l2.checked == true)
    {
        alert("Great job!");
    }
    else 
    {
        alert("Please select the answer and then Submit.");
    }
}

document.getElementById('time').innerHTML= "Last Modified: "+ document.lastModified;
*/