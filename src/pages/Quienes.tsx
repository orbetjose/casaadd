import { useEffect, useState } from "react";
import { getPageInfo } from "../helpers/wp";
import type { infoPageQuienes } from "../types";

export default function Quienes() {
  const [infoPage, setPageInfo] = useState<infoPageQuienes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPageInfo("quienes-somos")
      .then((data) => {
        setPageInfo(data);
      })
      .catch((error) => console.error("Error fetching infoPage:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  return (
    <>
      <section className="relative md:max-h-[95vh]  2xl:h-[70vh]">
        <picture>
          <img
            src={infoPage[0]?.acf.banner.url}
            className="w-full object-cover md:max-h-[95vh]  2xl:h-[70vh] md:block hidden"
            alt="Banner quienes somos Casa ADD"
          />
          <img
            src={infoPage[0]?.acf.banner_responsive.url}
            className="md:hidden"
            alt="Banner quienes somos Casa ADD"
          />
        </picture>
      </section>

      <section className="py-10">
        <div className="flex md:flex-row flex-col md:h-[75vh]">
          <picture className="flex-1">
            <img
              src={infoPage[0]?.acf?.galeria[0].imagen.url}
              alt="Foto modelo 4"
              className="object-cover object-center w-full md:h-[75vh] h-[30vh]"
            />
          </picture>
          <picture className="flex-1">
            <img
              src={infoPage[0]?.acf?.galeria[1].imagen.url}
              alt="Foto modelo 5"
              className="object-cover object-center w-full md:h-[75vh] h-[30vh]"
            />
          </picture>
          <picture className="flex-1">
            <img
              src={infoPage[0]?.acf?.galeria[2].imagen.url}
              alt="Foto modelo 6"
              className="object-cover md:object-center w-full md:h-[75vh] h-[30vh] "
            />
          </picture>
        </div>
      </section>
      <section className="py-20 bg-quienes">
        <div className=" md:max-w-5xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
          <div className="text-old-silver pb-8 2xl:ps-22">
            <h3 className="font-alata-regular text-2xl font-bold pb-2 uppercase">quiénes somos</h3>
            <p className="font-prompt-regular md:w-1/2">{infoPage[0]?.acf?.quienes_somos.texto}</p>
          </div>
          <div className="md:flex-row flex justify-center flex-col gap-8 md:gap-0">
            <div className="flex-1 md:-mr-18">
              <img
                src={infoPage[0]?.acf?.quienes_somos.foto_1.url}
                alt="Quienes somos foto 1"
                className="md:max-h-[100vh] 2xl:max-h-[80vh] object-center w-full md:object-contain"
              />
              <span className="font-alata-regular text-lg text-old-silver inline-block pt-2 md:ps-13 2xl:ps-23">
                {infoPage[0]?.acf?.quienes_somos.titulo_1}
              </span>
              <p className="font-alata-regular text-old-silver md:w-2/3 leading-5 md:ps-13 2xl:ps-23">
                {infoPage[0]?.acf?.quienes_somos.descripcion_1}
              </p>
            </div>
            <div className="md:pt-30 flex-1 md:-ml-18">
              <img
                src={infoPage[0]?.acf?.quienes_somos.foto_2.url}
                alt="Quienes somos foto 2"
                className="md:max-h-[100vh] 2xl:max-h-[80vh] object-center w-full md:object-contain "
              />
              <span className="font-alata-regular text-lg text-old-silver block md:ps-6 2xl:ps-20 md:-mt-5">
                {infoPage[0]?.acf?.quienes_somos.titulo_2}
              </span>
              <p className="font-alata-regular text-old-silver md:w-2/3 leading-5 md:ps-6 2xl:ps-20">
                {infoPage[0]?.acf?.quienes_somos.descripcion_2}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-14">
        <div className="md:max-w-6xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
          <h4 className="uppercase font-alata-regular text-old-silver text-2xl pb-4 leading-5">SOMOS CASA ADD</h4>
          <div className="flex md:flex-row flex-col md:gap-4 gap-8">
            <div className="md:w-[20%] font-alata-regular text-old-silver leading-5">
              <img
                src={infoPage[0]?.acf?.somos_casa_add[0].imagen.url}
                className="h-90 w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold pt-4 ">
                {infoPage[0]?.acf?.somos_casa_add[0].titulo}
              </p>
              <p className="leading-5">{infoPage[0]?.acf?.somos_casa_add[0].texto}</p>
            </div>
            <div className="md:w-[20%] font-alata-regular text-old-silver leading-5">
              <img
                src={infoPage[0]?.acf?.somos_casa_add[1].imagen.url}
                className="h-85 w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold pt-4 ">
                {infoPage[0]?.acf?.somos_casa_add[1].titulo}
              </p>
              <p className="leading-5">{infoPage[0]?.acf?.somos_casa_add[1].texto}</p>
            </div>
            <div className="md:w-[60%] font-alata-regular text-old-silver leading-5">
              <img
                src={infoPage[0]?.acf?.somos_casa_add[2].imagen.url}
                className="w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold pt-4">
                {infoPage[0]?.acf?.somos_casa_add[2].titulo}
              </p>
              <p className="leading-5">{infoPage[0]?.acf?.somos_casa_add[2].texto}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="text-old-silver pb-8 md:max-w-6xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
          <h3 className="font-alata-regular text-2xl font-bold pb-2 uppercase">Nos atrevimos a soñar</h3>
          <p className="font-prompt-regular md:w-1/2">{infoPage[0]?.acf?.nos_atrevimos_a_sonar.texto}</p>
        </div>
        <div className="md:flex-row flex justify-center flex-col gap-8 md:gap-0 2xl:max-w-8xl 2xl:mx-auto">
          <div className="flex-1 ">
            <img
              src={infoPage[0]?.acf?.nos_atrevimos_a_sonar.foto_1.url}
              alt="Quienes somos foto 1"
              className="max-h-[70vh] 2xl:max-h-[80vh] w-full object-cover 2xl:object-left object-center"
            />
            <span className="uppercase font-prompt-semibold text-lg text-old-silver block pt-3 ps-4">
              {infoPage[0]?.acf?.nos_atrevimos_a_sonar.titulo_1}
            </span>
            <p className="text-old-silver font-alata-regular pt-1 ps-4 md:w-2/3 leading-5">
              {infoPage[0]?.acf?.nos_atrevimos_a_sonar.descripcion_1}
            </p>
          </div>
          <div className=" flex-1">
            <img
              src={infoPage[0]?.acf?.nos_atrevimos_a_sonar.foto_2.url}
              alt="Quienes somos foto 2"
              className="max-h-[85vh] 2xl:max-h-[80vh] w-full object-cover 2xl:object-left object-top"
            />
            <span className="uppercase font-prompt-semibold text-lg text-old-silver block pt-3 ps-4">
              {infoPage[0]?.acf?.nos_atrevimos_a_sonar.titulo_2}
            </span>
            <p className="text-old-silver font-alata-regular pt-1 ps-4 md:w-2/3 leading-5">
              {infoPage[0]?.acf?.nos_atrevimos_a_sonar.descripcion_2}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
