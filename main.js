class Slider {
    sliderItem
    carNav
    nextBtn
    prevBtn
    constructor(obj){
        this.sliderItem = [...document.querySelectorAll(obj.sliderItem)]
        this.carNav = [...document.querySelectorAll(obj.carNav)]
        this.nextBtn = document.querySelector(obj.nextBtn)
        this.prevBtn = document.querySelector(obj.prevBtn)
        console.log(this.carNav)
    }

    mySlide (){
        let i = 0;
        this.nextBtn.addEventListener("click", ()=>{
            this.sliderItem[i].style.display = "none"
            this.carNav[i].classList.remove("carousel-nav-item-active")
            i++
            if(i >= this.sliderItem.length){
                i = 0
            }
            this.carNav[i].classList.add("carousel-nav-item-active")
            this.sliderItem[i].style.display = "block"
            console.log(i)
        })
        this.prevBtn.addEventListener("click", ()=>{
            this.sliderItem[i].style.display = "none"
            this.carNav[i].classList.remove("carousel-nav-item-active")
            i--
            if(i < 0){
                i = this.sliderItem.length-1
            }
            this.carNav[i].classList.add("carousel-nav-item-active")
            this.sliderItem[i].style.display = "block"
            console.log(i)
        })
    }
}


const slide = new Slider({
    sliderItem: ".carousel-item",
    nextBtn: ".next",
    prevBtn: ".prev",
    carNav: ".carousel-nav div"
});
slide.mySlide()