$(document).ready(function() {
  $('.s-main__slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '20px',
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="s-main__slider-btn s-main__slider-btn--left"><img src="assets/img/arrows/slider-up.svg" alt=""/></button>',
    nextArrow: '<button class="s-main__slider-btn s-main__slider-btn--right"><img src="assets/img/arrows/slider-down.svg" alt=""/></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          prevArrow: '<button class="s-main__slider-btn s-main__slider-btn--left"><img src="assets/img/arrows/slider-left-wh.svg" alt=""/></button>',
          nextArrow: '<button class="s-main__slider-btn s-main__slider-btn--right"><img src="assets/img/arrows/slider-right-wh.svg" alt=""/></button>',
        }
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        }
      }
    ]
  });

  let resize = () => {
    if ($(window).width() >= 1400) {
      $('.s-main').css('padding-right', $('.right-line').width())
      $('.s-main').css('padding-left', $('.right-line').width())
    } else {
      $('.s-main').css('padding-right', '')
      $('.s-main').css('padding-left', '')
    }
  }

  $(window).resize(resize)

  $('#hamburger__main').click(function() {
    $('.menu-wrapper').toggleClass('active');
    $('.overlay').toggleClass('active');
  })

  $('#hamburger__main').hover(function() {
    $(this).addClass('is-active');
  }, function () {
    $(this).removeClass('is-active');
  },)

  $('#menu-wrapper__close-button').click(function() {
    $('.menu-wrapper').removeClass('active');
    $('#hamburger__main').removeClass('is-active');
    $('.overlay').removeClass('active');
  })
 
  $('#s-main__btn').click(function() {
    vex.dialog.open({
      message: 'Обратная связь',
      input: [
        `<input name="email" type="email" placeholder="Как к Вам обращаться?" required />
        <textarea class="s-main__textarea" placeholder="Сообщение" required /></textarea>`
      ].join(''),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: 'Отправить' }),
        // $.extend({}, vex.dialog.buttons.NO, { text: 'Назад' })
      ],
      callback: function (data) {
        // if (!data) {
        //   console.log('Cancelled')
        // } else {
        //   console.log('Username', data.username, 'Password', data.password)
        // }
      }
    })
  })
})