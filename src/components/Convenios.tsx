import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Convenios() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
      <div className="md:max-w-6xl mx-auto bg-light-silver">
        <h3 className="uppercase text-center font-alata-regular text-2xl text-old-silver tracking-[.3em] font-bold">
          Convenios / ADD Friends
        </h3>
        <div className="py-4">
          <Swiper
            watchOverflow={false}
            loop={true}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            className="">
            <SwiperSlide className="">
              <div className="flex flex-col">
                <img
                  src={`${domain}wp-content/uploads/2025/10/05.webp`}
                  className="h-40 object-contain mx-auto"
                  alt="Jumeirah logo"
                  width={200}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex flex-col">
                <img
                  src={`${domain}wp-content/uploads/2025/10/06.webp`}
                  className="h-40 object-contain mx-auto"
                  alt="Spinning center gym logo"
                  width={200}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex flex-col">
                <img
                  src={`${domain}wp-content/uploads/2025/10/07.webp`}
                  className="h-40 object-contain mx-auto"
                  alt="Kinky lolita logo"
                  width={200}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex flex-col">
                <img
                  src={`${domain}wp-content/uploads/2025/10/04.webp`}
                  className="h-40 object-contain mx-auto"
                  alt="My wish cam logo"
                  width={200}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex flex-col">
                <img
                  src={`${domain}wp-content/uploads/2025/10/01.webp`}
                  className="h-40 object-contain mx-auto"
                  alt="Guia cereza logo"
                  width={200}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  );
}
