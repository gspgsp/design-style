;$(function () {
  $('.email-bind').click(function () {
    letDomCenter('.email-bind-verify');
    $('.user-set-shadow').show();
  });
})

/**
 * 将制定dom居中,动态设定位置
 * @param domName
 */
function letDomCenter (domName) {
  var top = ($(window).height() - $(domName).height())/2, left = ($(window).width() - $(domName).width())/2;
  var scrollTop = $(document).scrollTop(), scrollLeft = $(document).scrollLeft();

  $(domName).css({position: 'absolute', 'top' : top + scrollTop, left: left + +scrollLeft}).show();
}