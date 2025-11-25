
export default function BannerUnete() {
  const domain = import.meta.env.VITE_WP_DOMAIN;

  return (
    <>
      <div className="overflow-hidden ">
        <div className="flex md:h-[80vh]">
          <div className="flex-1 md:block hidden">
            <picture>
              <img
                src={`${domain}wp-content/uploads/2025/11/banner-unete-1.webp`}
                className="h-full scale-102 w-full object-cover object-top"
                alt=""
              />
            </picture>
          </div>
          <div className="flex-1 relative h-[80vh] scale-98 bg-black-unete ">
            <div className="border absolute border-white top-1/2 left-1/2 translate-middle px-6 pb-6 pt-4 w-70">
              <img
                className="h-18 mx-auto"
                src={`${domain}wp-content/uploads/2025/11/logo-add-4.png`}
                alt="Logo casa add"
              />
              <a
                href="/trabaja-con-nosotros"
                className="block bg-white w-fit mx-auto py-2 px-3 mt-5 -mb-13 font-alata-regular uppercase">
                Trabaja con nosotros
              </a>
            </div>
          </div>
          <div className="flex-1 md:block hidden">
            <picture>
              <img
                src={`${domain}wp-content/uploads/2025/11/banner-unete-2.webp`}
                className="h-full scale-102 w-full object-cover object-top"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>

    </>
  );
}
