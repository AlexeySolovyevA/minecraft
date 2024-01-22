$('.slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow:
    `
    <button class="slider__arrow slider__arrow--left">
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M87.5 111L40.5 64" stroke="white" stroke-width="12" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M40.5 64L87.5 17" stroke="white" stroke-width="12" stroke-miterlimit="10" stroke-linecap="square"/>
</svg>


    </button>
    `,
    nextArrow: 
    `
    <button class="slider__arrow slider__arrow--right">
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.5 17L87.5 64" stroke="white" stroke-width="12" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M87.5 64L40.5 111" stroke="white" stroke-width="12" stroke-miterlimit="10" stroke-linecap="square"/>
</svg>

    </button>
    `,
});