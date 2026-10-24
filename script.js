document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
  });
});

let whySwiper;
function initWhySwiper() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile && !whySwiper) {
    whySwiper = new Swiper(".why-swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,

      pagination: {
        el: ".custom-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      },
    });
  } else if (!isMobile && whySwiper) {
    whySwiper.destroy(true, true);
    whySwiper = undefined;
  }
}
initWhySwiper();
window.addEventListener("resize", initWhySwiper);

function playVideo() {
  var video = document.getElementById("myVideo");
  var overlay = document.getElementById("videoOverlay");

  video.play();
  overlay.classList.add("hidden");

  video.setAttribute("controls", "controls");
}

document.addEventListener("DOMContentLoaded", function () {
  const paintingSwiper = new Swiper(".swiper-painting", {
    slidesPerView: 2,
    spaceBetween: 20,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-painting",
      prevEl: ".swiper-button-prev-painting",
    },

    pagination: {
      el: ".swiper-pagination-painting",
      clickable: true,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const summerCampSwiper = new Swiper(".swiper-summer-camp", {
    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 46,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-summer-camp",
      prevEl: ".swiper-button-prev-summer-camp",
    },

    pagination: {
      el: ".swiper-pagination-summer-camp",
      clickable: true,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const customerSwiper = new Swiper(".swiper-customers", {
    spaceBetween: 0,
    slidesPerView: 'auto',
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
    pagination: {
      el: ".swiper-pagination-customer",
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const videoCards = document.querySelectorAll(".swiper-painting .video-card");

  videoCards.forEach((card) => {
    const overlay = card.querySelector(".play-overlay");
    const video = card.querySelector(".card-video");

    if (overlay && video) {
      overlay.addEventListener("click", function () {
        video.play();
        overlay.classList.add("hidden");
        video.setAttribute("controls", "controls");
      });

      video.addEventListener("pause", function () {
        overlay.classList.remove("hidden");
        video.removeAttribute("controls");
      });
    }
  });
});

const searchBtn = document.getElementById("searchBtn");
const searchContainer = document.getElementById("searchContainer");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});

let kitSwiperInstance = undefined;

function initKitSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    if (kitSwiperInstance === undefined) {
      kitSwiperInstance = new Swiper(".kit-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".kit-order-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".kit-order-next",
          prevEl: ".kit-order-prev",
        },
      });
    }
  } else {
    if (kitSwiperInstance !== undefined) {
      kitSwiperInstance.destroy(true, true);
      kitSwiperInstance = undefined;
    }
  }
}

initKitSwiper();

window.addEventListener("resize", initKitSwiper);

// for footer accordion

document.addEventListener("DOMContentLoaded", function () {
  const footerHeadings = document.querySelectorAll(
    ".footer-column .footer-heading",
  );

  footerHeadings.forEach((heading) => {
    const list = heading.nextElementSibling;

    if (list && list.classList.contains("footer-list")) {
      heading.classList.add("accordion-toggle");

      heading.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          const parentColumn = this.parentElement;

          document.querySelectorAll(".footer-column").forEach((col) => {
            if (col !== parentColumn) {
              col.classList.remove("active");
            }
          });

          parentColumn.classList.toggle("active");
        }
      });
    }
  });
});