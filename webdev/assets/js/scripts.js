$(".cta").click(function () {
  $(".transition").toggleClass("anim-trans");
  setTimeout(function () {
    window.location.href = "#order";
  }, 3500);
});
$(window).scroll(function () {
  if ($(this).scrollTop() > window.innerHeight) {
    $(".transition").addClass("hidden");
    $(".about").addClass("bg-color");
  } else {
    $(".transition").removeClass("hidden");
    $(".transition").addClass("visible");
    $(".transition").fadeIn(1000);
    $(".about").removeClass("bg-color");
  }
  if ($(this).scrollTop() > window.innerHeight * 3) {
    $(".order").addClass("bg-color");
  } else {
    $(".order").removeClass("bg-color");
  }
});
