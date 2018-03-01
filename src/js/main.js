$(document).ready(function(){




    if ( $('.news-page').hasClass("edit-header") ) {
        $('header').addClass('header-dark--editable');
    }

    var myElement = document.getElementsByClassName("how-order");

    var elementWatcher = scrollMonitor.create( myElement );

    elementWatcher.enterViewport(function() {
        $(myElement).find('.transport__list-item').addClass('is-active');
    });
    elementWatcher.exitViewport(function() {
        $(myElement).find('.transport__list-item').removeClass('is-active');
    });

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);

  var easingSwing = [.02, .01, .47, 1]; // default jQuery easing for anime.js

  ////////////
  // READY - triggered when PJAX DONE
  ////////////
  function pageReady(){
    legacySupport();
    initHeaderScroll();

    initPopups();
    initSliders();
    // initScrollMonitor();
    initMasks();
    // initLazyLoad();

    // development helper
    _window.on('resize', debounce(setBreakpoint, 200))

  }

  // this is a master function which should have all functionality
  pageReady();


  // some plugins work best with onload triggers
  _window.on('load', function(){
    // BEGIN count numbers

    $('.stats-grid__number').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).data('number').toString().replace(' ', '')
      }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
        }
      });
    });

    setTimeout(function() {
      $('.stats-grid__info.animated').addClass('fadeIn');
    }, 4000)
    // END count numbers

  })


  //////////
  // COMMON
  //////////

  function legacySupport(){
    // svg support for laggy browsers
    svg4everybody();

    // Viewport units buggyfill
    window.viewportUnitsBuggyfill.init({
      force: false,
      refreshDebounceWait: 150,
      appendToBody: true
    });
  }


  // Prevent # behavior
	_document
    .on('click', '[href="#"]', function(e) {
  		e.preventDefault();
  	})
    .on('click', 'a.scroll', function() { // section scroll
      var el = $(this).attr('href');
      $('body, html').animate({
          scrollTop: $(el).offset().top}, 1000);
      return false;
    })





  // HEADER SCROLL
  // add .header-static for .page or body
  // to disable sticky header
  function initHeaderScroll(){
    _window.on('scroll', throttle(function(e) {
      // var vScroll = _window.scrollTop();
      // var header = $('.header').not('.header--static');
      // var headerHeight = header.height();
      // var firstSection = _document.find('.page__content div:first-child()').height() - headerHeight;
      // var visibleWhen = Math.round(_document.height() / _window.height()) >  2.5
      //
      // if (visibleWhen){
      //   if ( vScroll > headerHeight ){
      //     header.addClass('is-fixed');
      //   } else {
      //     header.removeClass('is-fixed');
      //   }
      //   if ( vScroll > firstSection ){
      //     header.addClass('is-fixed-visible');
      //   } else {
      //     header.removeClass('is-fixed-visible');
      //   }
      // }

      if ($(window).scrollTop() > 1) {
        $('header').addClass('fixed');
      } else {
        $('header').removeClass('fixed');
      }

    }, 10));

  }

  // HAMBURGER TOGGLER
  _document.on('click', '[js-hamburger]', function(){
    $(this).toggleClass('is-active');
    $('.mobile-navi').toggleClass('is-active');
  });

  function closeMobileMenu(){
    $('[js-hamburger]').removeClass('is-active');
    $('.mobile-navi').removeClass('is-active');
  }

  // BEGIN Button events
  _document
    .on('click', '.close-popup', function() {
      $.magnificPopup.close();
    })
    .on('click', '.hamburger', function() {
      $(this).toggleClass('is-active');
      $('.header__list').toggleClass('is-open');
      // $('.header__list-menu').toggleClass('is-open');
    })
    .on('click', '.open-dropdown-menu', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(this).parent().toggleClass('open-menu');
    })
    .on('click', '.offices__map-button', function(e) {
      e.preventDefault();
      $(this).parent('.offices__tab-buttons').find('.offices__button').removeClass('active');
      $(this).addClass('active');
      $(this).parent().parent('.offices__head').find('.offices__tab').fadeOut(0);
      $(this).parent().parent('.offices__head').find('.offices__map').fadeIn(250);
    })
    .on('click', '.offices__image-button', function(e) {
      e.preventDefault();
      $(this).parent('.offices__tab-buttons').find('.offices__button').removeClass('active');
      $(this).addClass('active');
      $(this).parent().parent('.offices__head').find('.offices__tab').fadeOut(0);
      $(this).parent().parent('.offices__head').find('.offices__image').fadeIn(250);
    })


  //////////
  // SLIDERS
  //////////

  function initSliders(){

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
            slidesToScroll: 1,
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
            slidesToScroll: 1,
            dots: true
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
      ]
    });

    $('.bus-head-left').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false
    });

    $('.bus-grid__carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false
    });
  }

  //////////
  // MODALS
  //////////


  function initPopups(){
    $('.open-popup-link').magnificPopup({
      type: 'inline',
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-fade',
      callbacks: {
        beforeOpen: function() {
           this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
    });


(function(){
  var itemsSourceArray = [];
  $.each($('.reviews-carousel').find('a[data-mfp]'), function() {
    itemsSourceArray.push({src: $(this).data('mfp')})
  });
  //
    $('.reviews-carousel a').magnificPopup({
      type: 'image',
      items: itemsSourceArray,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
    });
}())

    // // Magnific Popup
    // var startWindowScroll = 0;
    // $('[js-popup]').magnificPopup({
    //   type: 'inline',
    //   fixedContentPos: true,
    //   fixedBgPos: true,
    //   overflowY: 'auto',
    //   closeBtnInside: true,
    //   preloader: false,
    //   midClick: true,
    //   removalDelay: 300,
    //   mainClass: 'popup-buble',
    //   callbacks: {
    //     beforeOpen: function() {
    //       startWindowScroll = _window.scrollTop();
    //       // $('html').addClass('mfp-helper');
    //     },
    //     close: function() {
    //       // $('html').removeClass('mfp-helper');
    //       _window.scrollTop(startWindowScroll);
    //     }
    //   }
    // });
    //
    // $('[js-popup-gallery]').magnificPopup({
  	// 	delegate: 'a',
  	// 	type: 'image',
  	// 	tLoading: 'Загрузка #%curr%...',
  	// 	mainClass: 'popup-buble',
  	// 	gallery: {
  	// 		enabled: true,
  	// 		navigateByImgClick: true,
  	// 		preload: [0,1]
  	// 	},
  	// 	image: {
  	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  	// 	}
  	// });
  }

  function closeMfp(){
    $.magnificPopup.close();
  }

  ////////////
  // UI
  ////////////

  // BEGIN input[type=file]

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

  // textarea autoExpand
  _document
    .one('focus.autoExpand', '.ui-group textarea', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', '.ui-group textarea', function(){
        var minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
        this.rows = minRows + rows;
    });

  // Masked input
  function initMasks(){
    $("[js-dateMask]").mask("99.99.99",{placeholder:"ДД.ММ.ГГ"});
    $("input[name='phone']").mask("(999) 999-9999");
  }


  ////////////
  // SCROLLMONITOR - WOW LIKE
  ////////////
  function initScrollMonitor(){
    $('.wow').each(function(i, el){

      var elWatcher = scrollMonitor.create( $(el) );

      var delay;
      if ( $(window).width() < 768 ){
        delay = 0
      } else {
        delay = $(el).data('animation-delay');
      }

      var animationClass = $(el).data('animation-class') || "wowFadeUp"

      var animationName = $(el).data('animation-name') || "wowFade"

      elWatcher.enterViewport(throttle(function() {
        $(el).addClass(animationClass);
        $(el).css({
          'animation-name': animationName,
          'animation-delay': delay,
          'visibility': 'visible'
        });
      }, 100, {
        'leading': true
      }));
      elWatcher.exitViewport(throttle(function() {
        $(el).removeClass(animationClass);
        $(el).css({
          'animation-name': 'none',
          'animation-delay': 0,
          'visibility': 'hidden'
        });
      }, 100));
    });

  }


  //////////
  // LAZY LOAD
  //////////
  function initLazyLoad(){
    _document.find('[js-lazy]').Lazy({
      threshold: 500,
      enableThrottle: true,
      throttle: 100,
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      effectTime: 350,
      // visibleOnly: true,
      // placeholder: "data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7...",
      onError: function(element) {
          console.log('error loading ' + element.data('src'));
      },
      beforeLoad: function(element){
        // element.attr('style', '')
      }
    });
  }

  //////////
  // BARBA PJAX
  //////////

  Barba.Pjax.Dom.containerClass = "page";

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },
    fadeOut: function() {
      var deferred = Barba.Utils.deferred();

      anime({
        targets: this.oldContainer,
        opacity : .5,
        easing: easingSwing, // swing
        duration: 300,
        complete: function(anim){
          deferred.resolve();
        }
      })

      return deferred.promise
    },

    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : .5
      });

      anime({
        targets: "html, body",
        scrollTop: 0,
        easing: easingSwing, // swing
        duration: 150
      });

      anime({
        targets: this.newContainer,
        opacity: 1,
        easing: easingSwing, // swing
        duration: 300,
        complete: function(anim) {
          triggerBody()
          _this.done();
        }
      });
    }
  });

  // set barba transition
  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };

  Barba.Prefetch.init();
  Barba.Pjax.start();

  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {

    pageReady();
    closeMobileMenu();

  });
  // some plugins get bindings onNewPage only that way
  function triggerBody(){
    $(window).scroll();
    $(window).resize();
  }

  //////////
  // DEVELOPMENT HELPER
  //////////
  function setBreakpoint(){
    var wHost = window.location.host.toLowerCase()
    var displayCondition = wHost.indexOf("localhost") >= 0 || wHost.indexOf("surge") >= 0
    if (displayCondition){
      console.log(displayCondition)
      var wWidth = _window.width();

      var content = "<div class='dev-bp-debug'>"+wWidth+"</div>";

      $('.page').append(content);
      setTimeout(function(){
        $('.dev-bp-debug').fadeOut();
      },1000);
      setTimeout(function(){
        $('.dev-bp-debug').remove();
      },1500)
    }
  }

});



$(document).ready(function() {

  // Form validation
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

      if ( $('#personal-info-error').hasClass("error") ) {
          $('.checkmark').addClass('error');
      }

      if ( $('#personal-info-error').hasClass("error valid") ) {
          $('.checkmark').removeClass('error');
      }

      if (!$(this).find('input.error').length) {
        $(this).removeClass('no-valid');
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
      } else {
        $(this).addClass('no-valid')
      }
    })
  })

  $(document).on('click', '.container-checkbox', function(){
      var $self = $(this)
          $form = $self.parents('form');
      if ( $("input[name='personal-info']").is(':checked')) {
          $('.checkmark').removeClass('error');
      } else {
        if ($form.hasClass('no-valid')) $('.checkmark').addClass('error');
      }
    });

});
