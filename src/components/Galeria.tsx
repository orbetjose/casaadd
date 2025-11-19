type GaleriaProps = {
  foto1?: string;
  foto2?: string;
  foto3?: string;
};

export default function Galeria({ foto1, foto2, foto3 }: GaleriaProps) {

  return (
    <div className="md:h-[75vh]">
      <div className="flex md:flex-row flex-col ">
        <picture className="flex-1">
          <img
            src={foto1}
            alt="Foto 1 modelo"
            className="object-cover galeria md:object-top w-full md:h-[75vh] h-[35vh]"
          />
        </picture>
        <picture className="flex-1">
          <img
            src={foto2}
            alt="Foto 2 modelo"
            className="object-cover galeria md:object-top w-full md:h-[75vh] h-[35vh]"
          />
        </picture>
        <picture className="flex-1">
          <img
            src={foto3}
            alt="Foto 3 modelo"
            className="object-cover galeria md:object-top w-full md:h-[75vh] h-[35vh] "
          />
        </picture>
      </div>
    </div>
  );
}
