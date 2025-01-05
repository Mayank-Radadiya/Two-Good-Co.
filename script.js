function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
    

  function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      stagger: 0.3,
    });
    gsap.from("#page1  #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 0.5,
      duration: 2,
    });
  }
  loadinganimation();
  
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  //same code for mouse cusor

  // let cursor = document.querySelector("#cursor")
  // let main = document.querySelector("#main")  
  
  // main.addEventListener("mousemove",function(e){
  //   cursor.style.top = e.y + "px"
  //   cursor.style.left = e.x + "px"
  //   console.log(e);
  // })
  
  