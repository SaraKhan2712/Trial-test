document.getElementById('time').innerHTML= "Last Modified: "+ document.lastModified;

document.getElementById('quizs').addEventListener("click", answer2);
function answer2()
{
    var p1 = document.getElementById('yes1');
    var p2 = document.getElementById('no1');
    var c1 = document.getElementById('ques2');
    var c2 = document.getElementById('ques22');
    var c3 = document.getElementById('maybe1');
    if ((p2.checked == true ) && (c2.checked == true))
    {
        alert("Good Job! You have answered both questions correctly")
    }
    else if((p2.checked == true ) && ((c1.checked == true)||(c1.checked == true)))
    {
        alert("Almost there. Answer 1 is correct, Answer 2 is wrong. Try again!")
    }
    else if((p1.checked == true ) && (c2.checked == true))
    {
        alert("Almost there. Answer 1 is wrong, Answer 2 is correct. Try again!")
    }
    else
    {
        alert("Sorry! You have answered both questions wrong. Please try again")
    }
}


/*
document.getElementById('ques1').addEventListener("click", answer3);
function answer3()
{
    var p1 = document.getElementById('yes1');
    var p2 = document.getElementById('no1');
    if (p2.checked == true )
    {
        alert("Great Job!");
    }
    else if(p1.checked == true)
    {
        alert("Sorry. The correct answer is "+ p2.value);
    }
    else 
    {
        alert("Please select the answer and then Submit.");
    }
}



document.getElementById('platy2').addEventListener("click", answer4);
function answer4()
{
    var c1 = document.getElementById('ques2');
    var c2 = document.getElementById('ques22');
    var c3 = document.getElementById('maybe1');
    if(c1.checked == true || c3.checked == true)
    {
        alert("Sorry. The correct answer is "+c2.value+".");
   }
    else if(c2.checked == true)
    {
        alert("Well Done! You are a rockstar!");
    }
    else
    {
        alert("Please select the answer and then Submit.");
    }
    
}*/

