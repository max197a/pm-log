$(document).ready(function() {

    function focusToggler() {
        var inputs = document.querySelectorAll('.inputfile');
        Array.prototype.forEach.call(inputs, function(input) {
            var label = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener('change', function(e) {
                var fileName = '';
                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else
                    fileName = e.target.value.split('\\').pop();

                if (fileName)
                    label.querySelector('span').innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });

            // Firefox bug fix
            input.addEventListener('focus', function() {
                input.classList.add('has-focus');
            });
            input.addEventListener('blur', function() {
                input.classList.remove('has-focus');
            });
        });
    }

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });


    $('.our-customers__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nav: true
    });

    $('.reviews-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        nav: true,
        loop: true,
        draggable: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
    });

    $('.transport__carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nav: false,
        dots: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    nav: false,
                    loop: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    nav: false,
                    loop: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    nav: false,
                    loop: false,
                    dots: true,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.bus-head-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.bus-body-left'
    });
    $('.bus-body-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.bus-head-left',
        dots: false,
        fade: true,
        draggable: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.bus-head-right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.bus-body-right'
    });
    $('.bus-body-right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.bus-head-right',
        dots: false,
        fade: true,
        draggable: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });


    $(document).on('click', 'close-popup', function() {
        $.magnificPopup.close();
    });

    $(document).on('click', '.offices__map-button', function(e) {
        e.preventDefault();
        $(this).parent('.offices__tab-buttons').find('.offices__button').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent('.offices__head').find('.offices__tab').fadeOut(0);
        $(this).parent().parent('.offices__head').find('.offices__map').fadeIn(250);
    });

    $(document).on('click', '.offices__image-button', function(e) {
        e.preventDefault();
        $(this).parent('.offices__tab-buttons').find('.offices__button').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent('.offices__head').find('.offices__tab').fadeOut(0);
        $(this).parent().parent('.offices__head').find('.offices__image').fadeIn(250);
    });

    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $.each($(".form-validation"), function() {
        $(this).validate({
            rules: {
                field: {
                    required: true
                }
            }
        });
        $(this).on('submit', function() {
            var action = $(this).attr('action');

            if (!$(this).find('input.error').length) {
                $.post(action, $(this).serialize(), function() {
                    // $.magnificPopup.close();
                    var $thanksModal = $('#thankPopup')[0].outerHTML.replace('mfp-hide', '')
                    $.magnificPopup.open({
                        items: {
                            src: $thanksModal
                        },
                        type: 'inline'
                    });
                })
            }
        })
    })

    $("input[name=phone]").mask("(999) 999-99-99");

});