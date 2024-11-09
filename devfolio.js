let vaticalNavContainer =document.getElementById("vaticalNavContainer")
const openNav = document.querySelector(".open-nav")
const closeNav = document.querySelector(".close-nav")
const horizontalNav =document.querySelector(".horizontal-nav")
const openNavIcon = document.querySelector(".fa-bars")
let closeNavIcon = document.querySelector(".fa-xmark")
let darkMode =document.getElementById("darkMode")
let themeIconContainer=document.querySelector(".theme-icon-container")
const backToTop = document.getElementById("back-to-top")

console.log(backToTop)

document.body.style.transition="2s "



vaticalNavContainer.style.display="none"
openNav.addEventListener("click", (event)=>{
    vaticalNavContainer.style.display="flex"
    horizontalNav.style.display="none"
    horizontalNav.style.transition="2s"
})

closeNav.addEventListener("click", (event)=>{
    vaticalNavContainer.style.display="none"
    horizontalNav.style.display="flex"
})

themeIconContainer.addEventListener("click",(e)=>{

        darkMode.classList.toggle("bi-lightbulb")
        darkMode.classList.toggle("light-icon")
if(darkMode.classList.toggle!=="bi-lightbulb"){
document.body.classList.toggle("dark-theme")
openNav.classList.toggle("light-icon")
closeNav.classList.toggle("light-icon")

}
    
})


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  backToTop.addEventListener('click', scrollToTop);


  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) { 
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
 // ScrollReveal().reveal('.section2');
  
      

      
