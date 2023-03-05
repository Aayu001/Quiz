const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
const scrol1=document.querySelector("#navBar")
    console.log(window.scrollY)
    window.addEventEventListener("scroll",()=>{
        if(window.scrollY >=10) scrol1.classList.add("navBar")
        else scrol1.classList.remove("navBar")
    })