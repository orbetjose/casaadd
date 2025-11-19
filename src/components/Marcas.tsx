import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Marcas() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <section>
      <div className="py-16 md:max-w-6xl mx-auto slider-marcas px-4 md:px-0">
        <Swiper
          watchOverflow={false}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          className="">
          <SwiperSlide className="">
            <div className="flex flex-col">
              <img
                src={`${domain}wp-content/uploads/2025/09/only-logo.png`}
                className="md:h-11 object-contain mx-auto"
                alt="Logo Only Fans"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex flex-col">
              <img
                src={`${domain}wp-content/uploads/2025/09/chat-logo.png`}
                className="md:h-15 object-contain mx-auto"
                alt="Chaturbate logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex flex-col">
              <img
                src={`${domain}wp-content/uploads/2025/09/strip-logo.png`}
                className="md:h-10 object-contain mx-auto"
                alt="Stripchat logo"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex flex-col">
              <img
                src={`${domain}wp-content/uploads/2025/09/only-logo.png`}
                className="md:h-11 object-contain mx-auto"
                alt="Logo Only Fans"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="flex flex-col">
              <img
                src={`${domain}wp-content/uploads/2025/09/free-logo.png`}
                className="md:h-6 object-contain mx-auto"
                alt="Freecams logo"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
