import { getPostInfo } from "../helpers/wp";
import type { infoPost } from "../types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import NotFound from "./NotFound";

export default function Posts() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  const [infoPost, setinfoPost] = useState<infoPost[]>([]);
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      getPostInfo(slug)
        .then((data) => {
          if (data.length === 0) {
            setNotFound(true);
          } else {
            setinfoPost(data);
          }
        })
        .catch(() => setNotFound(true))
        .finally(() => setLoading(false));
    }
  }, [slug]);

  console.log(infoPost);
  if (loading) return <p>Cargando...</p>;
  if (notFound) return <NotFound />;
  return (
    <main className="seccion-blog">
      <section className="relative md:max-h-[95vh] 2xl:h-[70vh] ">
        <picture>
          <img
            src={infoPost[0].acf?.banner?.url}
            className="w-full object-cover md:max-h-[95vh] md:block hidden 2xl:h-[70vh] object-bottom"
            alt="Banner contacto Casa ADD"
          />
          <img
            src={infoPost[0].acf?.banner_responsive?.url}
            className="md:hidden"
            alt="Banner contacto Casa ADD"
          />
          <h1 className="absolute right-4 bottom-2 !text-white !text-2xl">{infoPost[0].title.rendered}</h1>
        </picture>
      </section>
      <section className="mt-10">
        <div className="flex flex-col md:flex-row items-center justify-evenly md:max-w-6xl mx-auto px-4 md:px-0 ">
          <div className="md:w-2/5 flex items-center">
            <img
              src={infoPost[0].acf?.seccion_1?.imagen.url}
              alt=""
            />
          </div>
          <div
            className="md:w-2/5 font-prompt-light contenido"
            dangerouslySetInnerHTML={{ __html: infoPost[0].acf?.seccion_1?.contenido }}></div>
        </div>
      </section>
      <section className="my-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly md:max-w-6xl mx-auto px-4 md:px-0 ">
          <div
            className="md:w-2/5 font-prompt-light contenido"
            dangerouslySetInnerHTML={{ __html: infoPost[0].acf?.seccion_2?.contenido }}></div>
          <div className="md:w-2/5 flex items-center">
            <img
              src={infoPost[0].acf?.seccion_2?.imagen.url}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="md:max-w-6xl mx-auto ">
        <div className="flex justify-center ">
            <img src={infoPost[0].acf?.seccion_final?.imagen_1.url} alt="" className="object-contain md:max-h-[70vh] hidden md:block" />
            <img src={infoPost[0].acf?.seccion_final?.imagen_2.url} alt="" className="object-cover md:max-h-[70vh]" />
        </div>
        <div className="px-4 md:px-0 flex flex-col md:flex-row gap-4 md:gap-0 justify-evenly py-10 font-prompt-light">
            <div className="md:w-2/5" dangerouslySetInnerHTML={{ __html: infoPost[0].acf?.seccion_final?.contenido_1 }}></div>
            <div className="md:w-2/5" dangerouslySetInnerHTML={{ __html: infoPost[0].acf?.seccion_final?.contenido_2 }}></div>
        </div>
      </section>
    </main>
  );
}
