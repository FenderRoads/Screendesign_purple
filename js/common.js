$(function() {
  $(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
  });

  $(window).on("load", function() {
    $(".preloader")
      .delay(500)
      .fadeOut("slow");
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $(".top").addClass("active");
    } else {
      $(".top").removeClass("active");
    }
  });
  $(".top").on("click", function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });

  // $("#my-menu").mmenu({

  // }, {
  //   classNames: {
  //     selected: 'active'
  //   }
  // })



  $("#navToggle").click(function() {
    $(this).toggleClass('active')
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});
});
