export type Menu = {
  name: string;
  permalink: string;
};

export type infoPost = {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    banner: {
      url: string;
    };
    banner_responsive: {
      url: string;
    };
    seccion_1: {
      imagen: {
        url: string;
      }
      contenido: string;
    };
    seccion_2: {
      imagen: {
        url: string;
      }
      contenido: string;
    };
    seccion_final: {
      imagen_1: {
        url: string;
      }
      imagen_2: {
        url: string;
      }
      contenido_1: string;
      contenido_2: string;
    };
  };
};
