export default function BannerUnete() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <div className="overflow-hidden ">
      <div className="flex md:h-[80vh]">
        <div className="flex-1 md:block hidden">
          <picture>
            <img
              src={`${domain}wp-content/uploads/2025/09/Homee_02.webp`}
              className="h-full scale-102 w-full object-cover object-top"
              alt=""
            />
          </picture>
        </div>
        <div className="flex-1 relative h-[80vh] scale-98 bg-black-unete ">
          <div className="border absolute border-white top-1/2 left-1/2 translate-middle px-6 pb-6 pt-4 ">
            <span className="font-alata-regular text-old-silver text-center block pb-4 uppercase">Casa</span>
            <img
              className=""
              src={`${domain}wp-content/uploads/2025/09/ADD.png`}
              alt=""
            />
            <a
              href="/contacto"
              className="block bg-white w-fit mx-auto py-2 px-3 mt-5 -mb-13 font-alata-regular uppercase">
              Trabaja con nosotros
            </a>
          </div>
        </div>
        <div className="flex-1 md:block hidden">
          <picture>
            <img
              src={`${domain}wp-content/uploads/2025/09/Homee_05.webp`}
              className="h-full scale-102 w-full object-cover object-top"
              alt=""
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
