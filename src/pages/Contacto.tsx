import type { MouseEvent } from "react";
import Convenios from "../components/Convenios";
import Galeria from "../components/Galeria";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ContactFormMonitor from "../components/ContactFormMonitor";
import ContactFormModelo from "../components/ContactFormModelo";

export default function Contacto() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  const [typeQuestion, setTypeQuestion] = useState("modelo");

  const activeQuestion = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.classList.toggle("!max-h-[500px]");
  };

  const actionSlide = () => {
    const respuestasModelo = document.querySelectorAll(".respuesta-modelo");
    respuestasModelo.forEach((element) => {
      element.classList.remove("max-h-[500px]");
    });
  };

  return (
    <>
      <section className="relative md:max-h-[95vh] 2xl:h-[70vh] ">
        <picture>
          <img
            src={`${domain}wp-content/uploads/2025/11/Banner01.webp`}
            className="w-full object-cover md:max-h-[95vh] md:block hidden 2xl:h-[70vh] object-bottom"
            alt="Banner contacto Casa ADD"
          />
          <img
            src={`${domain}wp-content/uploads/2025/11/Banner01-4.webp`}
            className="md:hidden"
            alt="Banner contacto Casa ADD"
          />
        </picture>
      </section>
      <section className="">
        <div className="flex flex-col md:grid  md:grid-cols-2">
          <div className=" relative bg-antiflash-white pt-10 pb-20 md:ps-10">
            <div className="px-4 md:px-0 flex items-center gap-2 font-alata-regular text-old-silver pb-8 text-lg">
              <button
                className={`uppercase cursor-pointer button-modelo ${typeQuestion === "modelo" ? "active" : ""} `}
                onClick={() => setTypeQuestion("modelo")}>
                Modelo
              </button>
              <span className="uppercase">/</span>
              <button
                className={`uppercase cursor-pointer button-monitor ${typeQuestion === "monitor" ? "active" : ""}`}
                onClick={() => setTypeQuestion("monitor")}>
                Monitor
              </button>
            </div>
            <div className="text-old-silver px-4 md:px-0">
              <p className="font-alata-regular font-bold uppercase text-xl pb-1">¿Tienes preguntas?</p>
              <p className="font-prompt-regular">Aquí te las respondemos.</p>
            </div>
            <div
              className={`pt-8 px-4 md:px-0 md:pe-10 respuestas-modelo ${typeQuestion === "modelo" ? "" : "hidden"}`}>
              <button
                className="swiper-button-prev swiper-button-prev-preguntas-modelo"
                onClick={actionSlide}></button>
              <button
                className="swiper-button-next swiper-button-next-preguntas-modelo"
                onClick={actionSlide}></button>

              <Swiper
                watchOverflow={false}
                loop={false}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".swiper-button-prev-preguntas-modelo",
                  nextEl: ".swiper-button-next-preguntas-modelo",
                }}
                slidesPerView={1}>
                <SwiperSlide>
                  <div className="space-y-6">
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cuál es el rango de edad permitido para aplicar como modelo</p>
                      <p className="pb-3">
                        Aceptamos modelos mayores de 18 años con cédula de identidad o pasaporte. No hay límite de edad
                        superior.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Necesito experiencia previa como modelo webcam?</p>
                      <p className="pb-3">
                        No. En Casa ADD te formamos desde cero con acompañamiento personalizado y herramientas
                        profesionales.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cuánto puedo ganar trabajando como modelo?</p>
                      <p className="pb-3">
                        Los ingresos dependen de tu constancia, perfil y desempeño. Tenemos modelos que generan desde
                        ingresos básicos hasta cifras muy altas mensuales. En tu entrevista te damos un estimado
                        realista según tu perfil y experiencia.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Es obligatorio mostrar el rostro o trabajar desnuda?</p>
                      <p className="pb-3">
                        Si es obligatorio mostrar el rostro ya que las plataformas exigen esto para garantizar que no
                        haya suplantación de identidad. En cuanto a trabajar desnuda, trabajamos contigo para construir
                        un perfil que se adapte a tu comodidad y tus límites. Existen múltiples estilos de modelaje.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué horarios manejan las modelos?</p>
                      <p className="pb-3">
                        Trabajamos por turnos, elige el que mejor se adapte a ti. Lo importante es el compromiso y la
                        constancia: <br />
                        Mañana: 6:30 am - 2:30 pm <br />
                        Tarde: 2:30 PM - 10:30 PM <br />
                        Noche: 10:30 pm - 6:30
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cuántas horas debo trabajar?</p>
                      <p className="pb-3">
                        Nuestros horarios tienen 8 horas, pero realmente te solicitamos 6 horas de conexión. Si cumples
                        tus 6 horas y deseas terminar la transmisión lo puedes hacer. Pero si quieres continuar y hacer
                        hasta 7 u 8 horas, también lo puedes hacer.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="space-y-6">
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Dónde queda el estudio? ¿Es seguro?</p>
                      <p className="pb-3">
                        Estamos ubicados en Bogotá, en los barrios Teusaquillo y Polo. Nuestro espacio es privado,
                        seguro, profesional y cuenta con equipo de seguridad, monitoreo y espacios confortables.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver max-h-18 2xl:md:max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cómo se da el crecimiento de las modelos y qué beneficios obtienen?</p>
                      <p className="pb-3">
                        Nuestro programa funciona por niveles. A medida que avanzas, vas desbloqueando beneficios
                        exclusivos.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Como es el proceso de onboarding o iniciación en Casa ADD?</p>
                      <p className="pb-3">
                        Te acompañamos intensamente durante tus primeros 7 días con una guía personalizada. En este
                        tiempo conocerás nuestras herramientas y procesos, recibirás formación básica, perfilamiento, y
                        tendrás sesiones de apoyo.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cuánto se gana? ¿Cómo funcionan los porcentajes?</p>
                      <p className="pb-3">La división de ganancias funciona así:</p>
                      <p className="pb-1">Condición cumplida % para la modelo % para la agencia</p>
                      <p className="pb-1">Base (todas las modelos) quincenal 60% 40%</p>
                      <p className="pb-1">Si asistes más de 10 días a la quincena 65% 35% </p>
                      <p className="pb-1">Si facturas más de $1.000 USD a la quincena 70% 30%</p>
                      <p className="pb-1">Si facturas más de $2.000 USD a la quincenal 80% 20%</p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cada cuánto se paga en Casa ADD?</p>
                      <p className="pb-3">
                        En Casa ADD trabajamos por bisemanas, es decir, cortes de 2 semanas completas que van de lunes a
                        domingo.
                      </p>
                      <p className="pb-3">
                        Pagamos cada 15 días, exclusivamente los jueves, sobre lo que hayas trabajado durante ese corte.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué es una bisemana?</p>
                      <p className="pb-3">
                        Una bisemana es un periodo de dos semanas (14 días), en el que medimos tu asistencia y
                        facturación.
                      </p>
                      <p className="pb-1">Cada bisemana se compone de:</p>
                      <p className="pb-1">Semana 1: Lunes a domingo</p>
                      <p className="pb-1">Semana 2: Lunes a domingo siguiente</p>
                      <p className="pb-1">El pago se realiza el jueves siguiente al cierre de la segunda semana.</p>
                      <p className="pb-1">Ejemplo de calendario de pagos:</p>
                      <p className="pb-3"># Bisemana Fechas trabajadas Día de pago</p>
                      <p className="pb-1">BISEMANA 1 Lunes 30 junio - Domingo 13 julio Jueves 17 julio</p>
                      <p className="pb-1">BISEMANA 2 Lunes 14 julio - Domingo 27 julio Jueves 31 julio</p>
                      <p className="pb-1">
                        Importante: Esto te permite tener un ingreso fijo cada 15 días y planificar mejor tus metas y
                        finanzas.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="space-y-6">
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué tipo de acompañamiento me ofrecen como modelo?</p>
                      <p className="pb-3">
                        Tendrás asistencia en vivo para construir posicionamiento en plataforma, producción de contenido
                        personalizado, formación estratégica por medio de capacitaciones semanales, apoyo emocional y
                        acceso a beneficios adicionales como bonos, préstamos y coaching.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-modelo text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué debo hacer para aplicar?</p>
                      <p className="pb-3">
                        Llena el formulario a continuación y nuestro equipo de selección te contactará para una
                        entrevista inicial.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              className={`pt-8  px-4 md:px-0 md:pe-10 respuestas-monitor ${
                typeQuestion === "monitor" ? "" : "hidden"
              }`}>
              <button
                className="swiper-button-prev swiper-button-prev-preguntas-monitor"
                onClick={actionSlide}></button>
              <button
                className="swiper-button-next swiper-button-next-preguntas-monitor"
                onClick={actionSlide}></button>

              <Swiper
                watchOverflow={false}
                loop={false}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".swiper-button-prev-preguntas-monitor",
                  nextEl: ".swiper-button-next-preguntas-monitor",
                }}
                slidesPerView={1}>
                <SwiperSlide>
                  <div className="space-y-6">
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué es un monitor en Casa ADD?</p>
                      <p className="pb-3">
                        Un monitor es un productor de streaming. Es quien diseña, dirige y acompaña la transmisión en
                        vivo para convertirla en una experiencia creativa, estratégica y rentable. El objetivo: que la
                        modelo facture más y que el contenido se destaque.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué es el servicio de streaming?</p>
                      <p className="pb-3">
                        Es la transmisión en vivo de contenido audiovisual. En Casa ADD se trabaja con modelos,
                        tecnología y audiencia para producir shows en tiempo real que conecten emocionalmente y generen
                        ingresos.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué funciones realiza un monitor?</p>
                      <p className="pb-1">- Asistencia en conectividad y resolución de fallas técnicas básicas.</p>
                      <p className="pb-1">- Soporte en plataformas (cam, mensajes, bots, etc.)</p>
                      <p className="pb-1">- Desarrollo de guiones e ideas creativas de venta.</p>
                      <p className="pb-1">- Dirección estratégica en vivo.</p>
                      <p className="pb-1">- Organización de metas y tareas.</p>
                      <p className="pb-1">- Capacitación a modelos.</p>
                      <p className="pb-1">- Registro de avances y reportes operativos.</p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué perfil buscamos?</p>
                      <p className="pb-1">
                        Nos interesan personas creativas, estratégicas y empáticas. Idealmente, que tengan experiencia
                        previa en la industria webcam, o que provengan de áreas como:
                      </p>
                      <p className="pb-1">- Dirección de Cine y Televisión.</p>
                      <p className="pb-1">- Producción Audiovisual.</p>
                      <p className="pb-1">- Comunicación Social.</p>
                      <p className="pb-1">- Publicidad o Mercadeo Digital.</p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué conocimientos técnicos valoramos?</p>
                      <p className="pb-1">- Manejo de cámaras, luz y sonido.</p>
                      <p className="pb-1">- Storytelling y redacción de guiones.</p>
                      <p className="pb-1">- Dirección de actores y actrices.</p>
                      <p className="pb-1">- Plataformas digitales y herramientas de streaming.</p>
                      <p className="pb-1">- Análisis de públicos y estrategias de venta en vivo.</p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Qué habilidades blandas son esenciales?</p>
                      <p className="pb-1">- Empatía para entender y cuidar a las modelos.</p>
                      <p className="pb-1">- Respeto por la intimidad, los límites y la diversidad.</p>
                      <p className="pb-1">- Escucha activa y comunicación clara.</p>
                      <p className="pb-1">- Resolución de conflictos.</p>
                      <p className="pb-1">- Organización, liderazgo y trabajo colaborativo.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="space-y-6">
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cuánto gana un monitor en Casa ADD?</p>
                      <p className="pb-1">
                        El salario de un monitor en Casa ADD está compuesto por un sueldo base, bonificaciones y
                        comisiones. Aquí te lo explicamos paso a paso:
                      </p>
                      <p className="pb-1">
                        Sueldo base <br />
                        Turno Salario base <br />
                        Mañana o Tarde (6 a 2 / 2 a 10) $1.623.500 + prestaciones <br />
                        Noche (10 p.m. a 6 a.m.) $1.723.500 + prestaciones <br />A esto se suma el pago completo de
                        salud, pensión y riesgos laborales.
                      </p>
                      <p className="pb-1">
                        Bonificaciones mensuales <br />
                        Puedes acceder a dos bonos fijos mensuales, si cumples con criterios básicos: <br />
                        Bono de cumplimiento - $188.000 <br />
                        Por ejecutar correctamente las acciones base de los planes de trabajo asignados (asistencia,
                        tareas, seguimiento).
                        <br /> Bono de formación - $188.000 <br />
                        Si completas el proceso de capacitación interna de Casa ADD (una vez aprobado, este bono es
                        permanente).
                      </p>
                      <p className="pb-1">
                        Con ambos bonos, el ingreso mensual fijo puede llegar a: <br />
                        $2.000.000 para turnos de mañana o tarde <br />
                        $2.100.000 para turno nocturno
                      </p>
                      <p className="pb-1">
                        Comisiones mensuales (adicionales) <br />
                        Además del salario fijo y bonos, puedes acceder a comisiones mensuales por el rendimiento del
                        equipo de modelos con el que trabajas. <br />
                        Nuestras comisiones están dolarizadas, y se calculan según la facturación del equipo que
                        acompañas. <br />
                        El rango de comisiones va de $40 USD hasta $150 USD por integrante del equipo. <br />
                        Estas se pagan de forma adicional, sin afectar tus bonos ni tu salario base.
                      </p>
                      <p className="pb-1">
                        Bonos + comisiones = mayores ingresos <br />
                        Es posible que un monitor que cumple su trabajo y tiene buen equipo de modelos pueda recibir
                        entre $2.500.000 y $3.000.000 mensuales.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿El manejo de inglés es importante?</p>
                      <p className="pb-1">
                        Sí. El buen manejo del inglés es un factor que mejora sustancialmente el desempeño en esta
                        vacante, ya que muchas interacciones y plataformas están en este idioma.
                      </p>
                      <p className="pb-1">No es obligatorio, pero es un diferencial competitivo.</p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-18 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Es obligatorio tener estudios universitarios?</p>
                      <p className="pb-1">
                        No. Aunque valoramos estudios afines, lo que más nos importa es tu capacidad para pensar
                        creativamente, resolver problemas, dirigir procesos y trabajar en equipo.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Es un trabajo remoto o presencial?</p>
                      <p className="pb-1">Es un trabajo 100% presencial.</p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cómo son los horarios?</p>
                      <p className="pb-1">Turnos fijos de 8 horas. Puedes elegir según disponibilidad:</p>
                      <p className="pb-1">
                        Turno Horario <br />
                        Mañana 6:00 am - 2:00 pm <br />
                        Tarde 2:00 pm - 10:00 pm <br />
                        Noche 10:00 pm - 6:00 am
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="space-y-6">
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cómo puedo aplicar?</p>
                      <p className="pb-1">
                        Llena el formulario al final de esta página. Nuestro equipo de selección te contactará si tu
                        perfil está alineado con lo que buscamos.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Cuántos días debo ir a trabajar?</p>
                      <p className="pb-1">Cada monitor en Casa ADD trabaja cinco días a la semana y descansa dos.</p>
                      <p className="pb-1">
                        Semanalmente se organiza el cronograma de cada integrante del equipo, definiendo los cinco días
                        de trabajo activo y los dos días de descanso continuo o intercalado, según necesidad operativa y
                        disponibilidad personal.
                      </p>
                    </div>
                    <div
                      className="font-prompt-regular respuesta-monitor text-dark-silver px-4 border border-old-silver md:max-h-14 max-h-14 overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      onClick={activeQuestion}>
                      <p className="py-4">+ ¿Los turnos son rotativos?</p>
                      <p className="pb-1">No. En Casa ADD los turnos no son rotativos.</p>
                      <p className="pb-1">
                        Valoramos la estabilidad en los procesos y la capacidad de adaptarse a un ritmo fijo, por eso
                        cada monitor debe acoplarse a un turno específico: mañana, tarde o noche, según disponibilidad y
                        vacantes.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="">{typeQuestion === "monitor" ? <ContactFormMonitor /> : <ContactFormModelo />}</div>
        </div>
      </section>
      <Galeria 
        foto1={`${domain}wp-content/uploads/2025/11/Foto-01.1.webp`}
        foto2={`${domain}wp-content/uploads/2025/11/Foto-01.0.webp`}
        foto3={`${domain}wp-content/uploads/2025/11/Foto-01.2.webp`}
      />
      <section className="pt-16 py-10 bg-light-silver">
        <Convenios />
      </section>
    </>
  );
}
