export default function Quienes() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <>
      <section className="relative md:max-h-[95vh]  2xl:h-[70vh]">
        <picture>
          <img
            src={`${domain}wp-content/uploads/2025/11/banner-01-quienessomos.webp`}
            className="w-full object-cover md:max-h-[95vh]  2xl:h-[70vh] md:block hidden"
            alt="Banner quienes somos Casa ADD"
          />
          <img
            src={`${domain}wp-content/uploads/2025/11/banner-01.webp`}
            className="md:hidden"
            alt="Banner quienes somos Casa ADD"
          />
        </picture>
      </section>

      <section className="py-10">
        <div className="flex md:flex-row flex-col md:h-[75vh]">
          <picture className="flex-1">
            <img
              src={`${domain}wp-content/uploads/2025/09/foto-4.webp`}
              alt="Foto modelo 4"
              className="object-cover object-center w-full md:h-[75vh] h-[30vh]"
            />
          </picture>
          <picture className="flex-1">
            <img
              src={`${domain}wp-content/uploads/2025/09/foto-5.webp`}
              alt="Foto modelo 5"
              className="object-cover object-center w-full md:h-[75vh] h-[30vh]"
            />
          </picture>
          <picture className="flex-1">
            <img
              src={`${domain}wp-content/uploads/2025/09/foto-6.webp`}
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
            <p className="font-prompt-regular md:w-1/2">
              En Casa ADD diseñamos un espacio seguro, profesional y humano donde las modelos pueden ejercer su
              profesión con total confianza y proyección. Somos una agencia comprometida con el crecimiento personal y
              profesional de cada integrante, brindando las herramientas, la estabilidad y el acompañamiento necesarios
              para que alcancen sus metas y vivan una experiencia de realización plena.
            </p>
          </div>
          <div className="md:flex-row flex justify-center flex-col gap-8 md:gap-0">
            <div className="flex-1 md:-mr-18">
              <img
                src={`${domain}wp-content/uploads/2025/11/ADD01.webp`}
                alt="Quienes somos foto 1"
                className="md:max-h-[100vh] 2xl:max-h-[80vh] object-center w-full md:object-contain"
              />
              <span className="font-alata-regular text-lg text-old-silver inline-block pt-2 md:ps-13 2xl:ps-23">
                Industria con propósito
              </span>
              <p className="font-alata-regular text-old-silver md:w-2/3 leading-5 md:ps-13 2xl:ps-23">Creemos en una industria emergente donde el talento se respeta, se valora y se impulsa.</p>
            </div>
            <div className="md:pt-30 flex-1 md:-ml-18">
              <img
                src={`${domain}wp-content/uploads/2025/11/ADD02.webp`}
                alt="Quienes somos foto 2"
                className="md:max-h-[100vh] 2xl:max-h-[80vh] object-center w-full md:object-contain "
              />
              <span className="font-alata-regular text-lg text-old-silver inline-block pt-2 md:ps-20 2xl:ps-30">Compromiso justo</span>
              <p className="font-alata-regular text-old-silver md:w-2/3 leading-5 md:ps-20 2xl:ps-30">Ofrecemos un entorno con salario competitivo y condiciones transparentes.</p>
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
                src={`${domain}wp-content/uploads/2025/10/foto-12.webp`}
                className="h-90 w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold pt-4 ">Excelencia profesional</p>
              <p className="leading-5">Fomentamos la responsabilidad, la calidad y el profesionalismo en cada acción.</p>
            </div>
            <div className="md:w-[20%] font-alata-regular text-old-silver leading-5">
              <img
                src={`${domain}wp-content/uploads/2025/10/foto-13.webp`}
                className="h-85 w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold pt-4 ">Equipo con empatía</p>
              <p className="leading-5">Inspiramos desde el respeto, la empatía y el reconocimiento mutuo.</p>
            </div>
            <div className="md:w-[60%] font-alata-regular text-old-silver leading-5">
              <img
                src={`${domain}wp-content/uploads/2025/10/foto-14.webp`}
                className="w-full object-cover"
                alt=""
              />
              <p className="uppercase font-semibold font-prompt-semibold pt-4">Sin límites</p>
              <p className="leading-5">Creemos que no existen barreras cuando se trabaja con propósito y dedicación.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="text-old-silver pb-8 md:max-w-6xl 2xl:max-w-8xl mx-auto px-4 md:px-0">
          <h3 className="font-alata-regular text-2xl font-bold pb-2 uppercase">Nos atrevimos a soñar</h3>
          <p className="font-prompt-regular md:w-1/2">
            Nuestra misión es <span className="font-bold">inspirar a nuestras modelos</span>, ofrecerles <span className="font-bold">el mejor soporte creativo</span> y <span className="font-bold">conectarlas con estrategias de negocio efectivas</span> que multipliquen sus oportunidades. Queremos que cada persona que toque nuestra marca descubra habilidades que potencien su mejor versión y las lleve a trascender, dentro y fuera del mundo digital.
          </p>
        </div>
        <div className="md:flex-row flex justify-center flex-col gap-8 md:gap-0 2xl:max-w-8xl 2xl:mx-auto">
          <div className="flex-1 ">
            <img
              src={`${domain}wp-content/uploads/2025/11/Foto-Abajo01.webp`}
              alt="Quienes somos foto 1"
              className="max-h-[70vh] 2xl:max-h-[80vh] w-full object-cover 2xl:object-left object-center"
            />
            <span className="uppercase font-prompt-semibold text-lg text-old-silver block pt-3 ps-4">Comunidad de confianza</span>
            <p className="text-old-silver font-alata-regular pt-1 ps-4 md:w-2/3 leading-5">
              Construimos relaciones basadas en la estabilidad, el apoyo y la comunicación.
            </p>
          </div>
          <div className=" flex-1">
            <img
              src={`${domain}wp-content/uploads/2025/11/Foto-Abajo02.webp`}
              alt="Quienes somos foto 2"
              className="max-h-[85vh] 2xl:max-h-[80vh] w-full object-cover 2xl:object-left object-top"
            />
            <span className="uppercase font-prompt-semibold text-lg text-old-silver block pt-3 ps-4">Realización y libertad</span>
            <p className="text-old-silver font-alata-regular pt-1 ps-4 md:w-2/3 leading-5">
              El éxito comienza cuando una modelo se siente libre, respetada y acompañada para brillar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
