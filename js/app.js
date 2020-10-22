$(document).ready(function(){
 $('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay:true,
        autoplaySpeed: 2500,
  slidesToShow: 3,
  slidesToScroll: 3,
             dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },


  ]
});

$('.about_text').slick({
    dots:true,
    autoplay:true,

   autoplaySpeed: 2500,
         adaptiveHeight: true,
    arrows: false
});

 $('.second-slider').slick({
        mobileFirst:true,
  dots: true,
  speed: 400,
  infinite: true,

  autoplay:true,
        autoplaySpeed: 2500,

  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },


  ]
});






    });




  function show_navbar(){
        if($("#navbar").hasClass("active")){
             $('#change').removeClass("fa-times").addClass("fa-bars");
$("#navbar").removeClass("active");

        }else{
             $('#change').removeClass("fa-bars").addClass("fa-times");
$("#navbar").addClass("active");
        }


    }





