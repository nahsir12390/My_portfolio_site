let leftNav =document.getElementById("leftNav")
let yNav=document.querySelector(".yNav")
let backToTop =document.querySelector(".backToTop")
let writeUpDiv =document.querySelectorAll(" .writeUpDiv ")
let service =document.getElementById("service")  
let section2 =document.getElementById("section2")

function showNav(){
    yNav.style.display="flex"
    window.scrollY
}

function closeNav(){
    yNav.style.display="none"
}

 


   window.addEventListener("scroll", ()=>{
    if(window.scrollY>150){
        backToTop.classList.add("backToTopShow")

    }else{
     backToTop.classList.remove("backToTopShow")
    }
   })

backToTop.addEventListener("click", ()=>{
    window.scrollTo({top:0, behavior:"smooth"});
})

