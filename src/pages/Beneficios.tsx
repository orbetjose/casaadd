import type { MouseEvent } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Marcas from "../components/Marcas";
import Convenios from "../components/Convenios";
import { dataBeneficios } from "../data/data";

export default function Beneficios() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [selectedInfo, setSelectedInfo] = useState(1);
  const [beneficios] = useState(dataBeneficios);

  console.log(beneficios);
  const activeInfo = (e: MouseEvent<HTMLElement>) => {
    setSelectedInfo(+e.currentTarget.id);
  };

  return (
    <>
      <section className="relative md:max-h-[95vh] 2xl:h-[70vh] ">
        <picture>
          <img
            src={`${domain}wp-content/uploads/2025/11/Banner01-beneficios.webp`}
            className="w-full object-cover md:max-h-[95vh] md:block hidden 2xl:h-[70vh] 2xl:object-bottom"
            alt="Banner beneficios Casa ADD"
          />
          <img
            src={`${domain}wp-content/uploads/2025/11/Banner01-3.webp`}
            className="md:hidden"
            alt="Banner beneficios Casa ADD"
          />
        </picture>
      </section>
      <Marcas />
      <section>
        <div>
          <picture>
            <img
              className="w-full h-[70vh] object-cover"
              src={`${domain}wp-content/uploads/2025/09/video-beneficios.webp`}
              alt=""
            />
          </picture>
        </div>
      </section>
      <section className="py-16">
        <div className="md:max-w-6xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
          <h3 className="text-center font-alata-regular text-old-silver text-2xl uppercase tracking-[.3em] pb-10">
            Beneficios
          </h3>
          <div className="relative">
            <button className="swiper-button-prev swiper-button-prev-beneficios"></button>
            <button className="swiper-button-next swiper-button-next-beneficios"></button>
            <div className="swiper-pagination-beneficios"></div>

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
              className="">
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="1">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/01-Trafico-y-posicionamiento-en-plataforma-1.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">
                    Trafico y posicionamiento en plataforma
                  </span>
                  <span className="font-alata-regular text-old-silver ">Posiciónate alto, crece rápido.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="2">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/02-Monitoreo.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Monitoreo</span>
                  <span className="font-alata-regular text-old-silver ">No estás sola frente a la cámara.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="3">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/03-Perfilamiento.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Perfilamiento</span>
                  <span className="font-alata-regular text-old-silver leading-5">
                    Hacemos de tu esencia, una marca personal.
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="4">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/04-Produccion-de-ontenidos.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Producción de contenidos</span>
                  <span className="font-alata-regular text-old-silver ">Tu imagen, tu historia, tu estilo.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="5">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/05-capacitacion.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Capacitación</span>
                  <span className="font-alata-regular text-old-silver ">No es suerte, es preparación estratégica.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="6">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/06-tecnologia.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Tecnología (IT / OIT)</span>
                  <span className="font-alata-regular text-old-silver ">
                    Si algo falla, estamos ahí antes de que lo notes.
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="7">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/07-Styling.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Styling</span>
                  <span className="font-alata-regular text-old-silver ">Tu imagen habla antes que tú.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="8">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/08-Asesoria-contable.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Asesoría contable y legal</span>
                  <span className="font-alata-regular text-old-silver ">Trabaja con tranquilidad financiera.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="9">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/09-Bienestar.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Bienestar</span>
                  <span className="font-alata-regular text-old-silver ">Estar bien es parte del éxito.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="10">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/10-Espacios-logistica.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">Espacios, Logística y aseo</span>
                  <span className="font-alata-regular text-old-silver ">
                    Transformamos cada room en un espacio listo para brillar.
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={activeInfo}
                  id="11">
                  <img
                    src={`${domain}wp-content/uploads/2025/10/11-Add-Creators.png`}
                    className="h-80 md:h-70 w-full object-cover mb-2"
                    alt=""
                  />
                  <span className="font-prompt-semibold text-dark-silver text-lg ">ADD Creators</span>
                  <span className="font-alata-regular text-old-silver ">Tu contenido con propósito.</span>
                </div>
              </SwiperSlide>
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
              src={`${domain}wp-content/uploads/2025/11/banner-abajo-beneficios.webp`}
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
      <section className="md:mt-16 py-10 bg-light-silver">
        <Convenios />
      </section>
    </>
  );
}
