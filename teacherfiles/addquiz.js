//for left menu
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
//for adding quiz
const quizes=document.querySelector(".quizes")
const form=document.querySelector("#addQuiz")
const inputQuiz=document.querySelector("#qname")
const inputSub=document.querySelector("#subname")
const addQuiz=document.querySelector(".adQuiz")
form.addEventListener("click",(e)=>{
e.preventDefault()
})
addQuiz.addEventListener("click",()=>{
    console.log(inputQuiz.value,inputSub.value)
const newQuiz=document.createElement("div")
newQuiz.className="quiz"
const newChild=document.createElement("span")
const newChild2=document.createElement("span")
newChild.className="quizname"
newChild2.className="quizsubject"
newChild.innerText=inputQuiz.value
newChild2.innerText=inputSub.value
newQuiz.appendChild(newChild)
newQuiz.appendChild(newChild2)
quizes.prepend(newQuiz)
})