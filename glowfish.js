const  Image = document.querySelector("img");

Image.onmouseover = () =>{
    const mySrc = Image.getAttribute("src");
    const newimage = document.getElementById('glo')
    if(mySrc === "GloFish1.jpg")
    {
        Image.setAttribute("src", "GloFish2.jpg");
        
    }
    else
    {
        Image.setAttribute("src", "GloFish1.jpg");
    }
};

document.getElementById('time').innerHTML= "Last Modified: "+ document.lastModified;