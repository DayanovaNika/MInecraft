$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: `
    <button class="slick-arrow slick-prev">
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="128" height="128" transform="matrix(-1 0 0 -1 128 128)" fill="#ffffff00"/>
<path d="M87.5 111L40.5 64" stroke="#fff" stroke-width="12" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M40.5 64L87.5 17" stroke="#fff" stroke-width="12" stroke-miterlimit="10" stroke-linecap="square"/>
</svg>
    </button>
    `,
    nextArrow: `
    <button class="slick-arrow slick-next">
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="128" height="128" fill="#ffffff00"/>
<path d="M40.5 17L87.5 64" stroke="#fff" stroke-width="12" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M87.5 64L40.5 111" stroke="#fff" stroke-width="12" stroke-miterlimit="10" stroke-linecap="square"/>
</svg>
    </button> `
});