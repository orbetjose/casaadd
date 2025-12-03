import AOS from "aos";
import { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({ once: false, mirror: true });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          AOS.refreshHard(); // 🔥 fuerza reanimación
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <footer
      className="pb-10 "
      ref={footerRef}>
      <section className="bg-light-silver">
        <img
          className=" h-16 md:h-20 2xl:h-25 w-full object-cover"
          src={`${domain}wp-content/uploads/2025/09/footer-cinta.png`}
          alt="Casa ADD Footer"
        />
        <div className="max-w-5xl mx-auto px-4 md:px-0 justify-between text-old-silver font-prompt-regular pt-8">
          <div className="md:flex-row flex flex-col gap-4 md:gap-0">
            <div className="flex-1">
              <div
                className="font-prompt-regular flex flex-col gap-2  mb-2 items-center md:items-start"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-mirror="true"
                data-aos-duration="300">
                <span className="font-alata-regular">Casa ADD</span>
                <div className="flex flex-col text-sm">
                  <a
                    className="underline"
                    href={`${domain}wp-content/uploads/2025/10/politica-de-tratamiento-de-datos-personales.pdf`}
                    target="_blank">
                    Política y privacidad
                  </a>
                  <a
                    className="underline"
                    href={`${domain}wp-content/uploads/2025/10/politica-de-tratamiento-de-datos-personales.pdf`}
                    target="_blank">
                    Términos y condiciones
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div
                className="font-prompt-regular flex flex-col gap-2  mb-2 items-center md:items-start"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-mirror="true"
                data-aos-duration="600">
                <span className="font-alata-regular">Contacto</span>
                <div className="flex flex-col text-sm">
                  <span>
                    Whatsapp:{" "}
                    <a
                      className="underline"
                      href="https://api.whatsapp.com/send/?phone=573053746476&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0"
                      target="_blank">
                      +57 305 374 6476
                    </a>
                  </span>
                  <span>
                    Correo:{" "}
                    <a
                      className="underline"
                      href="mailto:contacto@casaadd.com">
                      contacto@casaadd.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2  mb-2 items-center md:items-start" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-mirror="true"
                data-aos-duration="900">
                <span>
                  <span                    
                    className="font-alata-regular leading-3">
                    ¿Estás interesad@ en hacer <br />parte del equipo Casa ADD?
                  </span>
                </span>
                <a
                  href="/contacto"
                  className="mt-2 bg-pink text-white block w-fit px-2 py-1 rounded-sm text-sm">
                  Hazte notar
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2  mb-2 items-center md:items-start" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-mirror="true"
                data-aos-duration="1200">
                <span className="font-alata-regular">Síguenos en nuestras redes</span>
                <div className="flex justify-start gap-2 pt-2">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/casa_add/#">
                    <img
                      className="h-8"
                      src={`${domain}wp-content/uploads/2025/10/logo-instagram.png`}
                      alt=""
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@casa_add?lang=es">
                    <img
                      className="h-8"
                      src={`${domain}wp-content/uploads/2025/10/logo-tiktok.png`}
                      alt=""
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@casaadd94">
                    <img
                      className="h-8"
                      src={`${domain}wp-content/uploads/2025/10/logo-youtube.png`}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0 hidden">
          <p className="font-prompt-semibold pt-10 md:w-2/5 mx-auto leading-4 text-pink text-sm">
            Agency 2025. Todos los derechos reservados. Todas los modelos que aparecen en este sitio web son mayores de
            edad. <br /> Sitio realizado por: Agencia Iccana.
          </p>
        </div>
      </section>
    </footer>
  );
}
