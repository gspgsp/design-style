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


  /*
  * 动态切换提示信息
  * */
  $('.pop-hint-raw').click(function () {
    $(this).removeClass('pop-hint-active');
    $('.password-c-i-r').focus();
  });


  /*
  * amaze-UI + croper图片上传
  * */
  'use strict';
  //初始化
  var $image = $('#up-img-show');
  var up_img_alert = $('#up-img-alert');

  if ($image.length <= 0) {
    return false;
  }
  $image.cropper({
    aspectRatio: '1',
    autoCropArea:0.8,
    preview: '.img-after-show',
    responsive:true
  });

  $('.camera-img-wrap').click(function () {
    $('#doc-modal-img').modal({});
  });

  var $inputImage = $('.up-img-file');
  var URL = window.URL || window.webkitURL;
  var blobURL;

  if (URL) {
    $inputImage.change(function () {

      var files = this.files;
      var file;

      if (files && files.length) {
        file = files[0];

        if (/^image\/\w+$/.test(file.type)) {
          blobURL = URL.createObjectURL(file);
          $image.one('built.cropper', function () {
            // Revoke when load complete
            URL.revokeObjectURL(blobURL);
          }).cropper('reset').cropper('replace', blobURL);
          $inputImage.val('');
        } else {
          set_am_alert_info('请选择以png、jpg、jpeg等为后缀的图片...');
          up_img_alert.modal();
        }
      }
    });
  } else {
    $inputImage.prop('disabled', true).parent().addClass('disabled');
  }

  $('.up-img-a-s').on('click',function(){
    var img_src = $image.attr("src");

    var up_img_loading = $('#up-img-loading');

    if(img_src == ""){
      set_am_alert_info('请选择要修改的图片...');
      up_img_alert.modal();
      return false;
    }

    up_img_loading.modal();

    //ajax
    var url = $(this).attr('url'), parameter = $(this).attr('parameter');
    var p_json = eval('('+parameter+')');
    var width = p_json.width, height = p_json.height;

    //控制裁剪图片的大小
    var canvas=$image.cropper('getCroppedCanvas',{width: width,height: height});
    var data=canvas.toDataURL('image/jpeg').toString(); //转成base64

    $.ajax({
      type:'post',
      url:url,
      data:{'img_url':data},
      success: function () {
        // up_img_loading.modal('close');
        console.log('success');
      },
      error: function () {
        // up_img_loading.modal('close');
        console.log('fail');
      }
    })
  });
  
  $('.up-img-a-l').click(function () {
    if($image.attr("src").length > 0){
      $image.cropper('rotate', -90);
    }
  });
  $('.up-img-a-r').click(function () {
    if($image.attr("src").length > 0){
      $image.cropper('rotate', 90);
    }
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

/**
 * 修改提示消息
 * @param content
 */
function set_am_alert_info(content){
  $(".up_img_alert_content").html(content);
}