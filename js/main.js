$('.slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow:
    `
    <button class="slider__arrow slider__arrow--left">
    <svg width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M247.35 35.7L211.65 0L58.65 153L211.65 306L247.35 270.3L130.05 153L247.35 35.7Z" fill="white"/>
</svg>
    </button>
    `,
    nextArrow: 
    `
    <button class="slider__arrow slider__arrow--right">
    <svg width="306" height="306" viewBox="0 0 306 306" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M94.35 0L58.65 35.7L175.95 153L58.65 270.3L94.35 306L247.35 153L94.35 0Z" fill="white"/>
</svg>
    </button>
    `,
});