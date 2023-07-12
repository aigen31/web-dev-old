$(document).ready(function() {
  setTimeout(() => {
    $("body").removeClass("preload");
  }, 1500)
  
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
        breakpoint: 1400,
        settings: {
          prevArrow: '<button class="s-main__slider-btn s-main__slider-btn--left"><img src="assets/img/arrows/slider-up-wh.svg" alt=""/></button>',
          nextArrow: '<button class="s-main__slider-btn s-main__slider-btn--right"><img src="assets/img/arrows/slider-down-wh.svg" alt=""/></button>',
        }
      },
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
          centerPadding: '180px',
          centerMode: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
        }
      }
    ]
  });

  $('.s-reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<button class="s-reviews__slider-btn s-reviews__slider-btn--left"><img src="assets/img/arrows/slider-left-wh.svg" alt=""/></button>',
    nextArrow: '<button class="s-reviews__slider-btn s-reviews__slider-btn--right"><img src="assets/img/arrows/slider-right-wh.svg" alt=""/></button>',
  })

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

  let tg = {
    token: "6128530085:AAGC61frZ33bvxqPujmEm5KpqZDkHGBS7c8", // Your bot's token that got from @BotFather
    chat_id: "-1001685543363" // The user's(that you want to send a message) telegram chat id
  }

  /**
   * By calling this function you can send message to a specific user()
   * @param {String} the text to send
   *
  */

  function sendMessage(text) {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

    const obj = {
      chat_id: tg.chat_id, // Telegram chat id
      text: text // The text to send
    };

    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));
  }

  $('.btn[data-event="modal"]').each(function() {
    $(this).click(function () {
      vex.dialog.open({
        message: 'Обратная связь',
        input: [
          `<input name="name" type="text" placeholder="Как к Вам обращаться?" required />
          <input name="tel" type="tel" placeholder="Номер телефона" required />
          <input name="email" type="email" placeholder="E-mail" />
          <textarea class="s-main__textarea" name="message" placeholder="Сообщение" required /></textarea>`
        ].join(''),
        buttons: [
          $.extend({}, vex.dialog.buttons.YES, { text: 'Отправить' }),
          // $.extend({}, vex.dialog.buttons.NO, { text: 'Назад' })
        ],
        callback: function (data) {
          if (!data) {
            console.log('Cancelled')
          } else {
            const message =
            `Заявка с evgenybil.site

Имя клиента: ${data.name}
Номер телефона ${data.tel}
Почта: ${data.email}
Сообщение: ${data.message}`

            sendMessage(message);
          }
        }
      })
    })
  })

  $('.s__close-button').click(function() {
    $(this).closest('.s').removeClass('active');

    $('.s-nav').removeClass('active');

    $('html').removeClass('hidden');
  })

  $('.accordion-item').each(function() {
    $(this).click(function() {
      if ($(this).hasClass('active')) {
        $(this).children('.s-faq__accordion-answer').slideUp(300);
        $(this).removeClass('active')
      } else {
        $(this).children('.s-faq__accordion-answer').slideDown(300);
        $(this).addClass('active')
      }
    })
  })

  $('.s-nav__item').click(function() {
    $('.s-nav__item').not($(this)).removeClass('active');
    $(this).addClass('active');
  })


  $('[data-element="window"]').click(function(e) {
    e.preventDefault();

    $('.s-nav').addClass('active');

    $('html').addClass('hidden');

    $('.menu-wrapper').removeClass('active');
    $('#hamburger__main').removeClass('is-active');
    $('.overlay').removeClass('active');

    $('.s-nav__item').not($(`.s-nav__item .link[href=${$(this).attr('href')}]`).closest('.s-nav__item')).removeClass('active');

    $(`.s-nav__item .link[href=${$(this).attr('href')}]`).closest('.s-nav__item').addClass('active');

    $(`[data-section]`).not($(`[data-section="${$(this).attr('href')}"]`)).removeClass('active');

    $(`[data-section="${$(this).attr('href')}"]`).addClass('active');
  })
})