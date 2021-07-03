(self["webpackChunkelunduscore_landingspage"] = self["webpackChunkelunduscore_landingspage"] || []).push([[179],{

/***/ 126:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(755);


var WOW = __webpack_require__(541);

__webpack_require__(388);

$(function () {
  "use strict"; //===== Prealoder

  $('.preloader').delay(500).fadeOut(500); //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();

    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
    } else {
      $(".navbar-area").addClass("sticky");
    }
  }); //===== Section Menu Active

  var scrollLink = $('.page-scroll'); // Active link switching

  $(window).on("scroll", function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  }); //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
  });
  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
    $(".navbar-collapse").toggleClass("show");
  });
  $(".navbar-nav a").on('click', function () {
    $(".navbar-toggler").removeClass('active');
  }); //===== Back to top
  // Show or hide the sticky footer button

  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  }); //Animate the scroll to yop

  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  }); //=====  WOW active

  window.wow = new WOW.WOW();
  window.wow.init(); //=====  particles

  if (document.getElementById("particles-1")) window.particlesJS("particles-1", {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": !0,
          "value_area": 4000
        }
      },
      "color": {
        "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "./../public/images/monkaw_sm.png",
          "width": 33,
          "height": 33
        }
      },
      "opacity": {
        "value": 0.15,
        "random": !0,
        "anim": {
          "enable": !0,
          "speed": 0.2,
          "opacity_min": 0.15,
          "sync": !1
        }
      },
      "size": {
        "value": 50,
        "random": !0,
        "anim": {
          "enable": !0,
          "speed": 2,
          "size_min": 5,
          "sync": !1
        }
      },
      "line_linked": {
        "enable": !1,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": !0,
        "speed": 1,
        "direction": "top",
        "random": !0,
        "straight": !1,
        "out_mode": "out",
        "bounce": !1,
        "attract": {
          "enable": !1,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": !1,
          "mode": "bubble"
        },
        "onclick": {
          "enable": !1,
          "mode": "repulse"
        },
        "resize": !0
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": !0
  });
  if (document.getElementById("particles-2")) window.particlesJS("particles-2", {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": !0,
          "value_area": 4000
        }
      },
      "color": {
        "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#fff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 33,
          "height": 33
        }
      },
      "opacity": {
        "value": 0.15,
        "random": !0,
        "anim": {
          "enable": !0,
          "speed": 0.2,
          "opacity_min": 0.15,
          "sync": !1
        }
      },
      "size": {
        "value": 50,
        "random": !0,
        "anim": {
          "enable": !0,
          "speed": 2,
          "size_min": 5,
          "sync": !1
        }
      },
      "line_linked": {
        "enable": !1,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": !0,
        "speed": 1,
        "direction": "top",
        "random": !0,
        "straight": !1,
        "out_mode": "out",
        "bounce": !1,
        "attract": {
          "enable": !1,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": !1,
          "mode": "bubble"
        },
        "onclick": {
          "enable": !1,
          "mode": "repulse"
        },
        "resize": !0
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": !0
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [736], () => (__webpack_exec__(126)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.40a74a14bfb56c6af954.js.map