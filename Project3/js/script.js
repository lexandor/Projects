(function($) {
$(function() {

  $('ul.fich_controller').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('displayed').siblings().removeClass('displayed')
          .closest('div.fich').find('div.fich_tablet').removeClass('displayed').eq(i).addClass('displayed');
      });
    });
  });

})
})(jQuery);
