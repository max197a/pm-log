$(document).ready(function(){$(".open-popup-link").magnificPopup({type:"inline",midClick:!0,removalDelay:300,mainClass:"mfp-fade"}),$(window).scroll(function(){$(window).scrollTop()>1?$("header").addClass("fixed"):$("header").removeClass("fixed")}),$(".our-customers__carousel").slick({slidesToShow:1,slidesToScroll:1,nav:!0}),$(".reviews-carousel").slick({slidesToShow:4,slidesToScroll:1,infinite:!0,nav:!0,loop:!0,draggable:!0,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".transport__carousel").slick({slidesToShow:4,slidesToScroll:1,nav:!1,dots:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,nav:!1,loop:!1,dots:!0}},{breakpoint:768,settings:{slidesToShow:2,nav:!1,loop:!1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,nav:!1,loop:!1,dots:!0,slidesToScroll:1}}]}),$(".bus-head-left").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,asNavFor:".bus-body-left"}),$(".bus-body-left").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".bus-head-left",dots:!1,fade:!0,draggable:!1,arrows:!1,centerMode:!0,focusOnSelect:!0}),$(".bus-head-right").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,asNavFor:".bus-body-right"}),$(".bus-body-right").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".bus-head-right",dots:!1,fade:!0,draggable:!1,arrows:!1,centerMode:!0,focusOnSelect:!0}),$(document).on("click",".close-popup",function(){$.magnificPopup.close()}),$(document).on("click",".hamburger",function(){$(this).toggleClass("is-active"),$(".header__list").toggleClass("is-open")}),$(document).on("click",".open-dropdown-menu",function(){$(this).toggleClass("is-active"),$(this).parent().toggleClass("open-menu")}),$(document).on("click",".offices__map-button",function(e){e.preventDefault(),$(this).parent(".offices__tab-buttons").find(".offices__button").removeClass("active"),$(this).addClass("active"),$(this).parent().parent(".offices__head").find(".offices__tab").fadeOut(0),$(this).parent().parent(".offices__head").find(".offices__map").fadeIn(250)}),$(document).on("click",".offices__image-button",function(e){e.preventDefault(),$(this).parent(".offices__tab-buttons").find(".offices__button").removeClass("active"),$(this).addClass("active"),$(this).parent().parent(".offices__head").find(".offices__tab").fadeOut(0),$(this).parent().parent(".offices__head").find(".offices__image").fadeIn(250)}),$.validator.setDefaults({debug:!0,success:"valid"}),$.each($(".form-validation"),function(){$(this).validate({rules:{field:{required:!0}}}),$(this).on("submit",function(){var e=$(this).attr("action");$(this).find("input.error").length||$.post(e,$(this).serialize(),function(){var e=$("#thankPopup")[0].outerHTML.replace("mfp-hide","");$.magnificPopup.open({items:{src:e},type:"inline"})})})}),$("input[name=phone]").mask("(999) 999-99-99")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwibWlkQ2xpY2siLCJyZW1vdmFsRGVsYXkiLCJtYWluQ2xhc3MiLCJ3aW5kb3ciLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm5hdiIsImluZmluaXRlIiwibG9vcCIsImRyYWdnYWJsZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiYXNOYXZGb3IiLCJmYWRlIiwiY2VudGVyTW9kZSIsImZvY3VzT25TZWxlY3QiLCJvbiIsImNsb3NlIiwidGhpcyIsInRvZ2dsZUNsYXNzIiwicGFyZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmluZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsImRlYnVnIiwic3VjY2VzcyIsImVhY2giLCJ2YWxpZGF0ZSIsInJ1bGVzIiwiZmllbGQiLCJyZXF1aXJlZCIsImFjdGlvbiIsImF0dHIiLCJsZW5ndGgiLCJwb3N0Iiwic2VyaWFsaXplIiwiJHRoYW5rc01vZGFsIiwib3V0ZXJIVE1MIiwicmVwbGFjZSIsIm9wZW4iLCJpdGVtcyIsInNyYyIsIm1hc2siXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBK0JkRixFQUFFLG9CQUFvQkcsZUFDbEJDLEtBQU0sU0FDTkMsVUFBVSxFQUNWQyxhQUFjLElBQ2RDLFVBQVcsYUFHZlAsRUFBRVEsUUFBUUMsT0FBTyxXQUNUVCxFQUFFUSxRQUFRRSxZQUFjLEVBQ3hCVixFQUFFLFVBQVVXLFNBQVMsU0FFckJYLEVBQUUsVUFBVVksWUFBWSxXQUtoQ1osRUFBRSw0QkFBNEJhLE9BQzFCQyxhQUFjLEVBQ2RDLGVBQWdCLEVBQ2hCQyxLQUFLLElB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QzdCbEQsRUFBRW1ELEtBQUtILEVBQVFoRCxFQUFFK0IsTUFBTXFCLFlBQWEsV0FFaEMsR0FBSUMsR0FBZXJELEVBQUUsZUFBZSxHQUFHc0QsVUFBVUMsUUFBUSxXQUFZLEdBQ3JFdkQsR0FBRUcsY0FBY3FELE1BQ1pDLE9BQ0lDLElBQUtMLEdBRVRqRCxLQUFNLGlCQU8xQkosRUFBRSxxQkFBcUIyRCxLQUFLIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gZm9jdXNUb2dnbGVyKCkge1xuICAgICAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0ZmlsZScpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGlucHV0cywgZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGlucHV0Lm5leHRFbGVtZW50U2libGluZyxcbiAgICAgICAgICAgICAgICBsYWJlbFZhbCA9IGxhYmVsLmlubmVySFRNTDtcblxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMSlcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUgPSAodGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgdGhpcy5maWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUgPSBlLnRhcmdldC52YWx1ZS5zcGxpdCgnXFxcXCcpLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpbGVOYW1lKVxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJIVE1MID0gZmlsZU5hbWU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBsYWJlbFZhbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBGaXJlZm94IGJ1ZyBmaXhcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaGFzLWZvY3VzJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtZm9jdXMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCcub3Blbi1wb3B1cC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICBtaWRDbGljazogdHJ1ZSxcbiAgICAgICAgcmVtb3ZhbERlbGF5OiAzMDAsXG4gICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJ1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDEpIHtcbiAgICAgICAgICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgJCgnLm91ci1jdXN0b21lcnNfX2Nhcm91c2VsJykuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBuYXY6IHRydWVcbiAgICB9KTtcblxuICAgICQoJy5yZXZpZXdzLWNhcm91c2VsJykuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH0pO1xuXG4gICAgJCgnLnRyYW5zcG9ydF9fY2Fyb3VzZWwnKS5zbGljayh7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICAkKCcuYnVzLWhlYWQtbGVmdCcpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXNOYXZGb3I6ICcuYnVzLWJvZHktbGVmdCdcbiAgICB9KTtcbiAgICAkKCcuYnVzLWJvZHktbGVmdCcpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXNOYXZGb3I6ICcuYnVzLWhlYWQtbGVmdCcsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAkKCcuYnVzLWhlYWQtcmlnaHQnKS5zbGljayh7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFzTmF2Rm9yOiAnLmJ1cy1ib2R5LXJpZ2h0J1xuICAgIH0pO1xuICAgICQoJy5idXMtYm9keS1yaWdodCcpLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgYXNOYXZGb3I6ICcuYnVzLWhlYWQtcmlnaHQnLFxuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZVxuICAgIH0pO1xuXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNsb3NlLXBvcHVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYW1idXJnZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICQoJy5oZWFkZXJfX2xpc3QnKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5vcGVuLWRyb3Bkb3duLW1lbnUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4tbWVudScpO1xuICAgIH0pO1xuXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm9mZmljZXNfX21hcC1idXR0b24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5vZmZpY2VzX190YWItYnV0dG9ucycpLmZpbmQoJy5vZmZpY2VzX19idXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnLm9mZmljZXNfX2hlYWQnKS5maW5kKCcub2ZmaWNlc19fdGFiJykuZmFkZU91dCgwKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoJy5vZmZpY2VzX19oZWFkJykuZmluZCgnLm9mZmljZXNfX21hcCcpLmZhZGVJbigyNTApO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5vZmZpY2VzX19pbWFnZS1idXR0b24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5vZmZpY2VzX190YWItYnV0dG9ucycpLmZpbmQoJy5vZmZpY2VzX19idXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnLm9mZmljZXNfX2hlYWQnKS5maW5kKCcub2ZmaWNlc19fdGFiJykuZmFkZU91dCgwKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoJy5vZmZpY2VzX19oZWFkJykuZmluZCgnLm9mZmljZXNfX2ltYWdlJykuZmFkZUluKDI1MCk7XG4gICAgfSk7XG5cbiAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG4gICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICBzdWNjZXNzOiBcInZhbGlkXCJcbiAgICB9KTtcblxuICAgICQuZWFjaCgkKFwiLmZvcm0tdmFsaWRhdGlvblwiKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykudmFsaWRhdGUoe1xuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQodGhpcykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICQodGhpcykuYXR0cignYWN0aW9uJyk7XG5cbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5maW5kKCdpbnB1dC5lcnJvcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQucG9zdChhY3Rpb24sICQodGhpcykuc2VyaWFsaXplKCksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGFua3NNb2RhbCA9ICQoJyN0aGFua1BvcHVwJylbMF0ub3V0ZXJIVE1MLnJlcGxhY2UoJ21mcC1oaWRlJywgJycpXG4gICAgICAgICAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5vcGVuKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiAkdGhhbmtzTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaW5saW5lJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAkKFwiaW5wdXRbbmFtZT1waG9uZV1cIikubWFzayhcIig5OTkpIDk5OS05OS05OVwiKTtcblxufSk7Il19
