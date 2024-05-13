

window.addEventListener("wheel", function(dets) {
 if (dets.deltaY > 0) {
  gsap.to(".content", {
   transform: "translateX(-200%)",
   duration: 4,
   ease: "none",
   repeat: -1
  })
  
  gsap.to(".content img", {
    rotate: 0,
    duration: 0.5,
    ease: "expoexpo.outout",
  });
 }
 else {
  gsap.to(".content", {
   transform: "translateX(0%)",
   duration: 4,
   ease: "none",
   repeat: -1
  })
  
  gsap.to(".content img", {
    rotate: 180,
    duration: 0.5,
    ease: "expoexpo.outout",
  });
 }
 })

document.addEventListener("DOMContentLoaded", function() {
      gsap.to(".content", {
   transform: "translateX(-200%)",
   duration: 7,
   ease: "none",
   repeat: -1
  })
});