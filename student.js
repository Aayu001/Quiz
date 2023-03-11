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
