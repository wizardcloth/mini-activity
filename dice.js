let btn = document.querySelector(".button");
let img = document.querySelector("#image");
btn.addEventListener("click",()=>{
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    if (random == 1) {
        img.setAttribute("src","img/one.png")
    }
    else if(random == 2)
    {
        img.setAttribute("src","img/two.png")
    }
    else if(random == 3)
    {
        img.setAttribute("src","img/three.png")
    }
    else if(random == 4)
    {
        img.setAttribute("src","img/four.png")
    }
    else if(random == 5)
    {
        img.setAttribute("src","img/five.png")
    }
    else if(random == 6)
    {
        img.setAttribute("src","img/six.png")
    }
    else{
        console.log("some error occured");
    }
})