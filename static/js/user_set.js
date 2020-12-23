;$(function () {
  $('.email-bind').click(function () {
    letDomCenter('.email-bind-verify');
    $('.user-set-shadow').show();
  });

  $('.bind-btn-n').click(function () {
    $('.email-bind-verify').hide();
    $('.user-set-shadow').hide();
  });

  $('.bind-htn-y').click(function () {
    $('.email-bind-verify').hide();
    letDomCenter('.email-bind-show');
  });

  $('.email-bind-close').click(function () {
    $('.email-bind-verify').hide();
    $('.email-bind-show').hide();
    $('.user-set-shadow').hide();
  });

  $('.email-bind-y').click(function () {
    //TODO::保存数据库操作

    $('.email-bind-show').hide();
    $('.user-set-shadow').hide();
  });

  $('.email-bind-n').click(function () {
    $('.email-bind-show').hide();
    $('.user-set-shadow').hide();
  });

  $('.password-change').click(function () {
    letDomCenter('.password-c-wrap');
    $('.user-set-shadow').show();
  });

  $('.password-c-y').click(function () {
    //TODO::保存数据库操作
    $('.password-c-wrap').hide();
    $('.user-set-shadow').hide();
  });
  $('.password-c-close, .password-c-n').click(function () {
    $('.password-c-wrap').hide();
    $('.user-set-shadow').hide();
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