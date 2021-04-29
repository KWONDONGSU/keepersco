$(function () {
  $(".vertical-center").slick({
    dots: false,
    arrows: false,
    vertical: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
  });
  $("#sec3 .regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  $("#sec4 .regular").slick({
    dots: false ,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 1000,
  });
});
