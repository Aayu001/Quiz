const open1=document.querySelector(".openNav")
const close1=document.querySelector(".closeNav")
open1.addEventListener("click",()=>{
    document.querySelector(".leftMenu").style.display="block";
    document.querySelector(".leftMenu").style.width="250px";
    open1.classList.toggle("hide")
    close1.classList.toggle("show")
})
close1.addEventListener("click",()=>{
    document.querySelector(".leftMenu").style.display="none";
    document.querySelector(".leftMenu").style.width="0";
    open1.classList.toggle("hide")
    close1.classList.toggle("show")
})
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
