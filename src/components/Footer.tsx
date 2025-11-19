export default function Footer() {
  const domain = import.meta.env.VITE_WP_DOMAIN;
  return (
    <footer className="pb-10">
      <section>
        <img
          className=" h-16 md:h-20 w-full object-cover"
          src={`${domain}wp-content/uploads/2025/09/footer-cinta.png`}
          alt="Casa ADD Footer"
        />
        <div className="max-w-5xl mx-auto px-4 md:px-0 justify-between text-pink font-prompt-regular pt-8">
          <div className="md:flex-row flex flex-col gap-4 md:gap-0">
            <div className="flex-1">
              <div className="font-prompt-regular flex flex-col gap-2  mb-2 ">
                <a
                  href={`${domain}wp-content/uploads/2025/10/politica-de-tratamiento-de-datos-personales.pdf`}
                  target="_blank">
                  Política y privacidad
                </a>
                <a
                  href={`${domain}wp-content/uploads/2025/10/politica-de-tratamiento-de-datos-personales.pdf`}
                  target="_blank">
                  Términos y condiciones
                </a>
              </div>
              <div className="border-b-2 border-pink pb-2 w-45"></div>
            </div>
            <div className="flex-1 md:text-center">
              <p>
                <a
                  href="https://api.whatsapp.com/send/?phone=573053746476&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0"
                  target="_blank">
                  WhatsApp: <br />
                  +57 305 374 6476
                </a>
              </p>
            </div>
            <div className="flex-1 md:text-right">
              <p><a href="/contacto">Trabaja con nosotros</a></p>
            </div>
          </div>
          <div className="md:flex-row flex flex-col gap-4 md:gap-0 pt-4">
            <div className="flex-1">
              <div>
                <p className="font-alata-regular leading-5">
                  Síguenos en nuestras <br />
                  redes sociales
                </p>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  target="_blank"
                  href="https://www.instagram.com/casa_add/#">
                  <img
                    className="h-9"
                    src={`${domain}wp-content/uploads/2025/10/logo-instagram.png`}
                    alt=""
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@casa_add?lang=es">
                  <img
                    className="h-9"
                    src={`${domain}wp-content/uploads/2025/10/logo-tiktok.png`}
                    alt=""
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@casaadd94">
                  <img
                    className="h-9"
                    src={`${domain}wp-content/uploads/2025/10/logo-youtube.png`}
                    alt=""
                  />
                </a>
              </div>
              <div></div>
            </div>
            <div className="flex-1 leading-5 md:text-center">
              <p>
                Comunícate con: <br /> <a href="mailto:contacto@casaadd.com">contacto@casaadd.com</a>
              </p>
            </div>
            <div className="flex-1 leading-5 md:text-right">
              <p>
                ¿Estás interesad@ en hacer <br />
                parte del equipo Casa ADD?
              </p>
              <a
                href="/contacto"
                className="mt-4 bg-pink text-white block w-fit px-2 py-1 rounded-sm md:ms-auto">
                Hazte notar
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0">
          <p className="font-prompt-semibold text-center pt-10 md:w-2/5 mx-auto leading-4 text-pink text-sm">
           Agency 2025. Todos los derechos reservados. Todas los modelos que aparecen en este sitio web son mayores de edad. <br /> Sitio realizado por: Agencia Iccana.

          </p>
        </div>
      </section>
    </footer>
  );
}
