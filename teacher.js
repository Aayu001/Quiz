//for side menu

const open1=document.querySelector(".openNav")
const close1=document.querySelector(".closeNav")
const main=document.querySelector(".mainContent")
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
const addBtn=document.querySelector("#createClass")
const addClass=document.querySelector(".modal")
const cancel=document.querySelector("#classCancel")
const form=document.querySelector("#class")

form.addEventListener("click",(event)=>{
    event.preventDefault();
})
addBtn.addEventListener("click",()=>{
    addClass.classList.add("active")
})
cancel.addEventListener("click",()=>{
    addClass.classList.remove("active")
})
