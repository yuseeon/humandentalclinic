// 2단 메뉴 슬라이드
$(function () {
    $('header nav .depth1 li').hover(
        function () {
            $(this).find('.depth2').addClass('on');
        },
        function () {
            $(this).find('.depth2').removeClass('on');
        });
  });

//   gnb toggle
  $(function(){
    $('.gnb-toggle').click(function(){
        // $('#gnb').css('display','block');
        $('#gnb').slideDown();
    });
    $('.gnb-close').click(function(){
        // $('#gnb').css('display','none');
        $('#gnb').slideUp();
    });



// info 
    $('#info .info_container .tab_doctor').click(function () {
        $('#info .info_container .tab_doctor').addClass('on');
        $('#info .info_container .tab_clinic').removeClass('on');
    });
    $('#info .info_container .tab_clinic').click(function () {
        $('#info .info_container .tab_doctor').removeClass('on');
        $('#info .info_container .tab_clinic').addClass('on');
    });




  });


//  info scrollclinic()
function scrollclinic() {
    window.scrollTo(0, 500);
}


function scrolldoctor() {
    window.scrollTo(0, 1300);
}