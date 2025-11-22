import AOS from "aos";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import BannerUnete from "../components/BannerUnete";
import Marcas from "../components/Marcas";
import Galeria from "../components/Galeria";
import { getPageInfo } from "../helpers/wp";
import type { infoPageHome } from "../types";

export default function Home() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  const [infoPage, setPageInfo] = useState<infoPageHome[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    getPageInfo("casa-add")
      .then((data) => setPageInfo(data))
      .catch((error) => console.error("Error fetching infoPage:", error));
  }, []);

  console.log(infoPage);

  return (
    <>
      <section className="relative md:h-[90vh] 2xl:h-[70vh] ">
        <picture>
          <img
            src={infoPage[0]?.acf?.banner?.url}
            className="w-full object-cover md:h-[90vh] 2xl:h-[70vh] md:block hidden"
            alt="Banner home Casa ADD"
          />
          <img
            src={`${domain}wp-content/uploads/2025/11/bannerhome-responsive.webp`}
            className="md:hidden"
            alt="Banner home Casa ADD"
          />
        </picture>
      </section>
      <section className="pt-10">
        <Galeria
          foto1={infoPage[0]?.acf?.galeria[0]?.imagen.url}
          foto2={infoPage[0]?.acf?.galeria[1]?.imagen.url}
          foto3={infoPage[0]?.acf?.galeria[2]?.imagen.url}
        />
      </section>
      <Marcas />
      <section>
        <BannerUnete />
      </section>
      <section>
        <div className="md:max-w-6xl 2xl:max-w-8xl mx-auto py-14 px-4 md:px-0">
          <h4 className="uppercase font-alata-regular text-old-silver text-2xl pb-4 leading-5">Beneficios</h4>
          <div className="flex md:flex-row flex-col gap-4">
            <div className="md:w-[20%] font-alata-regular text-old-silver leading-5">
              <img
                src={infoPage[0]?.acf?.beneficios[0]?.imagen.url}
                className="md:h-90 h-80 w-full object-cover object-top md:object-center"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold text-lg pt-4 leading-5">
                {infoPage[0]?.acf?.beneficios[0]?.titulo}
              </p>
              <p>{infoPage[0]?.acf?.beneficios[0]?.texto}</p>
            </div>
            <div className="md:w-[20%] font-alata-regular text-old-silver leading-5">
              <img
                src={infoPage[0]?.acf?.beneficios[1]?.imagen.url}
                className="h-80 w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold text-lg pt-4 ">
                {infoPage[0]?.acf?.beneficios[1]?.titulo}
              </p>
              <p>{infoPage[0]?.acf?.beneficios[1]?.texto}</p>
            </div>
            <div className="md:w-[20%] font-alata-regular text-old-silver leading-5">
              <img
                src={infoPage[0]?.acf?.beneficios[2]?.imagen.url}
                className="h-80 w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold text-lg pt-4 ">
                {infoPage[0]?.acf?.beneficios[2]?.titulo}
              </p>
              <p>{infoPage[0]?.acf?.beneficios[2]?.texto}</p>
            </div>

            <div className="md:w-[40%] font-alata-regular text-old-silver leading-5">
              <img
                src={infoPage[0]?.acf?.beneficios[3]?.imagen.url}
                className="md:h-70 h-80 w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold text-lg pt-4">
                {infoPage[0]?.acf?.beneficios[3]?.titulo}
              </p>
              <p>{infoPage[0]?.acf?.beneficios[3]?.texto}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8">
        <div className="md:flex md:max-w-6xl 2xl:max-w-8xl mx-auto">
          <div className="flex-1 text-old-silver ">
            <h3 className="ps-4 pb-4 font-alata-regular font-bold uppercase text-lg text-old-silver">Ser modelo</h3>
            <div className="overflow-hidden">
              <img
                src={infoPage[0]?.acf?.ser_modelo?.imagen}
                alt="Imagen ser modelo"
                className="2xl:h-[65vh] md:h-[75vh] w-full object-contain 2xl:object-cover 2xl:object-bottom-right hover:scale-110 transition-all duration-200"
              />
            </div>

            <p className="ps-4 pt-2 uppercase font-prompt-semibold font-bold">{infoPage[0]?.acf?.ser_modelo?.titulo}</p>
            <p className="ps-4 pt-1 uppercase font-alata-regular md:max-w-2/3">{infoPage[0]?.acf?.ser_modelo?.texto}</p>
          </div>
          <div className="flex-1 text-old-silver pt-6 md:pt-0">
            <h3 className="ps-4 pb-4 font-alata-regular font-bold uppercase text-lg text-pink">Ser monitor</h3>
            <div className="overflow-hidden">
              <img
                src={infoPage[0]?.acf?.ser_monitor?.imagen.url}
                className="2xl:h-[65vh] md:h-[75vh] w-full object-contain 2xl:object-cover object-bottom hover:scale-110 transition-all duration-200 "
                alt="Imagen ser monitor"
              />
            </div>
            <p className="ps-4 pt-2 uppercase font-prompt-semibold font-bold">
              {infoPage[0]?.acf?.ser_monitor?.titulo}
            </p>
            <p className="ps-4 pt-1 uppercase font-alata-regular md:max-w-2/3">
              {infoPage[0]?.acf?.ser_monitor?.texto}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="md:h-[75vh] 2xl:h-[70vh] h-screen relative">
          <img
            className="md:h-[75vh] 2xl:h-[70vh] h-screen w-full object-cover absolute"
            src={infoPage[0]?.acf?.fondo_contador?.url}
            alt=""
          />
          <div className="absolute w-full top-1/2 left-1/2 translate-middle">
            <h3 className="text-white z-10  text-center uppercase text-3xl font-alata-regular pb-14">
              Modelos con proyeccion
            </h3>
            <div className=" text-white flex flex-col md:flex-row gap-4 md:gap-20 justify-center z-10 font-alata-regular">
              <div className="">
                <span className="block text-center text-4xl pb-4">
                  +{" "}
                  <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    end={120}
                    duration={1}
                  />
                </span>
                <span className="block text-center text-xl">Modelos activas</span>
              </div>
              <div className="">
                <span className="block text-center text-4xl pb-4">
                  +{" "}
                  <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    end={40}
                    duration={1}
                  />
                </span>
                <span className="block text-center text-xl">Rooms full equipadas</span>
              </div>
              <div className="">
                <span className="block text-center text-4xl pb-4">
                  <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    end={8}
                    duration={1}
                  />
                </span>
                <span className="block text-center text-xl">Años cambiando vidas</span>
              </div>
              <div className="">
                <span className="block text-center text-4xl pb-4">
                  +{" "}
                  <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    end={10}
                    duration={1}
                  />
                </span>
                <span className="block text-center text-xl">Marcas aliadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="md:max-w-6xl mx-auto pb-16">
          <h3 className="text-center font-alata-regular text-old-silver uppercase text-2xl font-bold pb-12">
            Entrenamiento continúo
          </h3>
          <div className="md:flex-row flex flex-col gap-6 2xl:gap-0 2xl:justify-between justify-center font-prompt-regular text-old-silver md:gap-12 text-lg">
            <div>
              <img
                src={`${domain}wp-content/uploads/2025/09/check.png`}
                className="mx-auto h-4"
                alt=""
              />
              <span className="block text-center pt-4">
                Capacitación inicial <br /> personalizada
              </span>
            </div>
            <div>
              <img
                src={`${domain}wp-content/uploads/2025/09/check.png`}
                className="mx-auto h-4"
                alt=""
              />
              <span className="block text-center pt-4">
                Talleres <br /> semanales{" "}
              </span>
            </div>
            <div>
              <img
                src={`${domain}wp-content/uploads/2025/09/check.png`}
                className="mx-auto h-4"
                alt=""
              />
              <span className="block text-center pt-4">
                Sesiones <br />
                de coaching
              </span>
            </div>
            <div>
              <img
                src={`${domain}wp-content/uploads/2025/09/check.png`}
                className="mx-auto h-4"
                alt=""
              />
              <span className="block text-center pt-4">
                Asesoría en <br />
                marca personal
              </span>
            </div>
            <div>
              <img
                src={`${domain}wp-content/uploads/2025/09/check.png`}
                className="mx-auto h-4"
                alt=""
              />
              <span className="block text-center pt-4">Perfilamiento</span>
            </div>
          </div>
          <a
            href="/beneficios"
            className="block mx-auto bg-old-silver text-white font-prompt-regular w-fit mt-12 2xl:mt-16 px-4 py-1 rounded text-lg">
            Más sobre ADD Training
          </a>
        </div>
        <div>
          <picture>
            <img
              className="w-full h-[40vh] md:h-[75vh] 2xl:h-[70vh] object-cover"
              src={`${domain}wp-content/uploads/2025/11/banner-normal.webp`}
              alt=""
            />
          </picture>
        </div>
      </section>
      <section className="py-16 md:max-w-6xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
        <div className="text-old-silver pb-8">
          <h3 className="font-alata-regular text-2xl font-bold pb-2">ADD Star</h3>
          <p className="font-prompt-regular md:w-1/2">
            Cada mes, elegimos las fotos más top de nuestros shoots y la convertimos en portada,destacando las imágenes
            que más atención reciben en nuestra comunidad de redes.
          </p>
        </div>
        <div className="md:flex-row flex justify-center flex-col gap-8">
          <div className="flex-1">
            <img
              src={infoPage[0]?.acf?.fotos_mes?.foto.url}
              alt="Casa ADD Octubre poster"
              className="max-h-[100vh] 2xl:max-h-[80vh] w-full object-cover object-top border-b-1 border-pink-postale"
            />
            <span className="uppercase font-prompt-semibold text-lg text-old-silver inline-block pt-2">
              {infoPage[0]?.acf?.fotos_mes?.mes}
            </span>
          </div>
          <div className="md:pt-30 flex-1">
            <img
              src={infoPage[0]?.acf?.fotos_mes?.foto_2.url}
              alt="Casa ADD Noviembre poster"
              className="max-h-[100vh] 2xl:max-h-[80vh] w-full object-cover object-top border-b-1 border-pink-postale"
            />
            <span className="uppercase font-prompt-semibold text-lg text-old-silver inline-block pt-2">
              {infoPage[0]?.acf?.fotos_mes?.mes_2}
            </span>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="md:max-w-6xl mx-auto pb-6 px-4 md:px-0">
          <h3 className="font-alata-regular text-pink text-2xl font-bold uppercase">
            Lo que más me gusta de <br /> CASA ADD
          </h3>
        </div>
        <div>
          <picture>
            <img
              className="w-full h-[75vh] 2xl:h-[70vh] object-cover"
              src={`${domain}wp-content/uploads/2025/09/video-2.webp`}
              alt=""
            />
          </picture>
        </div>
      </section>
      <section className="relative">
        <div className="absolute w-full px-4 md:px-0 top-1/2 left-1/2 translate-middle text-white">
          <h4 className="font-alata-regular uppercase text-center text-lg md:text-3xl pb-2">#demodeloamodelo</h4>
          <p className="font-prompt-regular text-center md:text-lg md:w-2/3 mx-auto">
            Tu experiencia como modelo es única Creamos un programa pensado para ti, donde respondemos tus dudas y
            compartimos perspectivas reales, de modelo a modelo. Conectamos con modelos experimentadas que compartirán
            sus estrategias y aprendizajes para ayudarte a crecer y generar mayores ingresos. Generamos contenido que
            conecta, visibiliza y transmite un mensaje claro: NO ESTÁS SOLA!
          </p>
        </div>
        <picture>
          <img
            className="w-full h-[75vh] 2xl:h-[70vh] object-cover object-bottom"
            src={`${domain}wp-content/uploads/2025/09/banner-prefooter.webp`}
            alt=""
          />
        </picture>
      </section>
    </>
  );
}
