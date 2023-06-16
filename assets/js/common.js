$(document).ready(function() {
  $('.s-main__slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    prevArrow: '<button class="s-main__slider-btn"><img src="assets/img/arrows/slider-up.svg" alt=""/></button>',
    nextArrow: '<button class="s-main__slider-btn"><img src="assets/img/arrows/slider-down.svg" alt=""/></button>'
  });

  $('#s-main__btn').click(function() {
    vex.dialog.open({
      message: 'Обратная связь',
      input: [
        ${''},
        '<input name="email" type="email" placeholder="Как к Вам обращаться?" required />',
        '<textarea placeholder="Password" required /></textarea>'
      ].join(''),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
        $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
      ],
      callback: function (data) {
        if (!data) {
          console.log('Cancelled')
        } else {
          console.log('Username', data.username, 'Password', data.password)
        }
      }
    })
  })
})