import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all"
import _ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {

  gsap.registerPlugin(_ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis();  



    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  useGSAP(() => {
    let para = document.querySelector(".para");
    let tl = gsap.timeline();
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let xTranform = gsap.utils.random(-100, 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTranform < 0 ? 0 : "100%"}`,
        },
        "start"
      );
      tl.to(
        image,
        {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            scrub: true,
            start: "top top",
            end: "bottom top",
          },
        },
        "start"
      );
      tl.to(elem, {
        xPercent: xTranform,
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger: image,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });

    tl.to(para, {
      scale: 0,

      ease: "none",
      scrollTrigger: {
        trigger: para,
        scrub: true,

        start: "top bottom",
        end: "bottom top",
      },
    });
  });
  return (
    <>
      {" "}
      <div className="w-full bg-zinc-900">
        <div ref={divRef} className="grid grid-cols-8 grid-row-20 gap-2 overflow-hidden">
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 1, gridColumn: 3 }}
          >
            <img
              src="./img/pexels-anastasiya-gepp-654466-1462636.jpg"
              alt="Image 1"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 1, gridColumn: 7 }}
          >
            <img
              src="./img/pexels-arnie-chou-304906-1557843.jpg"
              alt="Image 2"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 2, gridColumn: 2 }}
          >
            <img
              src="./img/pexels-bin-ziegler-588438-1364756.jpg"
              alt="Image 3"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 2, gridColumn: 6 }}
          >
            <img src="./img/pexels-luhras-2068033.jpg" alt="Image 4" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 3, gridColumn: 4 }}
          >
            <img src="./img/pexels-playmakerjoy-1580273.jpg" alt="Image 5" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 3, gridColumn: 8 }}
          >
            <img src="./img/pexels-raydar-110719-341970.jpg" alt="Image 6" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 4, gridColumn: 1 }}
          >
            <img src="./img/pexels-soldiervip-1391499.jpg" alt="Image 7" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 4, gridColumn: 4 }}
          >
            <img
              src="./img/pexels-uus-supendi-78976-245388.jpg"
              alt="Image 8"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 5, gridColumn: 2 }}
          >
            <img src="./img/img21.jpg" alt="Image 9" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 5, gridColumn: 6 }}
          >
            <img
              src="./img/pexels-vinicius-wiesehofer-289347-1130623.jpg"
              alt="Image 10"
            />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 6, gridColumn: 3 }}
          >
            <img src="./img/img11.jpg" alt="Image 11" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 6, gridColumn: 7 }}
          >
            <img src="./img/img12.jpg" alt="Image 12" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 7, gridColumn: 5 }}
          >
            <img src="./img/img13.jpg" alt="Image 13" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 7, gridColumn: 8 }}
          >
            <img src="./img/img14.jpg" alt="Image 14" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 8, gridColumn: 1 }}
          >
            <img src="./img/img15.jpg" alt="Image 15" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 8, gridColumn: 4 }}
          >
            <img src="./img/img16.jpg" alt="Image 16" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 9, gridColumn: 2 }}
          >
            <img src="./img/img17.jpg" alt="Image 17" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 9, gridColumn: 6 }}
          >
            <img src="./img/img18.jpg" alt="Image 18" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 7, gridColumn: 8 }}
          >
            <img src="./img/img19.jpg" alt="Image 19" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ gridRow: 1, gridColumn: 4 }}
          >
            <img src="./img/img20.jpg" alt="Image 20" />
          </div>
        </div>
        <div className=" fixed top-0 left-0 w-full h-full  flex flex-col items-center justify-center text-white family-['Inter']">
          <h1 className="apper text-7xl font-regular tracking-lower">
            THOMAS VANCE<sup>®</sup>
          </h1>
          <p className="text-2xl font-regular mt-2">
            別々でお願いしますいします々でお
          </p>
        </div>
        <div className="end w-full h-screen bg-[#D1D1D1] flex items-center justify-center mx-auto py-96 relative z-[999] text-center">
          <p className="para text-5xl w-3/4 leading-[4.2rem] text-black font-regular text-left text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dicta inventore delectus id, repellat praesentium consequuntur
            nesciunt quam, atque assumenda dolore vel! Unde nemo praesentium
            asperiores.<sup>®</sup>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
