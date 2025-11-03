const closeBtn = document.querySelector(".close-btn");

const navbarColledped = document.querySelector(".navbar-collesped");

const body = document.querySelector(".body");
let open = true;

closeBtn.addEventListener("click",() =>{
    if(open== true){
        open = false;
        navbarColledped.style.right = "0%";
        closeBtn.classList.add("open");
        body.style.overflow = "hidden";
    }else{
        open = true;
        navbarColledped.style.right = "-100%";
        closeBtn.classList.remove("open");
        body.style.overflow = "visible";
    }
});


 $(document).ready(function(){

    // Initialize isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });

    // Filter buttons
    $('.filter-button-group').on('click', 'button', function(){
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
});

// counter-sec

  const counters = document.querySelectorAll(".counter");

  const runCounter = (counter) => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
    const speed = 200; // lower = faster

    const update = () => {
      const value = +counter.innerText;
      const increment = Math.ceil(target / speed);
      if (value < target) {
        counter.innerText = value + increment;
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };

    update();
  };

  // Counter starts only when visible on screen
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
       spaceBetween: 30,
      loop: true,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      pagination: {
        el: ".swiper-pagination",
         clickable: true,
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        1700:{
             slidesPerView: 1,
        },
    1470: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
},
    });

      document.addEventListener('DOMContentLoaded', function () {
      var splide = new Splide('#image-slider', {
        type       : 'loop',
        perPage    : 3,
        focus      : 'center',
        gap        : '1rem',
        pagination : false,
        arrows     : false,
        autoScroll : {
          speed: 1,
        },
      });

      splide.mount({ AutoScroll });

      // Mouse hover দিলে auto scroll বন্ধ
      splide.root.addEventListener('mouseenter', function () {
        splide.Components.AutoScroll.pause();
      });

      // Mouse সরালে আবার শুরু
      splide.root.addEventListener('mouseleave', function () {
        splide.Components.AutoScroll.play();
      });
    });



