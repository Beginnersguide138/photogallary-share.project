$(function () {
  // The scrolling container is '.lot-container' due to 'overflow: scroll'
  var $scroller = $(".lot-container");
  var $mthLots = $(".lot.mth");

  function applyParallax() {
    // Get scroll position from the container, not the window
    var scrollLeft = $scroller.scrollLeft();

    // Move the monthly sections at a different speed for the parallax effect
    $mthLots.each(function () {
      var $lot = $(this);
      // Using a negative multiplier will make them move faster, which can also be a parallax effect.
      // Let's stick to a positive one to make them move slower, which is more traditional.
      var speed = 0.5;
      var xPos = scrollLeft * speed;

      // We apply the transform. This moves the element from its normal scrolled position.
      $lot.css("transform", "translateX(" + xPos + "px)");
    });
  }

  // Bind the function to the scroll event of the container
  $scroller.on("scroll", function () {
    window.requestAnimationFrame(applyParallax);
  });

  // Initial call to set position
  applyParallax();
});
