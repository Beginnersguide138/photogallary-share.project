$(function () {
  var speed = 400;

  // Initial setup
  function initialize() {
    alert(
      'Click on the menu bar above then on the passage/上のメニューにタップするか文にタッチ'
    );
    $('#about-p').css('display', 'none');
    $('#body, #operational, #variants, #gallery').css('display', 'none');
    $(
      '#about-p-trigger, #body-trigger, #operational-trigger, #variants-trigger, #gallery-trigger'
    ).css('display', 'none');

    setupTriggers();
  }

  // Setup all event triggers
  function setupTriggers() {
    $('#about').on('click', handleAbout);
    $('#body-trigger').on('click', handleBody);
    $('#operational-trigger').on('click', handleOperational);
    $('#variants-trigger').on('click', handleVariants);
    $('#gallery-trigger').one('click', handleGallery);
  }

  // Handle 'About' section
  function handleAbout() {
    $('#about-p-trigger').fadeIn('slow', function () {
      $(this).one('click', function () {
        $('#about-p').fadeIn('slow', function () {
          $('#body-trigger').fadeIn('slow');
        });
      });
    });
  }

  // Handle 'Body' section
  function handleBody() {
    $('#about-p').fadeOut('slow', function () {
      $('#body').fadeIn('slow', function () {
        $(this).css({ left: '100vw', top: '0vh' });
        $('#origins, #design').css('display', 'none');
        var target = $('#body');
        var position = target.position().left;
        $('body,html').animate({ scrollLeft: position }, speed, 'swing', function () {
          $('#origins')
            .fadeIn('slow')
            .one('click', function () {
              $(this).fadeOut('fast');
              $('#design').fadeIn('slow', function () {
                $('#operational-trigger').fadeIn('slow');
              });
            });
        });
      });
    });
  }

  // Handle 'Operational' section
  function handleOperational() {
    $('#design').fadeOut('slow', function () {
      $('#operational').fadeIn('slow', function () {
        $(this).css({ left: '200vw', top: '0vh' });
        $('#us, #au, #ca, #fi').css('display', 'none');
        var target1 = $('#operational');
        var position1 = target1.position().left;
        $('body,html').animate({ scrollLeft: position1 }, speed, 'swing', function () {
          var operationalSlides = ['#us', '#au', '#ca', '#fi'];
          var currentSlide = 0;

          function nextSlide() {
            if (currentSlide < operationalSlides.length - 1) {
              $(operationalSlides[currentSlide]).fadeOut('fast', function () {
                currentSlide++;
                $(operationalSlides[currentSlide]).fadeIn('slow');
              });
            } else {
              $('#variants-trigger').fadeIn('slow');
            }
          }

          $(operationalSlides[currentSlide]).fadeIn('slow');
          $('#us, #au, #ca, #fi').on('click', nextSlide);
        });
      });
    });
  }

  // Handle 'Variants' section
  function handleVariants() {
    $('#fi').fadeOut('slow', function () {
      $('#variants').fadeIn('slow', function () {
        $(this).css({ left: '300vw', top: '0vh' });
        $('#ab, #cd, #ef').css('display', 'none');
        var target2 = $('#variants');
        var position2 = target2.position().left;
        $('body,html').animate({ scrollLeft: position2 }, speed, 'swing', function () {
          var variantsSlides = ['#ab', '#cd', '#ef'];
          var currentSlide = 0;

          function nextSlide() {
            if (currentSlide < variantsSlides.length - 1) {
              $(variantsSlides[currentSlide]).fadeOut('fast', function () {
                currentSlide++;
                $(variantsSlides[currentSlide]).fadeIn('slow');
              });
            } else {
              $('#gallery-trigger').fadeIn('slow');
            }
          }

          $(variantsSlides[currentSlide]).fadeIn('slow');
          $('#ab, #cd, #ef').on('click', nextSlide);
        });
      });
    });
  }

  // Handle 'Gallery' section
  function handleGallery() {
    $('#about, #about-p, #body, #operational, #variants').css('display', 'none');
    $(
      '#about-p-trigger, #body-trigger, #operational-trigger, #variants-trigger'
    ).fadeOut('fast', function () {
      $('#gallery').fadeIn('slow', function () {
        $(this).css({ left: '0vw', top: '0vh' });
        var galleryImages = ['#m1', '#m2', '#m3', '#m4', '#m5', '#m6'];
        var currentImage = 0;

        // Hide all images except the first one
        for (var i = 1; i < galleryImages.length; i++) {
          $(galleryImages[i]).css('display', 'none');
        }

        function nextImage() {
          $(galleryImages[currentImage]).fadeOut('slow', function () {
            currentImage = (currentImage + 1) % galleryImages.length;
            $(galleryImages[currentImage]).fadeIn('slow');
          });
        }

        $('#gallery').on('click', 'img', nextImage);
      });
    });
  }

  // Initialize the application
  initialize();
});
