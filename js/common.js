$('.icon-menu').on('click', function () { 
  $('.icon-menu').toggleClass(function(index, oldClassNames){
    return 'actived'
  })
  $('body').toggleClass('open-menu')
  $('.vertical-navlist').toggleClass(function(index, oldClassNames){
    var classes = ''
    var classNames = oldClassNames.split(' ');
    if (classNames.includes('show')) {
      $(this).removeClass('show')
      classes = 'hide'
    } else {
      $(this).removeClass('hide')
      classes = 'show'
    }
    return classes
  })
})

$('.scrolled-icon-menu').on('click', function () { 
  $('body').toggleClass('open-menu')
  $('.vertical-navlist').toggleClass(function(index, oldClassNames){
    var classes = ''
    var classNames = oldClassNames.split(' ');
    if (classNames.includes('show')) {
      $('.bottom-navlist').removeClass('hide')
      $('.bottom-navlist').addClass('show')
      $(this).removeClass('show')
      classes = 'hide'
    } else {
      $('.bottom-navlist').removeClass('show')
      $('.bottom-navlist').addClass('hide')
      $(this).removeClass('hide')
      classes = 'show'
    }
    return classes
  })
})

$(window).on('scroll', function () { 
  if ($('html').scrollTop() > 100) {
    $('.scrolled-icon-menu').show()
    $('.bottom-navlist').show()
    $('.vertical-navlist').addClass('full')
  } else {
    $('.scrolled-icon-menu').hide()
    $('.bottom-navlist').hide()
    $('.vertical-navlist').removeClass('full')
  }
})