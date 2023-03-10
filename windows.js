/*
var a = window;
alert("Hello everyone");
console.log(a);

//--------------Requesting user to input the value----
var x = parseInt(prompt("Enter the value of x:"));
var y =  parseInt(prompt("Enter the value of y:")) ;
console.log(x+y);
document.write("The sum of "+x+ " and "+ y + "is: ", x+y);


//------confirm method----------------
var a = window;
a = confirm ("Are you sure?");
console.log(a);


//--------document method
var a = window.document;
console.log(a);



//--------inner height
var a = window.innerHeight;
console.log(a);

//--------inner width
var a = window.innerWidth;
console.log(a);



function button()
{
   var c = document.getElementById('heading').innerHTML;
   alert(c);
}


var x = document.body;
console.log(x);

function oneS(){
    //var x =document.querySelector('.left');
    //var y = x. querySelector('.left');
    //var y = x.childNodes;
    //var y = x.firstChild;
    //var y = x.parentElement;
    //console.log(x.previousElementSibling);
    //console.log(x.nextElementSibling);
    const x = document.activeElement.tagName;
    document.getElementById('t1').innerHTML = x;
}


let x = document.getElementsByTagName("a").length;
console.log(x);
document.getElementById('demo').innerHTML = x;



var x = document.getElementsByTagName("a")[0].innerHTML;
document.getElementById('demo').innerHTML = x;

for (var i=0; i<document.getElementsByTagName("a").length; i++)
{
    let x =document.getElementsByTagName("a")[i].innerHTML;
    document.getElementById('demo').innerHTML=x;
    i++;
}

*/

document.querySelector("h2").innerHTML = "All about fish !";
//document.addEventListener("click",() =>{document.body.style.background = "gray";});

//let x = document.getElementsByTagName('applet').length;
//document.getElementById('t1').innerHTML="The number of applets are: "+ x;

//let base = document.baseURI;
//document.getElementById('t1').innerHTML = base;


//let myBody = document.body.innerHTML;
//document.getElementById('t1').innerHTML = "Here is the body of the HTML: <br>"+myBody;

//document.getElementById('t1').innerHTML = "The charset of the document is: "+ document.characterSet;
/*
function button()
{
    document.open();
    document.write("<h1>Hello<h1>");
    document.write("<p>This is the paragraph<p>");
    document.close();


function button()
{
    const myWindow = window.open();
    myWindow.document.open();
    myWindow.document.write("<h1> Welcome to JS Tutorial<h1>");
    myWindow.document.write("<p> We are here to learn <p>");
    myWindow.document.close();
}

}

//document.getElementById('t1').innerHTML = "The cookies associateed with the document is: "+document.cookie;

function button()
{
    const x = document.createAttribute("class");
    x.value = "democlass";
    document.getElementsByTagName("h1")[0].setAttributeNode(x);
}



let x = document.createAttribute('style');
x.value = "color:red";
document.getElementsByTagName("h2")[0].setAttributeNode(x);


function myFunction(){
    let x = document.createAttribute("href");
    x.value = "https:google.ca";
    document.getElementById("test").setAttributeNode(x);
}


const fruits = ["Banana", "Mango", "Orange", "Pears"];

let x = document.createDocumentFragment();
for (let x1 in fruits)
{
    const li = document.createElement('li');
    li.textContent=fruits[x1];
    x.appendChild(li);
}
document.getElementById('myList').appendChild(x);


let x = document.createElement('p');
x.innerText = "This is a paragraph!";
document.getElementById('t1').appendChild(x);


let x = document.createElement('p');
x.innerText = "This is p1";
document.getElementById('demo').appendChild(x);


let x = document.createElement('button');
x.innerHTML = "Hello";
//document.body.appendChild(x);
document.getElementById('demo').appendChild(x);


let h1 = document.createElement("h1");
let text = document.createTextNode("Hello, We are learning JS!");
h1. appendChild(text);
document.body.appendChild(h1);


let h1 = document.createElement("h1");
let text = document.createTextNode("We are having all fun1");
h1.appendChild(text);
document.getElementById('demo').appendChild(h1);


let p = document.createElement('p');
let text = document.createTextNode("Life is good!");
p.appendChild(text);
document.body.appendChild(p);


let p = document.createElement('p');
let text = document.createTextNode("This is for para text node");
p.appendChild(text);
document.getElementById('demo').appendChild(p);

const view = document.defaultView;
let length = view.innerHeight;
let width = view.innerWidth;
document.getElementById('demo').innerHTML = length + " x " + width;


document.getElementById('demo').innerHTML = "The design mode is: " + document.designMode;


let x = document.doctype;
document.getElementById('demo').innerHTML = "The doctype is " + x.name;


document.getElementById('demo').innerHTML = document.documentElement.nodeName;

document.getElementById('demo').innerHTML = document.body.nodeName;

document.getElementById('t1').innerHTML = document.documentURI;


document.getElementById('t1').innerHTML = "The domain is " + document.domain;


document.getElementById('t1').innerHTML = document.forms.length;

document.getElementById('t1').innerHTML = document.forms[0].id;


document.getElementById('t1').innerHTML = document.forms.item(1).id;


const forms = document.forms;
let text = "";
for (let i =0; i<forms.length; i++)
{
    text = text + forms[i].id + "<br>";
}
document.getElementById('t1').innerHTML = text;


const form = document.forms[0];
let text = "";
for (let i=0; i<form.length; i++)
{
    text = text + form.elements[i].value + "<br>"
}
document.getElementById('t1').innerHTML = text;


document.getElementById('demo').style.color="red";

let x = document.getElementsByClassName('left right');
x[0].innerHTML = "Hello1";
x[1].innerHTML = "second left element1";
x.style.color= "yellow";


let x = document.getElementsByName("username");
document.getElementById('t1').innerHTML = x[0].tagName;

let x = document.getElementsByName('pet');
document.getElementById('t1').innerHTML = x.length;


let x = document.getElementsByTagName('*');
let text ="";
for (let i=0; i<x.length; i++)
{
    text = text + x[i].tagName +"<br>"
}

document.getElementById('t1').innerHTML = text;



let x = document.getElementsByTagName('li');
let text = "";
for( let i=0; i<x.length; i++)
{
    text = text + x[i].innerHTML + "<br>";
}
document.getElementById('t1').innerHTML = text;

document.getElementsByTagName('p')[1].innerHTML = "This is paragraph manipulation";


document.getElementById('t1').innerHTML = document.getElementsByTagName('li').length;

let x = document.getElementsByTagName('p');
let text = "";
for (let i=0; i<x.length; i++)
{
    x[i].style.backgroundColor = "orange";
}


setInterval ("myFunction()", 1);

function myFunction()
{
    let text;
    if(document.hasFocus())
    {
        text = "The focus exists"
    }
    else
    {
        text = "There is no focus"
    }
document.getElementById('t1').innerHTML=text;
}


document.getElementById('t1').innerHTML = document.getElementsByTagName('head')[0].tagName;

document.getElementById('t1').innerHTML = document.head.tagName;


document.getElementById('t1').innerHTML = document.head.firstElementChild.tagName;


document.getElementById('t1').innerHTML = document.head.lastElementChild.tagName;



document.getElementById('t1').innerHTML = document.images.length; 

let x = document.images;
let text = "";
for (let i=0; i<x.length; i++)
{
    text= text + x[i].src + "<br>"
}
document.getElementById('t1').innerHTML = text;


document.getElementById('t1').innerHTML = document.images.item(0).src;

document.getElementById('t1').innerHTML = document.images.namedItem('platy').src;

document.images[0].style.border ="4px solid red";

function myFunction1()
{
    const x = document.getElementById('myFrame');
    const h1 = x.tex
    const node = document.importNode('h1', true);
    document.body.appendChild(node);
}


document.getElementById('t1').innerHTML=document.lastModified;


document.getElementById('t1').innerHTML= document.links.item(1).href;

let x=document.links;
let text= "";
for (let i=0; i<x.length; i++)
{
    text=text+x[i].href+"<br>";
}
document.getElementById('t1').innerHTML=text;

const x= document.forms["form1"];
let text = "";
for(let i=0; i<x.length; i++)
{
    text = text + x.elements[i].value+"<br>";
}
document.getElementById('t1').innerHTML = text;


function move()
{
    let id=null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id= setInterval(frame, 5);
    function frame()
    {
        if(pos == 350)
        {
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";        }
    }

}

function myBtn()
{
    document.getElementById('date1').innerHTML = Date();
}

function checkcookies()
{
    var text = "";
    if(navigator.cookieEnabled == true)
    {
        text = "cookies are enabled";
    }
    else
    {
        text = "cookies are disabled";
    }
    document.getElementById('t1').innerHTML = text;
}

function upperCase()
{
    const x = document.getElementById('fname');
    x.value = x.value.toUpperCase();

    //x.style.textTransform= "capitalize";   
}

function mover(obj)
{
    obj.innerHTML ="Thanks!";
}

function mout(obj)
{
    obj.innerHTML ="Mouse Over";
}

function mup(obj)
{
    obj.innerHTML = "Mouse is up, thank you!";
}

function mdown(obj)
{
    obj.innerHTML = "Release me";
}



document.getElementById('mybtn').addEventListener("click", displaydate);

function displaydate()
{
    document.getElementById('date1').innerHTML=Date();
}


let x1=5;
let x2=12;
document.getElementById('mybtn').addEventListener('click', function(){myFunction(x1, x2);});

function myFunction(a, b)
{
    document.getElementById('date1').innerHTML= a*b;
}



document.getElementById('para1').addEventListener('click', function(){alert("You clicked white");}, false);

document.getElementById('div1').addEventListener('click', function(){alert("You clicked orange");}, false);

document.getElementById('para2').addEventListener('click', function(){alert("You clicked white");}, true);
document.getElementById('div2').addEventListener('click', function(){alert("You clicked orange");}, true);

document.getElementById('t1').innerHTML=document.body.innerHTML;

document.getElementById('t1').innerHTML=document.documentElement.innerHTML;


document.getElementById('para1').innerHTML= document.getElementById('test').nodeValue;

document.getElementById('para1').innerHTML= document.getElementById('test').TEXT_NODE;


const para = document.createElement('p');
const node = document.createTextNode('This is new paragraph');
para.appendChild(node);

const element = document.getElementById('div1');
element.appendChild(para);


const para = document.createElement('p');
const node = document.createTextNode('This is new paragraph for testing');
para.appendChild(node);

const element = document.getElementById('div1');
const child = document.getElementById('para3');
element.insertBefore(para, child);

function myBtn()
{
    document.getElementById('para3').remove();
}



const para = document.createElement('p');
const node = document.createTextNode('This is replacing paragraph');
para.appendChild(node);

const parent = document.getElementById('div1');
const child = document.getElementById('para1');
parent.replaceChild(para, child);


const x1 = document.getElementsByTagName('p');
for(let i=0; i<x1.length; i++)
{
    if((i%2)==0)
    {
        //x1[i].style.backgroundColor ="red";
        x1[i].style.color ="red";
    }
    else
    {
        x1[i].style.color ="blue";
    }

}
//document.getElementById('t1').innerHTML = x1[0].innerHTML;


document.getElementById('para1').addEventListener('click', function(){
    document.getElementById('para1').attributes.item(1).value="class2";
});

document.getElementById('para2').addEventListener('click', function(){
    document.getElementById('para2').attributes[1].value="class2";
});

let x = document.getElementById('div3').attributes;
let text="";
for(let i=0; i<x.length; i++)
{
    text=text+x[i].name+ " = " +x[i].value+"<br>";
}
document.getElementById('t1').innerHTML = text;

function mfunc()
{
    document.getElementById('fname').attributes.removeNamedItem('type');
}

function myBtn()
{
    document.getElementsByTagName('p')[0].innerHTML="Text Changed!";
}



let x= document.getElementById('div1');
let p1 = x.getElementsByTagName('p');
document.getElementById('t1').innerHTML = p1[3].innerHTML +" " + p1[4].innerHTML;

let text="";
let list =document.body.childNodes;
for(let x1 of list.entries())
{
    text = text + x1[0] + " " + x1[1].nodeName + "<br>";
}
document.getElementById('t1').innerHTML = text;

let text="";
let list =document.body.childNodes;
for(let x1 of list.entries())
{
    text = text + x1[0] + " " + x1[1].nodeValue + "<br>";
}
document.getElementById('t1').innerHTML = text;
*/

function myBtn()
{
    document.getElementById('para1').classList.add("class1", "class3");
}

document.getElementById('t1').innerHTML = document.getElementById('para1').classList;