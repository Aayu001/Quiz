const open1=document.querySelector("#openNav")
const close1=document.querySelector("#closeNav")
open1.addEventListener("click",()=>{
    document.querySelector(".leftMenu").style.width="250px";
})
close1.addEventListener("click",()=>{
    document.querySelector(".leftMenu").style.width="0";
})

