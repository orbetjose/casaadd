import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import BannerUnete from "../components/BannerUnete";
import type { infoPost } from "../types";
import { useEffect, useState } from "react";

type videoItem = {
  id: {
    videoId: string;
  }
  snippet: {
    thumbnails: {
      high: {
        url: string;
      }
    },
    title: string;
    publishedAt: string;
  }
}

export default function Blog() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [infoPost, setinfoPost] = useState<infoPost[]>([]);
  const [videos, setVideos] = useState<videoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "AIzaSyCRbOAqOLWz-05RUL-Ca-lrCpkc3jT_Nj0";
  const MAX_RESULTS = 10;

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

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);

        // Primero obtenemos el Channel ID desde el handle del canal
        const channelUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=@casaadd94&type=channel&part=snippet&maxResults=1`;
        const channelResponse = await fetch(channelUrl);
        const channelData = await channelResponse.json();

        if (channelData.error) {
          throw new Error(channelData.error.message);
        }

        const channelId = channelData.items[0]?.id?.channelId;

        if (!channelId) {
          throw new Error("No se pudo obtener el ID del canal");
        }

        // Ahora obtenemos los videos del canal
        const videosUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`;

        const videosResponse = await fetch(videosUrl);
        const videosData = await videosResponse.json();

        if (videosData.error) {
          throw new Error(videosData.error.message);
        }

        setVideos(videosData.items || []);
        setError(null);
      } catch (err) {
        console.error("Error al obtener videos:", err);
        const errorMessage = err instanceof Error ? err.message : "Error desconocido al obtener videos";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []); // Se ejecuta solo una vez al montar el componente

  if (loading) {
    return (
      <div className="loading-container">
        <p>Cargando videos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="no-videos-container">
        <p>No se encontraron videos</p>
      </div>
    );
  }

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
              <span className="font-alata-regular text-lg text-old-silver inline-block pt-2">
                {handleDate(sliceInfoPost[0]?.date)}
              </span>
              <span className="font-alata-regular text-old-silver inline-block">
                {" "}
                {sliceInfoPost[0]?.title.rendered}
              </span>
              <a
                href={`/blog/${sliceInfoPost[0]?.slug}`}
                className="font-alata-regular text-old-silver inline-block underline">
                Leer más
              </a>
            </div>
          </div>
          <div className="md:pt-30 flex-1 md:-ml-10">
            <img
              src={`${domain}wp-content/uploads/2025/11/Foto-02.webp`}
              alt="Quienes somos foto 2"
              className="md:max-h-[100vh] 2xl:max-h-[80vh] w-full md:object-contain object-center "
            />
            <div className="flex flex-col md:ps-6 2xl:ps-20">
              <span className="font-alata-regular text-lg text-old-silver inline-block pt-2">
                {handleDate(sliceInfoPost[1]?.date)}
              </span>
              <span className="font-alata-regular text-old-silver inline-block">
                {" "}
                {sliceInfoPost[1]?.title.rendered}
              </span>
              <a
                href={`/blog/${sliceInfoPost[1]?.slug}`}
                className="font-alata-regular text-old-silver inline-block underline">
                Leer más
              </a>
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
              {videos.map((video, index) => {
                const videoId = video.id.videoId
                const thumbnail = video.snippet.thumbnails.high.url
                const title = video.snippet.title
                const publishedAt = new Date(video.snippet.publishedAt)
                return (
                  <SwiperSlide className="" key={index}>
                    <div className="flex flex-col">
                      <a
                        target="_blank"
                        href={`https://www.youtube.com/watch?v=${videoId}`}>
                        <img
                          src={thumbnail}
                          className="h-100 md:h-80 w-full object-cover mb-2"
                          alt={title}
                        />
                      </a>
                      <span className="font-alata-regular text-dark-silver text-lg ">{publishedAt.toLocaleDateString()}</span>
                      <a
                        target="_blank"
                        href={`https://www.youtube.com/watch?v=${videoId}`}>
                        <span className="font-alata-regular text-old-silver leading-4 pt-2 ">
                          {title}
                        </span>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
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
