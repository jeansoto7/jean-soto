// Folders
$('.rectangle-animation').click( function() {
    $(".rectangle-out.big-icons-button.fa").toggleClass("activated");
    $(".rectangle-in.list-icons-button.fa").toggleClass("activated");
});

$('.rectangle-out.big-icons-button.fa').click( function() {
    $(".folder-icons.big-folder-icons").toggleClass("hide");
    $(".folder-icons.small-folder-icons").toggleClass("hide");
});

$('.rectangle-in.list-icons-button.fa').click( function() {
    $(".folder-icons.big-folder-icons").toggleClass("hide");
    $(".folder-icons.small-folder-icons").toggleClass("hide");
});

// Drums Project - // Ubicacion del archivo
var baseUrl = "/assets/img/tarea-3/";
// Lista de sonido por orden
var audio = ["drum-bass.mp3", "floor-tom.mp3", "medium-tom.mp3", "small-tom.mp3", "snare-drum.mp3", "ride-cymbal.mp3", "hit-hat.mp3", "crash-cymbal.mp3"];
// Cuando se de un click en cualquier instrumento
$('.drum-sound.ci').click(function() {
  // Toma el número de ese instrumento
    var i = $(this).attr('id').substring(1);
    // Reproduce el mismo sonido del numero del ID, acorde al orden de la lista de solidos
    new Audio(baseUrl + audio[i-1]).play();
});

$('.drum-sound.ci').click( function() {
  $('.drum-sound.ci').removeClass('active');
  $(this).addClass('active');
});


// Daily Frase
var myQuotes = [{
    quote: "Don't cry because it's over, smile because it happened.",
    cite: "- Dr. Seuss",
}, {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    cite: "- Marilyn Monroe",
}, {
    quote: "Be yourself; everyone else is already taken.",
    cite: "- Oscar Wilde",
}, {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    cite: "- Albert Einstein",
}, {
    quote: "So many books, so little time.",
    cite: "- Frank Zappa",
}, {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    cite: "- Bernard M. Baruch",
}, {
    quote: "A room without books is like a body without a soul.",
    cite: "- Marcus Tullius Cicero",
}];

var randomQuote = Math.floor(Math.random() * myQuotes.length)

$('p', '#randomquote').text(myQuotes[randomQuote].quote);
$('cite', '#randomquote').attr('href', myQuotes[randomQuote].url).text("" + myQuotes[randomQuote].cite);



// Tarea 4
$(function() {
  // Left Top
  $(".left-top").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("left-top-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img, .left-top") === false) {
      $(".cockpit-background-img").removeClass("left-top-active");
    }
  });

  // Left Center
  $(".left-center").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("left-center-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img, .left-center") === false) {
      $(".cockpit-background-img").removeClass("left-center-active");
    }
  });

  // Left Bottom
  $(".left-bottom").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("left-bottom-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img, .left-bottom") === false) {
      $(".cockpit-background-img").removeClass("left-bottom-active");
    }
  });

  // Center Top
  $(".center-top").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("center-top-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img, .center-top") === false) {
      $(".cockpit-background-img").removeClass("center-top-active");
    }
  });

  // Center Center
  $(".cockpit-background-img").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("center-center-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img") === false) {
      $(".cockpit-background-img").removeClass("center-center-active");
    }
  });

  // Center Bottom
  $(".center-bottom").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("center-bottom-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img, .center-bottom") === false) {
      $(".cockpit-background-img").removeClass("center-bottom-active");
    }
  });

  // Right Top
  $(".right-top").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("right-top-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img, .right-top") === false) {
      $(".cockpit-background-img").removeClass("right-top-active");
    }
  });

  $(".right-center").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("right-center-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img, .right-center") === false) {
      $(".cockpit-background-img").removeClass("right-center-active");
    }
  });

  // Right Bottom
  $(".right-bottom").on("click", function(e) {
    $(".cockpit-background-img").toggleClass("right-bottom-active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".cockpit-background-img, .right-bottom") === false) {
      $(".cockpit-background-img").removeClass("right-bottom-active");
    }
  });

});


// Signup Forms
$(function(){
  $('.form-display .mc-field-group input').focusout(function(){
    var text_val = $(this).val();
    if(text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });
});


// Tarea 5 Slideshow
$(function() {
    //Find in DOM
    var $sliderWrap = $('#slider-wrap');
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    var $slideCount = $slides.length;
    var $slideImg = $slides.find('img');
    var $toggleLeft = $sliderWrap.find('#toggle-left');
    var $toggleRight = $sliderWrap.find('#toggle-right');
    var $sliderPaging = $('#slider-paging');
    var $sliderPages = $sliderPaging.find('.slider-pages');
    var $sliderPage = $sliderPages.find('.slider-page');

    var slide;
    var animation = slide;
    var animationSpeed = 1000;
    var toggleClickSpeed = 400;
    var pagingClickSpeed = 400;
    var animationEasing = "swing";
    var toggleClickEasing = "swing";
    var pagingClickEasing = "linear";
    var animationQueue = false;
    var toggleClickQueue = false;
    var pagingClickQueue = false;
    var pause = 3000;
    var pauseOnHover = false;

    var $activePage;
    var $activeSlide;
    var currentSlide = 1;
    var interval;
    var maxHeight;
    var $nextSlide;
    var width = $slider.width();

    var setWidth = function() {
        width = $slider.width();
    }
    $(window).resize(function() {
        setWidth();
    });
    var addActive = function () {
        $activePage = $('.slider-page:nth-of-type(' + currentSlide + ')').addClass('active');
        $activeSlide = $('.slide:nth-of-type(' + currentSlide + ')').addClass('active');
    }
    addActive();
    var removeActive = function () {
        $activePage.removeClass('active');
        $activeSlide.removeClass('active');
    }
    var showSlides = function (slides) {
        slides.each(function () {
            $(this).css({'opacity': 1})
        });
    }
    var hideSlides = function (slides) {
        slides.each(function () {
            $(this).css({'opacity': 0})
        });
    }
    $i = $slideCount;
    $slides.each(function( index ) {
        $(this).css({'z-index': $i--});
        if ( !$(this).hasClass('active') ) {
            hideSlides($(this));
        }
    });

    var isPaused = function () {
    }

    var isPlaying = function () {
    }


    var moveUp = function (itemArr) {
        itemArr.each(function() {
            var zIndex = $(this).css('z-index');
            if ( zIndex == $slideCount ) {
                $(this).css({'z-index': 1});
            } else {
                $(this).css({'z-index': ++zIndex});
            }
        });
    }
    var moveDown = function (itemArr) {
        itemArr.each(function () {
            var zIndex = $(this).css('z-index');
            if ( zIndex == 1 ) {
                $(this).css({'z-index': $slideCount});
            } else {
                $(this).css({'z-index': --zIndex});
            }
        });
    }
    var slideLeft = function (slideLength, speed, easing, queue) {
        var dfd = $.Deferred();
        if ( currentSlide === 1 ) {
            $nextSlide = $('.slide:nth-of-type(' + $slideCount + ')');
        } else {
            $nextSlide = $('.slide:nth-of-type(' + (currentSlide - 1) + ')');
        }
        $nextSlide.css({'margin-left': -slideLength, 'opacity': 1});
        $activeSlide.add($nextSlide).addClass('animating');
        moveDown($slides);
        $activeSlide.add($nextSlide).stop().animate({'margin-left': '+=' + slideLength}, {"duration": speed, "easing": easing, "queue": queue}).promise().then(function () {
            $activeSlide.css({'margin-left': 0, 'opacity': 0});
            $activeSlide.add($nextSlide).removeClass('animating');
            if (currentSlide === 1) {
                currentSlide = $slideCount;
            } else {
                currentSlide--;
            }
            removeActive();
            addActive();
            dfd.resolve();
        });
        return dfd.promise();
    }
    $toggleLeft.click(function(){
        if ( $activeSlide.add($nextSlide).hasClass('animating') ) {
            return;
        } else {
            if ( !isPaused() ) {
                stopSlider();
            }
            $.when(slideLeft(width, toggleClickSpeed, toggleClickEasing, toggleClickQueue)).then(function () {
                if ( !isPaused() ) {
                    startSlider();
                }
            });
        }
    });
    var slideRight = function (slideLength, speed, easing, queue) {
        var dfd = $.Deferred();
        if ( currentSlide === $slideCount ) {
            $nextSlide = $('.slide:nth-of-type(1)');
        } else {
            $nextSlide = $('.slide:nth-of-type(' + (currentSlide + 1) + ')');
        }
        $nextSlide.css({'margin-left': slideLength, 'opacity': 1});
        $activeSlide.add($nextSlide).addClass('animating');
        $activeSlide.add($nextSlide).stop().animate({'margin-left': '-=' + slideLength}, {"duration": speed, "easing": easing, "queue": queue}).promise().then(function () {
            $activeSlide.css({'margin-left': 0, 'opacity': 0});
            $activeSlide.add($nextSlide).removeClass('animating');
            moveUp($slides);
            if (currentSlide === $slideCount) {
                currentSlide = 1;
            } else {
                currentSlide++;
            }
            removeActive();
            addActive();
            dfd.resolve();
        });
        return dfd.promise();
    }
    $toggleRight.click(function (){
        if ( $activeSlide.add($nextSlide).hasClass('animating') ) {
            return;
        } else {
            if ( !isPaused() ) {
                stopSlider();
            }
            $.when(slideRight(width, toggleClickSpeed, toggleClickEasing, toggleClickQueue)).then(function () {
                if ( !isPaused() ) {
                    startSlider();
                }
            });
        }
    });
    var keepSlidingLeft = function (count, speed, easing, queue) {
        if ( count <= 0 ) {
            return;
        }
        $.when(slideLeft(width, speed, easing, queue)).then(function () {
            keepSlidingLeft(count - 1, speed, easing, queue);
        })
    }
    var keepSlidingRight = function (count, speed, easing, queue) {
        if ( count <= 0 ) {
            return;
        }
        $.when(slideRight(width, speed, easing, queue)).then(function () {
            keepSlidingRight(count - 1, speed, easing, queue);
        })
    }
    $sliderPage.click(function (){
        if ( $activeSlide.add($nextSlide).hasClass('animating') ) {
            return;
        } else {
            var pageId = $(this).attr('id');
            var pageNum = pageId.split('-').pop().trim();
            if ( !isPaused() ) {
                stopSlider();
            }
            if ( pageNum < currentSlide ) {
                var count = currentSlide - pageNum;
                keepSlidingLeft(count, pagingClickSpeed, pagingClickEasing, pagingClickQueue);
            } else {
                var count = pageNum - currentSlide;
                keepSlidingRight(count, pagingClickSpeed, pagingClickEasing, pagingClickQueue);
            }
            if ( !isPaused() ) {
                startSlider();
            }
        }
    });
    var startSlider = function () {
        interval = setInterval(function () {
            slideRight(width, animationSpeed, animationEasing, animationQueue);
        }, pause);
    }
    startSlider();
    var stopSlider = function () {
        clearInterval(interval);
    }

});
