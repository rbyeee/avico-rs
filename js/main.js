$(document).ready(function () {

    $('.header-bottom__item_light').click(function () {
        $('.hamb1').toggleClass('is-active');
    });

    $('.brands-trigger').click(function () {
        $('.header-link-window').toggleClass('active');
    });

    $('.header-bottom__item').click(function () {
        $('.link-act').toggleClass('active');
    });

    $('.catalog-link').click(function () {
        $('.hamb').toggleClass('is-active');
    });


    $('#menu_checkbox').change(function (e) {
        
        $('.mobile-menu_close').stop().slideToggle();
    });
    $('.select-card').select2({
        placeholder: 'Select an Industry',
        allowClear: false,
        tags: true,
        maximumSelectionLength: 5
    });

    $('.js-example-basic-single').select2({
        minimumResultsForSearch: -1
    });

    $('.js-example-basic').select2({
        minimumResultsForSearch: -1
    });

    $('.toogler-trigger').click(function (e) {
        e.preventDefault();
        $(this).closest('.toogler').find('.toogler__content').stop().slideToggle();
    })

    $('.toogler-triggers').click(function (e) {
        e.preventDefault();
        $(this).closest('.tooglers').find('.tooglers__content').stop().slideToggle();
    })

    $('.toogler-triggers_line').click(function (e) {
        e.preventDefault();
        $(this).closest('.toogler-lines').find('.tooglers__content_line').stop().slideToggle();
        $('.goods__content .slick-slider').slick('setPosition');
    })

    $('.table_reletive').click(function () {
        $(this).closest('.basket_border_top').toggleClass('border-top_red');
    });


    $('.mobile-menu_red').click(function () {
        $(this).find('.mobile-menu__middle_right').toggleClass('is-active');
    });

    $('.button_red').click(function () {
        $('.header-window__circle').toggleClass('active');
    });
    

    $('.aside-dropdown__box ').click(function () {
        $(this).closest('.aside-header__left').toggleClass('active');
    });

    $('.aside-dropdown__box_header').click(function(){
        $(this).find('.aside-header__left').toggleClass('active-arrow_b')
    })

    $('.card-content__subtitle_red').click(function () {
        $(this).closest('.card-content__subtitle_red').toggleClass('active-sub');
    });



    $('.goods_b').click(function () {
        $(this).find('.card-content__subtitle_red').toggleClass('active-search');
    });

    $('.mobile-menu__middle_link').click(function () {
        $(this).closest(".mobile_arrow_dark").toggleClass('active');
    });

      $('.mobile-menu__middle_link').click(function () {
        $(this).closest(".mobile_arrow_dark").toggleClass('active-text');
    });

    $('.active_transparent').click(function () {
        $(this).toggleClass('goods__lines_red');
    });

    $('.index-slider').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })

    $('.hits-slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            }]
    });

    $('.card-slider').slick({
        slidesToShow: 1,
        fade: true,
        asNavFor: '.card-slider_nav',
        arrows: false,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    arrows: true,
                    prevArrow: "<div class='about_prev'></div>",
                    nextArrow: "<div class='about_next'></div>"
                }
            }
        ]
    })

    $('.card-slider_nav').slick({
        focusOnSelect: true,
        slidesToShow: 3,
        asNavFor: '.card-slider',
        vertical: true,
        prevArrow: "<div class='about_prev'></div>",
        nextArrow: "<div class='about_next'></div>",
    })
     $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-navs'
    });
    $('.slider-navs').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      focusOnSelect: true,
    prevArrow: "<div class='about_prev popup_nav_l'></div>",
    nextArrow: "<div class='about_next popup_nav_r'></div>",
    });

    $('.goods-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000
    })

    $('.about-slider').slick({
        slidesToShow: 3,
        prevArrow: "<div class='about_prev'></div>",
        nextArrow: "<div class='about_next'></div>",
    })

    $('.big-slider-nav__btn').click(function () {
        $(this).closest('.slick-slider').slick('slickGoTo', $(this).index())
    });
    $('.product-slider').slick({
        slidesToShow: 4
    });

    $('.select-cabinet select').select2({
        width: '100%',
        minimumResultsForSearch: Infinity
    });

    $('.custom-select select').select2({
        width: '100%',
        minimumResultsForSearch: Infinity
    });

    $('.select-order select').select2({
        width: '100%',
        minimumResultsForSearch: Infinity
    });
    $('.select-loop select').select2({
        width: '100%',
        minimumResultsForSearch: Infinity
    });
    $('.match-height').matchHeight();
    $('.toggler-header').click(function () {
        $(this).next('.toggler-content').stop().slideToggle();
        $(this).toggleClass('active');
    });

    $('.sphere-slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            }]
    });

    $('.goods-slider_catalog').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }]
    })

    $('.header-window__link').hover(function () {
        $('.header-window__link').removeClass('active');
        $(this).addClass('active');
        $('.header-window__tab').removeClass('active');
        $('.header-window__tab').eq($(this).index()).addClass('active');
    });
    $('.catalog-link-js').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-window').toggleClass('active');
    });
    $('.section-title__text-js').click(function (e) {
        e.preventDefault();
        $('.brands-widget').toggleClass('active');
    });
    
    $('.header-link-window__link').hover(function () {
        $('.header-link-window__link').removeClass('active');
        $(this).addClass('active');
        var category = $(this).data('cat');
        $('.brands-widget__item').removeClass('active');
        $('.brands-widget__item').each(function(){
            if($(this).data('brand')==category){
                $(this).addClass('active');
            }
        });
    });
    
    $('.brands-widget__item').hover(function(){
        $('.brands-widget__item').removeClass('active');
        $(this).addClass('active');
        var brand = $(this).data('brand');
        $('.header-link-window__link').removeClass('active');
        $('.header-link-window__link').each(function(){
            if($(this).data('cat')==brand){
                $(this).addClass('active');
            }
        });
    })

    // $('.brands-trigger').click(function () {
    //     $('.header-link-window').addClass('active');
    //     $(this).addClass('active');
    // });


    // $('.brands-trigger').click(function () {
    //     $('.header-link-window').removeClass('active');
    //     $(this).removeClass('active');
    // });
    // $('.brands-trigger').click(function () {
    //     $('.header-link-window').removeClass('active');
    //     $('.brands-trigger').removeClass('active');
    // });
    // $('.header-bottom-wrapper').click(function () {
    //     $('.header-link-window').removeClass('active');
    //     $('.brands-trigger').removeClass('active');
    // })

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".header-bottom"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.header-window').removeClass('active');
            $('.catalog-link').removeClass('active');
        }
    });
    $('.chekk').click(
        function () {
            $(this).find(":checkbox").attr("checked", "checked");//выделение всех чекбоксов на кликнутом контейнере, снять выделение через removeAttr("checked")

        });

    $('.tabs__title_list li').not('.active').click(function () {
        var index = $(this).index();
        var content = $('.tabs__content li').eq(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs__content  li').css('display', 'none').eq(index).css('display', 'block');
    })

    $('.tabs__title_list li:first').addClass('active');
    $('.tabs__content li:first').css('display', 'block');

    $(".minus").click(function () {
        much = +$(this).closest(".quantity").find("input").val();
        result = much - 1;
        if (result < 1) {
            result = 1;
        }
        $(this).closest(".quantity").find("input").val(result);
        updatePrice();
        return true;
    });
    $(".plus").click(function () {
        much = +$(this).closest(".quantity").find("input").val();
        result = much + 1;
        $(this).closest(".quantity").find("input").val(result);
        updatePrice();
        return true;
    });

    $('.js-popup').click(function (e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: $('#test-popup'),
            },
            type: 'inline',
            midClick: true,
            callbacks: {
                open: function () {
                    $('#test-popup .slick-slider').slick('setPosition');
                },
            },

        });
    })
})

var btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
});