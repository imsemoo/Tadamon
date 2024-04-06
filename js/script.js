$(document).ready(function () {
  $("#news-slider").owlCarousel({
    rtl: true, // دعم الاتجاه من اليمين إلى اليسار
    items: 3,
    nav: true,
    loop: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    rtl: true, // لدعم RTL
   
    navigation: true,
    navText: [
      '<i class="fa-solid fa-chevron-right"></i>', // FontAwesome 6 للأمام

      '<i class="fa-solid fa-chevron-left"></i>', // FontAwesome 6 للخلف
    ],
    autoplay: true,
    autoplayHoverPause: true,
    pagination: true,
    responsive: {
        0: {
          items: 1, // On small screens, show 1 item
          nav: false, // You can disable navigation arrows on smaller screens if desired
        },
        600: {
          items: 1, // On medium screens, show 1 item
          nav: false,
        },
        1000: {
          items: 3, // On large screens, show 1 item or more if you prefer
          nav: true, // Enable navigation arrows on larger screens
          loop: true,
        },
    }
  });

  $("#header-slider").owlCarousel({
    stagePadding: 200,
    loop: true,
    center: true, // هذا يجعل العنصر النشط في الوسط
    items: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    rtl: true,
    responsive: {
      0: {
        items: 1, // On small screens, show 1 item
        nav: false, // You can disable navigation arrows on smaller screens if desired
    stagePadding: 0,

      },
      600: {
        items: 1, // On medium screens, show 1 item
        nav: false,
    stagePadding: 0,

      },
      1000: {
        items: 1, // On large screens, show 1 item or more if you prefer
        nav: true, // Enable navigation arrows on larger screens
        loop: true,
      },
    },
  });
});
