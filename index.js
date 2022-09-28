// Nav

const openMenuBtn = document.getElementById("open-menu"),
      nav = document.getElementById("top-bar-nav")
    
openMenuBtn.addEventListener("click", ()=>{
    if (nav.style.display=="block")
        nav.style.display="none"
    else    
        nav.style.display = "block";

})

////////////////////// CAROUSEL //////////////////////////
const carouselItems = document.getElementsByClassName("carousel-item")


document.getElementById("carousel-btn-prev").addEventListener("click", ()=>{
    let activeIndex = 0;
    for(let i =0;i< carouselItems.length ;i++){
        if (carouselItems[i].hasAttribute("data-active") )
            activeIndex=i; 
    }
    carouselItems[activeIndex].removeAttribute("data-active")
    activeIndex--;
    if(activeIndex == -1)
        activeIndex=carouselItems.length-1;
    carouselItems[activeIndex].setAttribute("data-active","true")

})
document.getElementById("carousel-btn-next").addEventListener("click", ()=>{
    let activeIndex = 0;
    for(let i =0;i< carouselItems.length ;i++){
        if (carouselItems[i].hasAttribute("data-active") )
            activeIndex=i; 
    }
    carouselItems[activeIndex].removeAttribute("data-active")
    activeIndex++;
    if(activeIndex == carouselItems.length)
        activeIndex=0;
    carouselItems[activeIndex].setAttribute("data-active","true")
})  
