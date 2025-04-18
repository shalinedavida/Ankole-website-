const left= document.querySelector(".previousButton");

const right= document.querySelector(".nextButton");

const slider = document.querySelector(".slider");

const testimonial = document.querySelectorAll(".slide");

let slideNumber = 1;

const length= testimonial.length;

const nextSlide= () =>{
    slider.style.transform =`translateX(-${slideNumber* 800}px)`;
    slideNumber++;
};

const prevSlide = () => {
    slider.style.transform =`translateX(-${(slideNumber-2)* 800}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform =`translate(0px)`;
    slideNumber=1;
};
 const getLastSlide = () =>{
    slider.style.transform =`translateX(-${(length-1)*800}px)`;
    slideNumber=length;
 };
 right.addEventListener("click",()=>{
    slideNumber < length ? nextSlide() : getFirstSlide();
 });
 left.addEventListener("click",() =>{
    slideNumber > 1 ? prevSlide() :getLastSlide();
    changeClr()
 });

