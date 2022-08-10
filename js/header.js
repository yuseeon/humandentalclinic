
$(function () {
    $('header nav .depth1 li').hover(
        function () {
            $(this).find('.depth2').addClass('on');
        },
        function () {
            $(this).find('.depth2').removeClass('on');
        });
  });