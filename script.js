const myName = document.querySelector(".name");
const myDescription = document.querySelector(".description")
console.log(myName);
console.log(myDescription);
const darkModeHeading = document.querySelector(".MainHeading")
const darkModeTEXT = document.querySelector(".introText")
const darkModeButton = document.querySelector(".DarkModeButton")
darkModeButton.addEventListener("click",function()
{
    darkModeHeading.classList.toggle("darkModeHeading");
    darkModeTEXT.classList.toggle("darkMode")
})