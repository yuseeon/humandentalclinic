

$(function(){

    // //slider
    // let num = 0;

    // function changeSlider (img_num){
    //     let img_width = 1920 * img_num;

    //     $('.slider .sliders').css({transform: `translateX(${-img_width}px)`
    //     })//slider
    // }

    // //자동 재생
    // setInterval(function(){
    //     num++;
    //     if(num > 2) {num = 0;}
    //     changeSlider(num);
    // }, 3000)
});


$(document).ready(function(){
    const swiper = new Swiper('#main-visual .swiper', {
  
        autoplay: {
          delay: 3000,
        },
        
        direction: 'horizontal',  // 효과
        loop: true,
        
      // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    
      });
})


$(document).ready(function(){
  const swiper = new Swiper('#main-visual-mobile .swiper-container', {

      autoplay: {
        delay: 3000,
      },
      
      direction: 'horizontal',  // 효과
      loop: true,
      
    // If we need pagination
      pagination: {
          el: '.swiper-pagination',
      },

  
    });
})

// 이미지 및 콘텐츠 로딩 체크
window.onload = function() {
    // AOS 초기화
    AOS.init();
}

let vw = document.documentElement.clientWidth;
if( vw > 768){
$(function(){
  $(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();
    console.log(scrollPosition);
    if( scrollPosition >= 600 ){
      $('#fixed-menu').stop().fadeIn();
    } else {
      $('#fixed-menu').stop().fadeOut();
    }
  });
});
}