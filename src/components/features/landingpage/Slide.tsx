import headerpic from "../../../assets/images/witcher.jpg";
import headerpic2 from "../../../assets/images/elden2.jpeg";
import headerpic3 from "../../../assets/images/TLOU2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

function Slide() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="3"
        navigation="true"
        pagination="true"
      >
        <swiper-slide>
          <div className=" min-h-[37rem] max-h-40 overflow-hidden w-full  ">
            <img
              className="min-h-[37rem] max-h-40 object-fill rounded-b-2xl w-full"
              src={headerpic}
              alt="image description"
            ></img>
            <div className="bg-darkblue absolute bottom-0 opacity-30 rounded-b-2xl right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
          </div>
          <div className="absolute lg:bottom-10 right-4  bottom-5 flex flex-col gap-2">
            <h1 className="font-bold text-white text-xl">
              سرویس پرینت سه بعدی
            </h1>
            <p className=" text-white text-xs font-medium">
              ایجاد و سفارشی سازی کنید. ساده کنید و ذخیره کنید. با خدمات چاپ سه
              بعدی موانع طراحی را از بین ببرید و کسب و کار خود را افزایش دهید.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide >
        <div className=" min-h-[37rem] max-h-40 overflow-hidden w-full  ">
            <img
              className="min-h-[37rem] max-h-40 object-fill rounded-b-2xl w-full"
              src={headerpic}
              alt="image description"
            ></img>
            <div className="bg-darkblue absolute bottom-0 opacity-30 rounded-b-2xl right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
          </div>
          <div className="absolute lg:bottom-10 right-4  bottom-5 flex flex-col gap-2">
            <h1 className="font-bold text-white text-xl">
              سرویس پرینت سه بعدی
            </h1>
            <p className=" text-white text-xs font-medium">
              ایجاد و سفارشی سازی کنید. ساده کنید و ذخیره کنید. با خدمات چاپ سه
              بعدی موانع طراحی را از بین ببرید و کسب و کار خود را افزایش دهید.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper-container>
    </>
  );
}

export default Slide;
