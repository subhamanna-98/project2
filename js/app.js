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


  // common-sec

$(document).ready(function () {
  $(".header1").click(function () {
    $(".content1").slideToggle();
    $(".arrow1").toggleClass("rotated");
  });
  // $(".header2").click(function () {
  //   $(".content2").slideToggle();
  //   $(".arrow2").toggleClass("rotated");
  // });
  // $(".header3").click(function () {
  //   $(".content3").slideToggle();
  //   $(".arrow3").toggleClass("rotated");
  // });
  // $(".header4").click(function () {
  //   $(".content4").slideToggle();
  //   $(".arrow4").toggleClass("rotated");
  // });
  // $(".header5").click(function () {
  //   $(".content5").slideToggle();
  //   $(".arrow5").toggleClass("rotated");
  // });
});