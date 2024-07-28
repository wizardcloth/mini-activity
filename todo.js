let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    //list item
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item); 
    input.value = "";

    //delete button
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);

    let donebtn = document.createElement("button");
    donebtn.innerText = "Done";
    donebtn.classList.add("done");
    item.appendChild(donebtn);


})

ul.addEventListener("click",function(event){
    if (event.target.className == "done") {
        let listitem = event.target.parentElement;
        listitem.classList.add("strike");
    }
})

ul.addEventListener("click",function(event){
    // console.log(event.target.className);
    if (event.target.className == "delete") {
        let listitem = event.target.parentElement;
        listitem.remove();
    }
    

})
//event delegation

    // let dltbtns = document.querySelectorAll(".delete");
    // for (dltbtn of dltbtns) {
    //     dltbtn.addEventListener("click",function(){
    //         let par = this.parentElement;
    //         console.log(par);
    //         par.remove();
    //     });
    // }


