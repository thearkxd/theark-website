var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  mousewheel: true,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
  autoplay: {
    delay: 7000,
  },
});

AOS.init();

$(window).on("load", function () {
  $(".loader-container").fadeOut(1000);
});

let btn = document.querySelector(".scroll-down")

swiper.on('slideChange', () => {
  AOS.init();
  if(swiper.activeIndex !== 0){
    btn.style.display = "none"
  } else {
    btn.style.display = "block"
  }
});

btn.addEventListener("click", () => swiper.slideNext());