//for side bar

const open1=document.querySelector(".openNav")
const close1=document.querySelector(".closeNav")
const main=document.querySelector("#mainContent")
const menu=document.querySelector(".leftMenu")
open1.addEventListener("click",()=>{
    document.querySelector(".leftMenu").style.width="250px";
    open1.classList.toggle("hide")
    close1.classList.toggle("show")
    main.classList.add("active")
})
close1.addEventListener("click",()=>{
    document.querySelector(".leftMenu").style.width="0";
    open1.classList.toggle("hide")
    close1.classList.toggle("show")
    main.classList.remove("active")
})
//for adding class
const addBtns=document.querySelector("#createClass")
        const addClasses=document.querySelector(".joinClass")
        const canc=document.querySelector("#cancel")
        const f=document.querySelector("#class")
        f.addEventListener("click",(event)=>{
            event.preventDefault();
        })
        addBtns.addEventListener("click",()=>{
            addClasses.classList.add("active")
        })
        canc.addEventListener("click",()=>{
            addClasses.classList.remove("active")
        })