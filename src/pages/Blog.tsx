import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import BannerUnete from "../components/BannerUnete";
import type { infoPost } from "../types";
import { useEffect, useState } from "react";

export default function Blog() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [infoPost, setinfoPost] = useState<infoPost[]>([]);

  useEffect(() => {
    try {
      const res = fetch(`${domain}wp-json/wp/v2/posts`);
      const data = res.then((response) => response.json());
      data.then((posts) => {
        setinfoPost(posts);
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  const sliceInfoPost = infoPost.slice(0, 2);

  const handleDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("es-ES", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
  };

  return (
    <>
      <section className="relative md:max-h-[95vh] 2xl:h-[70vh] ">
        <picture>
          <img
            src={`${domain}wp-content/uploads/2025/11/Banner01-blog.webp`}
            className="w-full object-cover md:max-h-[95vh] md:block hidden 2xl:h-[70vh]"
            alt="Banner blog Casa ADD"
          />
          <img
            src={`${domain}wp-content/uploads/2025/11/Banner01-5.webp`}
            className="md:hidden"
            alt="Banner blog Casa ADD"
          />
        </picture>
      </section>
      <section className="py-16 md:max-w-5xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
        <div className="md:flex-row flex justify-center flex-col gap-8 md:gap-0">
          <div className="flex-1 md:-mr-10">
            <img
              src={`${domain}wp-content/uploads/2025/11/Foto-01.webp`}
              alt="Quienes somos foto 1"
              className="md:max-h-[100vh] 2xl:max-h-[80vh] w-full md:object-contain object-center "
            />
            <div className="flex flex-col md:ps-6 2xl:ps-20">
              <span className="font-alata-regular text-lg text-old-silver inline-block pt-2">{handleDate(sliceInfoPost[0]?.date)}</span>
              <span className="font-alata-regular text-old-silver inline-block"> {sliceInfoPost[0]?.title.rendered}</span>
              <a href={`/blog/${sliceInfoPost[0]?.slug}`} className="font-alata-regular text-old-silver inline-block underline">Leer más</a>
            </div>
          </div>
          <div className="md:pt-30 flex-1 md:-ml-10">
            <img
              src={`${domain}wp-content/uploads/2025/11/Foto-02.webp`}
              alt="Quienes somos foto 2"
              className="md:max-h-[100vh] 2xl:max-h-[80vh] w-full md:object-contain object-center "
            />
            <div className="flex flex-col md:ps-6 2xl:ps-20">
              <span className="font-alata-regular text-lg text-old-silver inline-block pt-2">{handleDate(sliceInfoPost[1]?.date)}</span>
              <span className="font-alata-regular text-old-silver inline-block"> {sliceInfoPost[1]?.title.rendered}</span>
              <a href={`/blog/${sliceInfoPost[1]?.slug}`} className="font-alata-regular text-old-silver inline-block underline">Leer más</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="md:max-w-6xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
          <h4 className="uppercase font-alata-regular text-old-silver text-2xl pb-4 leading-5">destacado</h4>
          <div className="flex md:flex-row flex-col md:gap-4 gap-8">
            <div className="md:w-[20%] font-alata-regular text-old-silver leading-5">
              <a href="https://www.youtube.com/watch?v=CAKSBn8F2Hc">
                <img
                  src={`${domain}wp-content/uploads/2025/10/destacado-1.webp`}
                  className="h-80 w-full object-cover"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/watch?v=CAKSBn8F2Hc">
                <p className="font-semibold font-alata-regular text-lg pt-4 ">Enero 31, 2025</p>
              </a>
              <p>Los juguetes que todas deberíamos tener | guía cereza en the add room ep. 14</p>
            </div>
            <div className="md:w-[20%] font-alata-regular text-old-silver leading-5">
              <a href="https://www.youtube.com/watch?v=djN_SNnt-bg">
                <img
                  src={`${domain}wp-content/uploads/2025/10/destacado-2.webp`}
                  className="h-74 w-full object-cover"
                  alt=""
                />
              </a>
              <p className="font-semibold font-alata-regular text-lg pt-4 ">Abril 25, 2025</p>
              <a href="https://www.youtube.com/watch?v=djN_SNnt-bg">
                <p>¿Por qué las modelos no logran ahorrar? | nathalie sossa en the add room ep. 15</p>
              </a>
            </div>
            <div className="md:w-[60%] font-alata-regular text-old-silver leading-5">
              <a href="https://www.youtube.com/watch?v=6FNPhKJUhMo">
                <img
                  src={`${domain}wp-content/uploads/2025/10/destacado-3.webp`}
                  className="h-90 w-full object-cover"
                  alt=""
                />
              </a>
              <p className="font-semibold font-alata-regular text-lg pt-4">Julio 17, 2025</p>
              <a href="https://www.youtube.com/watch?v=6FNPhKJUhMo">
                <p>¿Demasiado placer puede hacerte daño? | luisa montoya - owna | the add room ep. 17</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="md:max-w-6xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
          <h3 className="font-alata-regular text-old-silver text-2xl uppercase pb-10">Del día</h3>
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
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              className="">
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/gMLeh_4TLis">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-01.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Septiembre 12, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/gMLeh_4TLis">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">
                      Familia sobre ser modelo WC - Parte 1
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/aRuSAs7n4uM">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-02.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Septiembre 24, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/aRuSAs7n4uM">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">Consejos para una WC</span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/bzfu6kAaG1M">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-03.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Septiembre 11, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/bzfu6kAaG1M">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">Nikki Night en Casa ADD</span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/LSQr36n-3KU">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-04.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg">Septiembre 10, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/LSQr36n-3KU">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2">
                      Respondiendo al hate en Casa ADD
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/odXY5QXLTx4">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-05.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Septiembre 23, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/odXY5QXLTx4">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">
                      Sesión de fotos Amor y Amistad
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/no1GhiYzkL4">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-06.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Septiembre 26, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/no1GhiYzkL4">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">
                      Los Juguetes Favoritos de una Modelo WC
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/fU7_uKX1FfI">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-07.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Septiembre 04, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/fU7_uKX1FfI">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">
                      ¿Qué les dirías a tus usuarios sobre Colombia?
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/oTg-8Zagcto">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-08.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Agosto 30, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/oTg-8Zagcto">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">Casa ADD en BANTOKENS</span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/CxUpvl1fIz8">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-09.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Agosto 27, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/CxUpvl1fIz8">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">
                      Ruleta de premios en Lalexpo 2025
                    </span>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/i_Typ44ozr0">
                    <img
                      src={`${domain}wp-content/uploads/2025/11/PORTADA-010.webp`}
                      className="h-100 md:h-80 w-full object-cover mb-2"
                      alt=""
                    />
                  </a>
                  <span className="font-alata-regular text-dark-silver text-lg ">Agosto 26, 2025</span>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/shorts/i_Typ44ozr0">
                    <span className="font-alata-regular text-old-silver leading-4 pt-2 ">Oh My Queens & Casa ADD</span>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <BannerUnete />
      </section>
    </>
  );
}
