$(function () {
  if ($('.search-box').length > 0) {

    var req_url = '#';

    //防止事件冒泡，因为会和body点击冲突
    $('.search-box').click(function (event) {
      event.stopPropagation();
    });

    $('.search-nav-icon').click(function () {
      var keyword = $('.search-h-ip').val();

      if (keyword.length > 0) {
        location.href = req_url + '?keyword=' + keyword;
        $('.search-h-ip').val('');
      } else {
        $('.search-h-ip').show().focus();
        $('.search-box-hi').slideDown(250, function () {
          console.log(1111);
          //axios

        });
      }
    });

    $('body').click(function () {
      $('.search-h-ip').hide();
      $('.search-box-hi').hide();
      $('.search-box-lenovo').hide();
      $('.search-h-ip').val('');
    });

    $('.search-h-ip').on('keydown', function(event){
      var key_code = event.keyCode || event.which;
      if(key_code == '13'){
          event.preventDefault();

          var keyword = $(this).val();
          location.href = req_url + '?keyword=' + keyword;
          $(this).val('');
          console.log(222);
      }
    });

    $('.search-h-ip').bind('input propertychange', function () {
      $('search-box-lenovo').html('');
      var keyword = $('.search-h-ip').val();
      console.log(keyword);

      //axios
      var lenovo = '';
      $('.search-box-lenovo').append(lenovo).show();
      //
      $('.search-box-hi').hide();
    });

  }
})