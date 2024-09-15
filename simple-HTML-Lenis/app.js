const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let para = document.querySelector('.para')
let tl = gsap.timeline()
document.querySelectorAll('.elem').forEach((elem) => {


  let image = elem.querySelector('img')
  let xTranform =  gsap.utils.random(-100, 100)

  
  tl.set(image, {
    transformOrigin : `${xTranform < 0 ? 0 : "100%"}`
  }, "start")
  tl.to(image, {
    scale: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: image,
      scrub: true,
      start: "top top",
      end: "bottom top"
    }
  }, "start")
  tl.to(elem, {
    xPercent: xTranform,
    ease: 'Power3.easeOut',
    scrollTrigger: {
      trigger: image,
      scrub: true,
      start: "top bottom",
      end: "bottom top"
    }
  })
})
console.log(para)
tl.to(para, {
  scale: 0,

  ease: 'none',
  scrollTrigger: {
    trigger: para,
    scrub: true,

    start: "top bottom",
    end: "bottom top"
  }
})
