import headerpic from "../../../assets/images/witcher.jpg";
import headerpic2 from "../../../assets/images/elden2.jpeg";
import headerpic3 from "../../../assets/images/TLOU2.jpg";
// import button from "../../common/button/button.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Slider() {
  const { t } = useTranslation("global");

  return (
    <div dir="ltr">
      <Swiper
        scrollbar={{
          hide: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
        // modules={[Scrollbar]}
        className="  w-full pb-2 pt-10    "
      >
        <SwiperSlide>
          <div className=" min-h-[37rem] max-h-40 overflow-hidden w-full  ">
            <img
              className="min-h-[37rem] max-h-40 object-fill rounded-b-2xl w-full"
              src={headerpic}
              alt="image description"
            ></img>
            <div className="bg-darkblue absolute bottom-0 opacity-30 rounded-b-2xl right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
          </div>
          <div className="absolute lg:bottom-10 right-0 left-0 items-center bottom-5 flex flex-col gap-2">
            <h1 className="font-bold text-white text-xl">
               {t("Welcome.messsage")}
            </h1>
            <p className=" text-white text-xs font-medium">
              {t("SliderExplain.messsage")}
            </p>
            <button
              onClick={() => {
                window.scroll({ top: 600, behavior: "smooth" });
              }}
              className=" rounded-xl bg-red-700 text-xs font-bold h-10 w-72 "
            >
              <span className="font-bold text-sm">{t("GoGames.messsage")} </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" min-h-[37rem] max-h-36 overflow-hidden w-full ">
            <img
              className="min-h-[37rem] max-h-36 object-cover rounded-b-2xl w-full"
              src={headerpic2}
              alt="image description"
            ></img>
            <div className="bg-darkblue  absolute bottom-0 opacity-30 rounded-b-2xl right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
          </div>
          <div className="absolute lg:bottom-10 right-0 left-0 items-center bottom-5 flex flex-col gap-2">
            <h1 className="font-bold text-white text-xl">
               {t("Welcome.messsage")}
            </h1>
            <p className=" text-white text-xs font-medium">
              {t("SliderExplain.messsage")}
            </p>
            <button
              onClick={() => {
                window.scroll({ top: 600, behavior: "smooth" });
              }}
              className=" rounded-xl bg-red-700 text-xs font-bold h-10 w-72 "
            >
              <span className="font-bold text-sm">{t("GoGames.messsage")} </span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" min-h-[37rem] max-h-36 overflow-hidden w-full ">
            <img
              className="min-h-[37rem] max-h-36 object-cover rounded-b-2xl w-full"
              src={headerpic3}
              alt="image description"
            ></img>
            <div className="bg-darkblue  absolute bottom-0 opacity-30 rounded-b-2xl right-0 left-0 top-0 w-full h-full overflow-hidden"></div>
          </div>
          <div className="absolute lg:bottom-10 right-0 left-0 items-center bottom-5 flex flex-col gap-2">
            <h1 className="font-bold text-white text-xl">
               {t("Welcome.messsage")}
            </h1>
            <p className=" text-white text-xs font-medium">
              {t("SliderExplain.messsage")}
            </p>
            <button
              onClick={() => {
                window.scroll({ top: 600, behavior: "smooth" });
              }}
              className=" rounded-xl bg-red-700 text-xs font-bold h-10 w-72 "
            >
              <span className="font-bold text-sm">{t("GoGames.messsage")} </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
