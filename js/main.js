




// .toggleClass('header-fixed_burger--current')

$(function(){


  $('.header-burger').on('click',function(){
    $('.header-fixed_burger').slideToggle(500,'linear');
  $('.header-burger').toggleClass('header-burger_cross')
  })
  
  $('.header-burger').on('click',function(){
    $('html').toggleClass('lock');
  })


  

  $('.doctor__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slider-left_arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slider-right_arrow.svg" alt=""></button>',
    dots:true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.certificate__slider').slick({
    speed: 500,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slider-left_arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slider-right_arrow.svg" alt=""></button>',
});


$('.rewiews__slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
    speed: 500,
    dots:true,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slider-left_arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slider-right_arrow.svg" alt=""></button>',
});





$('.the-news__slider').slick({
    speed: 500,
    dots:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slider-left_arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slider-right_arrow.svg" alt=""></button>',
});




$("#phone").mask("+7(999) 999-9999");
$("#phone2").mask("+7(999) 999-9999");




$(window).scroll(function(){
    if($(this).scrollTop() > 1200) {
        $('.scroll-page_btn').fadeIn();
    } else {
        $('.scroll-page_btn').fadeOut();
    }
});


$("a[href^='#header']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});


let acc = document.querySelectorAll('.accordion');

acc.forEach(item => {
    item.addEventListener('click', e => {
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
      return;
    }
    acc.forEach(e=>e.classList.remove('active'));
    e.target.classList.add('active');
  });
});


   

});




