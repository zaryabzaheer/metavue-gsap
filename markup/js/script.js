$(document).ready(function () {
  $(this).scrollTop(0);
  $(".loader").hide();
  $(".banner-content").hide();
  $(".banner").hide();
  $("#header").hide();
  $(document).on('keypress',function(e) {
    if(e.which == 13) {
      $(".tap-to-start").hide();
        $(".loader").show();
        loadAnimation();
    }
});
$(document).on('click',function(e) {
  $(".tap-to-start").hide();
  $(".loader").show();
  loadAnimation();
});
  //  Initiliaze AOS Animation
  AOS.init();
  // Initiliaze Slick Slider
  $(".road-map-carousal").slick({
    dots: true,
    arrows: false,
    speed: 1000,
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: "linear",
    touchMove: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// Animated Doll On Scroll
function scrollingDoll() {
  var $demoText = $(".splittext2");
  $demoText.html($demoText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
  var controller = new ScrollMagic.Controller();
  var tlFirstScroll = new TimelineMax();
  tlFirstScroll
  .to('.banner', 6,{background: "black"}, "-=6")
  .to('.banner-img', 6,{opacity: 0,background: "black"}, "-=6")
  .to('.user-2', 4, {top : "-870px",left: '20%',}, "-=6")
  .to('.users .user-1', 4,{transform: 'rotate(267deg)',opacity: 0,left: '0%'}, '-=6')
  .to('.lady', 3,{opacity: 1, transform: 'rotate(353deg)'}, '-=5')
  .to('.users .user-3', 4, {top : "-700px",left: '-70%',}, "-=6")
  .to('.users .object-1', 3,{top: '-70%'}, '-=6')
  .to('.users .object-2', 3, {top: '-15%',opacity: 0, x: '-70%'}, "-=6")
  .to('.users .object-3', 6, {right: '-23%',top: '30%',}, "-=6")
  .to('.globe-side-image img', 4, {right: '20%',}, "-=6")
  .to('.waves-image img', 4,{right:"200px",y:"-350px",opacity:0},"-=6")
  .to('.surface-image', 4,{right:"-20%",top:'20%',opacity:0},"-=6")
  .to('.banner-content',2,{top:"300px",opacity:0,},"-=6")
  .to('.who-we-are-content p', 4,{opacity: 1,},"-=5")
  .to('.who-we-are-content', 3,{x:'150%'}, "+=6")
  .to('.lady', 3, {x : "-950px"}, "-=3")
  .to('.avatar-girl',3,{opacity:1},"-=3")
  .staggerFrom(".splittext2 span", 6, {
    scale: 0,
    y: 300, x: -100,
    ease: Back.easeOut ,
    stagger: {
      from: "left",
      amount: 1.5
    }
  })
  .to('.avatar-girl .content p', 4 ,{y: '-185%', opacity: 1},"-=5")
  var scene = new ScrollMagic.Scene({
          triggerElement: "banner",
          triggerHook:0,
          duration:7000,
      })
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 5
  })
  .setTween(tlFirstScroll)
  .setPin(".banner")
  .addTo(controller);
  if ($(window).width() < 1800) {
    var controller = new ScrollMagic.Controller();
    var tlFirstScroll = new TimelineMax();
    tlFirstScroll
    .to('.users .user-1', 4,{left: '45%'}, '-=6')
    .to('.users .object-3', 6, {right: '2%',top: '10%',}, "-=6")
    .to('.users .object-2', 2, {top: '-70%',opacity: 0, x: '-60%'}, "-=6")
    .to('.user-2', 4, {top : "-870px",left: '-7%',}, "-=6")
    .to('.avatar-girl .content p', 4 ,{y: '-250%', opacity: 1},"-=4")
    var scene = new ScrollMagic.Scene({
      triggerElement: "banner",
      triggerHook:0,
      duration:7000,
    })
    .setTween(tlFirstScroll)
    .setPin(".banner")
    .addTo(controller);
    if ($(window).width() < 1400) {
      var controller = new ScrollMagic.Controller();
      var tlFirstScroll = new TimelineMax();
      tlFirstScroll
      .to('.waves-image img', 4,{right:"200px",y:"-250px",opacity:0},"-=6")
      .to('.globe-side-image img', 4, {right: '14%',}, "-=6")
      .to('.avatar-girl .content p',3,{y: '-230%'},)
        var scene = new ScrollMagic.Scene({
          triggerElement: "banner",
          triggerHook:0,
          duration:7000,
      })
      .setTween(tlFirstScroll)
      .setPin(".banner")
      .addTo(controller);
      if ($(window).width() < 1200) {
        var controller = new ScrollMagic.Controller();
        var tlFirstScroll = new TimelineMax();
        tlFirstScroll
        .to('.users .object-3', 6, {right: '9%',top: '40%',}, "-=6")
        .to('.globe-side-image img', 4, {right: '15%',}, "-=6")
        .to('.users .user-1', 4,{transform: 'rotate(267deg)',opacity: 0,left: '46%'}, '-=5')
        .to('.lady', 3,{opacity: 1, transform: 'rotate(353deg)', left: '0%'}, '-=4')
        .to('.avatar-girl .content p',3,{y: '-300%'},)
          var scene = new ScrollMagic.Scene({
            triggerElement: "banner",
            triggerHook:0,
            duration:7000,
        })
        .setTween(tlFirstScroll)
        .setPin(".banner")
        .addTo(controller);
        if ($(window).width() < 768) {
          var controller = new ScrollMagic.Controller();
          var tlFirstScroll = new TimelineMax();
          tlFirstScroll
            .to('.users .user-3', 4, {y: '-100%',left: '55%',}, "-=6")
            .to('.user-2', 4, {top : "-300px",left: '-1%',}, "-=6")
            .to('.users .user-1', 4,{top: '25px',transform: 'rotate(-70deg)',left: '20%'}, '-=6')
            .to('.users .object-3', 6, {right: '-24%',top: '-173%',}, "-=6")
            .to('.users .object-2', 4, {top: '-130%',opacity: 1, x: '-200%'}, "-=6")
            .to('.lady', 3,{ opacity: 1, transform: 'rotate(353deg)',left: '33%', }, '-=5')
            .to('.lady', 3, {x : "0"}, "-=4")
            .to('.avatar-girl .content p', 3,{y: '-450%'}, '-=3')
            
            var scene = new ScrollMagic.Scene({
              triggerElement: "banner",
              triggerHook:0,
              duration:7000,
          })
          .setTween(tlFirstScroll)
          .setPin(".banner")
          .addTo(controller);
          if ($(window).width() < 568) {
            var controller = new ScrollMagic.Controller();
            var tlFirstScroll = new TimelineMax();
            tlFirstScroll
              .to('.user-2', 4, {top : "-250px",left: '5%',}, "-=6")
              .to('.users .object-2', 4, {top: '-113%',opacity: 1, x: '-150%'}, "-=6")
              .to('.avatar-girl .content p', 3,{y: '-250%'}, '-=3')
              var scene = new ScrollMagic.Scene({
                triggerElement: "banner",
                triggerHook:0,
                duration:7000,
            })
            .setTween(tlFirstScroll)
            .setPin(".banner")
            .addTo(controller);
            if ($(window).width() < 481) {
              var controller = new ScrollMagic.Controller();
              var tlFirstScroll = new TimelineMax();
              tlFirstScroll
                .to('.user-2', 4, {top : "-160px",left: '10%',}, "-=6")
                .to('.users .object-2', 4, {top: '-90%',opacity: 1, x: '-48%'}, "-=6")
                // .to('.avatar-girl .content p', 3,{top: '-42%',}, '-=3')
                .to('.users .object-3', 6, {right: '-4%',top: '-214%',}, "-=6")
                var scene = new ScrollMagic.Scene({
                  triggerElement: "banner",
                  triggerHook:0,
                  duration:7000,
              })
              .setTween(tlFirstScroll)
              .setPin(".banner")
              .addTo(controller);
              if ($(window).width() < 368) {
                var controller = new ScrollMagic.Controller();
                var tlFirstScroll = new TimelineMax();
                tlFirstScroll
                .to('.avatar-girl .content p', 3,{y: '-210%'}, '-=3')
                  // .to('.avatar-girl .content p', 3,{top: '-23%',}, '-=3')
                  var scene = new ScrollMagic.Scene({
                    triggerElement: "banner",
                    triggerHook:0,
                    duration:7000,
                })
                .setTween(tlFirstScroll)
                .setPin(".banner")
                .addTo(controller);
              }
            }
          }
        }
      }
    }
  }
}
// Header Heading Animation
function headingAnimation(){
var controller = new ScrollMagic.Controller();
var tweenDivs = new TimelineMax();
tweenDivs.to(
  "h1 .meta-m, h1 .meta-t, h1 .meta-v, h1 .meta-r, h1 .meta-e3 ",
  3,
  {
    scaleY: 0,
    ease: Expo.easeOut,
    autoAlpha: 0,
    transformOrigin: "top center",
  },
  0
);
tweenDivs.to("h1 .meta-m", 3, { marginTop: "-25%" }, 0);
tweenDivs.to("h1 .meta-t", 3, { marginTop: "-30%" }, 0);
tweenDivs.to(" h1 .meta-v ", 3, { marginTop: "-35%" }, 0);
tweenDivs.to(" h1 .meta-r", 3, { marginTop: "-40%" }, 0);
tweenDivs.to("h1 .meta-e3 ", 3, { marginTop: "-45%" }, 0);
tweenDivs.to(
  "h1 .meta-e1, h1 .meta-a, h1 .meta-e2, h1 .meta-s",
  3,
  {
    scaleY: 0,
    ease: Expo.easeOut,
    autoAlpha: 0,
    transformOrigin: "bottom center",
  },
  0
);
tweenDivs.to("h1 .meta-a", 3, { marginBottom: "-5%" }, 0);
tweenDivs.to("h1 .meta-e2", 3, { marginBottom: "-10%" }, 0);
tweenDivs.to("h1 .meta-s", 3, { marginBottom: "-15%" }, 0);
tweenDivs.to(
  ".banner-content h4",
  3,
  {
    scaleY: 0,
    ease: Expo.easeOut,
    autoAlpha: 0,
    transformOrigin: "top center",
    top: "-80%",
    transform: "rotate(350deg)",
  },
  0
);
var sceneScrollLeftId = new ScrollMagic.Scene({
  triggerElement: ".nome-piero",
  duration: "2000",
  triggerHook: 1,
})
  .setTween(tweenDivs)
  .addIndicators()
  .addTo(controller);
}
// Loader Animation
function loadAnimation() {
  //  Loader Area Start
  var main = new TimelineMax({ paused: true });
  main.set($(".loader"), { display: "block"});
  main.set($("main"), { background: "black"});
  main.set($(".banner"), { display: "none" });
  main.set($("#header"), { display: "none" });
  main.set($(".moon-image img"), { top: "-30%", left: "25%" });
  main.set($(".planet1-image img"), { top: "60%", left: "-12%" });
  main.set($(".planet2-image img"), { top: "-20%", right: "25%" });
  main.set($(".planet3-image img"), { top: "40%", right: "-20%" });
  main.set($(".planet4-image img"), { bottom: "0%", right: "-20%" });
  main.set($(".small-rocket-image img"), { top: "40%", left: "-15%" });
  main.set($(".small-rocket-image-1 img"), { top: "-10%", right: "15%" });
  main.set($(".smokey-rocket-image img"), { left: "-100%" });
  main.set($(".banner"), { left: "-100%" });
  main
    .set($("#header"), { autoAlpha: 0 })
    .from($(".world-image img"), 1, { left: "900px", autoAlpha: 0})
    .to($(".stars-image img"), 2.3, { display: "block" })
    .to($(".world-image"),1,{width:"200px",height:"200px", top: "80%"},"-=2")
    .to($(".world-image img"),1,{left:"50%"},"-=2")
    .to($(".moon-image img"),1, { top: "30%" }, "-=2")
    .to($(".planet1-image img"),1, { left: "10%" }, "-=2")
    .to($(".planet2-image img"),1, { top: "10%" }, "-=2")
    .to($(".planet3-image img"),1, { right: "15%" }, "-=2")
    .to($(".planet4-image img"),1, { right: "0%" }, "-=2")
    .to($(".world-image img,.moon-image img,.planet1-image img,.planet2-image img,.planet3-image img,.planet4-image img"),2, { autoAlpha: 0 })
    .to($(".small-rocket-image img"), 1, { left: "45%", top: "-40%" }, "-=2")
    .to($(".small-rocket-image-1 img"),2, { right: "-15%", top: "60%" }, "-=1")
    .to($(".smokey-rocket-image img"),1.4,{ left: "100%", autoAlpha: 0.1, width: "100%" },"-=1")
    .to($(".stars-image img"),{autoAlpha: 0 },"-=1")
    .to($(".banner"),1.1,{display: "block",left: "0%",ease: Power4.easein,position: "relative",},"-=1");
    main.set($(".loader-banner img"), { display: "none" });
  main.set($(".tap-to-start"), { display: "none" });
  main.set($(".loader"), { display: "none" });
  main.set($(".banner"), { display: "block", position: "fixed" });
  main.set($("body"), { "overflow-y": "auto" });
  main.set($("#header"), { autoAlpha: 1,display:"block" });
  $(".banner-content").show(5000);
  main.play();
  afterloader();
   if ($(window).width() < 1399) {
        main.to($('.world-image'), {width:"200px",height:"200px"},"-=2")
      }
}
// After Loader Main Heading Animation
function afterloader(){
  let t1 = gsap.timeline();
  t1.from(" .meta-m, .meta-t, .meta-v, .meta-r, .meta-e3", 0.2, {y: 100,autoAlpha: 0,ease: Power3.out,stagger: 0.2 }, 8);
  t1.from(" .meta-e1, .meta-a, .meta-e2, .meta-s", 0.6, { y: -100,autoAlpha: 0,ease: Power3.out,stagger: 0.2 }, 8);
  t1.from(".banner-content h4", 0.6,  {scale: 0,x: -300,ease: Back.easeOut ,stagger: {amount: 9.5}}, 7);
}

// Animated Text
function animatedText() {
  var $demoText = $(".splittext");
  $demoText.html($demoText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
  var controller = new ScrollMagic.Controller();
  var tlFirstScroll = new TimelineMax();
  tlFirstScroll
  .staggerFrom(".splittext span", 6, {
    scale: 0,
    y: 300, x: -100,
    ease: Back.easeOut ,
    stagger: {
      from: "left",
      amount: 1.5
    }
  })
  var scene = new ScrollMagic.Scene({
          triggerElement: "banner",
          triggerHook:0,
          duration:5000,
      })
  .setTween(tlFirstScroll)
  .setPin(".banner")
  .addTo(controller);
    }
// Fucntion Call
scrollingDoll();
headingAnimation();
animatedText();

