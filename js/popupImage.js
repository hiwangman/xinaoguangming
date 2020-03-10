$.fn.popupImage = function (obj) {
    var $this = obj.this;
    var sj_w = $this[0].naturalHeight;
    var src = $this.attr('imgSrc');
    var h = $(window).height();
    var w = $(window).width();
    var padding = 10;
    var shadeW = obj.width || w - padding*2;
    var img = '',shade = '';
    
    img = '<div class="popup-image" style="position:fixed; top:0; left:0; z-index: 9999; padding:10px '+padding+'px; width: '+w+'px; height:'+h+'px; line-height: '+h+'px; text-align: center;" >' +
        '<img src="'+src+'" style="width: '+shadeW+'px; vertical-align: middle;"/></div>';
    shade = '<div class="shade" style="position:fixed; top:0; left:0;  width: '+w+'px; height:'+h+'px;background: #000; z-index: 9990; opacity: .8;"></div>';

    $('body').append(shade);
    $('body').append(img);        

    $('.popup-image').on('click',function () {
        $('.popup-image').remove();
        $('body').removeClass('open-menu')
        $('.shade').remove();
    })

};