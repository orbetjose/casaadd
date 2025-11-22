export type Menu = {
  name: string;
  permalink: string;
};

export type infoPost = {
  id: number;
  slug: string;
  date: string;
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
      };
      contenido: string;
    };
    seccion_2: {
      imagen: {
        url: string;
      };
      contenido: string;
    };
    seccion_final: {
      imagen_1: {
        url: string;
      };
      imagen_2: {
        url: string;
      };
      contenido_1: string;
      contenido_2: string;
    };
  };
};

export type infoPageHome = {
  acf: {
    banner: {
      url: string;
    };
    banner_responsive: {
      url: string;
    };
    galeria: {
      imagen: {
        url: string;
      };
    }[];
    beneficios: {
      imagen: {
        url: string;
      };
      titulo: string;
      texto: string;
    }[];
    ser_modelo: {
      imagen: string;
      texto: string;
      titulo: string;
    };
    ser_monitor: {
      imagen: {
        url: string;
      };
      texto: string;
      titulo: string;
    };
    fondo_contador: {
      url: string;
    };
    banner_entrenamiento: {
      url: string;
    };
    fotos_mes: {
      foto: {
        url: string;
      };
      foto_2: {
        url: string;
      };
      mes: string;
      mes_2: string;
    };
  };
};

export type infoPageQuienes = {
  acf: {
    banner: {
      url: string;
    };
    banner_responsive: {
      url: string;
    };
    galeria: {
      imagen: {
        url: string;
      };
    }[];
    quienes_somos: {
      texto: string;
      foto_1: {
        url: string;
      };
      foto_2: {
        url: string;
      };
      titulo_1: string;
      titulo_2: string;
      descripcion_1: string;
      descripcion_2: string;
    };
    somos_casa_add: {
      imagen: {
        url: string;
      };
      titulo: string;
      texto: string;
    }[];
    nos_atrevimos_a_sonar: {
      texto: string;
      foto_1: {
        url: string;
      };
      foto_2: {
        url: string;
      };
      titulo_1: string;
      titulo_2: string;
      descripcion_1: string;
      descripcion_2: string;
    };
  };
};

export type infoPageBeneficios = {
  acf: {
    banner: {
      url: string;
    };
    banner_responsive: {
      url: string;
    };
    beneficios: {
      imagen: {
        url: string;
      };
      titulo: string;
      descripcion: string;
    }[];
    trafico_posicionamiento: {
      titulo: string;
      subtitulo: string;
      descripcion: string;
      imagen: {
        url: string;
      };
    };
    banner_casadd: string;
  };
};
