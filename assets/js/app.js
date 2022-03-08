$(function() {


    // Product add to cart
    $(".product_add_to_cart").on("click", function(event){
        event.preventDefault();
        $(this).parents(".product_item").addClass("active");
        let amount = Number($(this).parents(".product_item").find(".amount").text());
        let price = Number($(this).parents(".product_item").find(".price span").text());
        $(this).parents(".product_item").find(".total_price span").text((amount + 1) * price)
        $(this).parents(".product_item").find(".amount").text(amount + 1)
        
    });


    $(".product_minus_from_cart").on("click", function(event){
        event.preventDefault();
        $(this).parents(".product_item").addClass("active");
        let amount = Number($(this).parents(".product_item").find(".amount").text());
        let price = Number($(this).parents(".product_item").find(".price span").text());
        if (amount != 0){
            $(this).parents(".product_item").find(".total_price span").text((amount - 1) * price)
            $(this).parents(".product_item").find(".amount").text(amount - 1)
        }
    });

    // Tabs
    $(document).on("click", '.tab__btn', function(event){
        event.preventDefault();
        $(".tab").removeClass("active")
        $(this).parents(".tab").addClass("active");
        console.log('csdsdcs')
    });


    // Zero length cart modal show and hide
    $(document).on("click", '.cart_modal_show_btn', function(event){
        event.preventDefault();
        
        $(".overlay").addClass("show");
        $(".zero_lingth_cart").addClass("show");
        $("body").addClass("no-scroll");
        console.log('csdsdcs')
    });

    $(document).on("click", '.overlay', function(event){
        event.preventDefault();
        
        $(".overlay").removeClass("show");
        $(".zero_lingth_cart").removeClass("show");
        $("body").removeClass("no-scroll");
        console.log('csdsdcs')
    });

    $(document).on("click", '.cart_modal_hide_btn', function(event){
        event.preventDefault();
        
        $(".overlay").removeClass("show");
        $(".zero_lingth_cart").removeClass("show");
        $("body").removeClass("no-scroll");
        console.log('csdsdcs')
    });

    

    // Sliders
    $('#newArrivals').slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        arrow: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $("#newArrivals__btns"),

        responsive: [
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
            }
        ]


    });
    $('#slider_one').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrow: true,
        appendArrows: $("#none"),
        responsive: [
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
            }
        ]


    });

    $('#slider_two').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrow: true,
        appendArrows: $("#none"),
        responsive: [
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
            }
        ]


    });

    $('#slider_three').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrow: true,
        appendArrows: $("#none"),
        responsive: [
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
            }
        ]


    });

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 200, // values from 0 to 3000, with step 50ms
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });

});



