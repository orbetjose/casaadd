import type { MouseEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Marcas from "../components/Marcas";
import Convenios from "../components/Convenios";
import { dataBeneficios } from "../data/data";
import { useEffect, useState } from "react";
import { getPageInfo } from "../helpers/wp";
import type { infoPageBeneficios } from "../types";

export default function Beneficios() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [selectedInfo, setSelectedInfo] = useState(1);
  const [infoPage, setPageInfo] = useState<infoPageBeneficios[]>([]);
  const [loading, setLoading] = useState(true);

  const beneficios = dataBeneficios;

  useEffect(() => {
    getPageInfo("beneficios")
      .then((data) => {
        setPageInfo(data);
      })
      .catch((error) => console.error("Error fetching infoPage:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;

  const activeInfo = (e: MouseEvent<HTMLElement>) => {
    setSelectedInfo(+e.currentTarget.id);
  };

  return (
    <>
      <section className="relative md:max-h-[95vh] 2xl:h-[70vh] ">
        <picture>
          <img
            src={infoPage[0]?.acf?.banner?.url}
            className="w-full object-cover md:max-h-[95vh] md:block hidden 2xl:h-[70vh] 2xl:object-bottom"
            alt="Banner beneficios Casa ADD"
          />
          <img
            src={infoPage[0]?.acf?.banner_responsive?.url}
            className="md:hidden"
            alt="Banner beneficios Casa ADD"
          />
        </picture>
      </section>
      <Marcas />
      <section className="pb-16">
        <div className="md:max-w-6xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
          <h3 className="text-center font-alata-regular text-old-silver text-2xl uppercase tracking-[.3em] pb-10">
            Beneficios
          </h3>
          <div className="relative">
            <button className="swiper-button-prev swiper-button-prev-beneficios"></button>
            <button className="swiper-button-next swiper-button-next-beneficios"></button>
            <div className="swiper-pagination-beneficios"></div>
            <div className="swiper-pagination-beneficios-respon"></div>
            {infoPage[0]?.acf?.beneficios.length > 0 && (
              <Swiper
                watchOverflow={false}
                loop={false}
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: ".swiper-button-prev-beneficios",
                  nextEl: ".swiper-button-next-beneficios",
                }}
                pagination={{
                  dynamicBullets: true,
                  el: ".swiper-pagination-beneficios",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                className="!hidden md:!block">
                {infoPage.length > 0 &&
                  infoPage[0].acf.beneficios.map((beneficio, index) => (
                    <SwiperSlide
                      className=""
                      key={index}>
                      <div
                        className="flex flex-col cursor-pointer"
                        onClick={activeInfo}
                        id={(index + 1).toString()}>
                        <img
                          src={beneficio.imagen.url}
                          className="h-80 md:h-70 w-full object-cover mb-2"
                          alt=""
                        />
                        <span className="font-prompt-semibold text-dark-silver text-lg ">{beneficio.titulo}</span>
                        <span className="font-alata-regular text-old-silver ">{beneficio.descripcion}</span>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}

            <Swiper
              onSlideChange={(swiper) => {
                setSelectedInfo(swiper.activeIndex + 1);
              }}
              watchOverflow={false}
              loop={false}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".swiper-button-prev-beneficios-respon",
                nextEl: ".swiper-button-next-beneficios-respon",
              }}
              pagination={{
                dynamicBullets: true,
                el: ".swiper-pagination-beneficios-respon",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="md:!hidden">
              {infoPage.length > 0 &&
                infoPage[0].acf.beneficios.map((beneficio, index) => (
                  <SwiperSlide
                    className=""
                    key={index}>
                    <div
                      className="flex flex-col cursor-pointer"
                      onClick={activeInfo}
                      id={(index + 1).toString()}>
                      <img
                        src={beneficio.imagen.url}
                        className="h-80 md:h-70 w-full object-cover mb-2"
                        alt=""
                      />
                      <span className="font-prompt-semibold text-dark-silver text-lg ">{beneficio.titulo}</span>
                      <span className="font-alata-regular text-old-silver ">{beneficio.descripcion}</span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <div className="flex">
          <div className="md:w-[45%] flex flex-col justify-center bg-cream md:ps-14 md:pe-24 px-4 py-6 md:py-0 md:px-0 2xl:ps-20">
            <h3 className="font-alata-regular text-old-silver text-lg uppercase font-bold">
              {beneficios[selectedInfo - 1].titulo}
            </h3>
            <p className="font-alata-regular text-dark-silver py-2">{beneficios[selectedInfo - 1].subtitulo}</p>
            <p className="font-prompt-light text-dark-silver">{beneficios[selectedInfo - 1].texto}</p>
          </div>
          <div className="md:w-[55%] md:block hidden">
            <img
              className="2xl:h-95 w-full object-cover"
              src={domain + beneficios[selectedInfo - 1].image}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="md:max-w-6xl 2xl:max-w-8xl mx-auto pb-4 px-4 md:px-0">
          <p className="font-prompt-light text-old-silver">Creamos futuro. Inspiramos confianza.</p>
        </div>
        <div>
          <picture>
            <img
              className="w-full h-[35vh] md:h-[70vh] object-cover object-top"
              src={infoPage[0]?.acf?.banner_casadd}
              alt=""
            />
          </picture>
        </div>
        <div className="md:max-w-6xl 2xl:max-w-8xl mx-auto pt-4 px-4 md:px-0">
          <p className="text-right font-prompt-light text-old-silver">
            La nueva generación del modelaje profesional con propósito.
          </p>
        </div>
      </section>
      <section className=" py-10 bg-light-silver">
        <Convenios />
      </section>
    </>
  );
}
