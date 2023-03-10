const addBtn=document.querySelector("#createClass")
const addClass=document.querySelector("#addClass")
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
