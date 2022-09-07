export default {
  global: {
    componenteFormativo: 'La empresa y la gestión de la información',
    descripcionCurso:
      'En este componente, se da el ingreso al mundo empresarial, iniciando con los fundamentos de conceptos de empresa y sus tipologías, describiendo los métodos o matrices diseñados para realizar diagnóstico organizacional, lo que sumado aporta a que la empresa se direccione a objetivos alcanzables y medibles de acuerdo con su realidad y sus capacidades, se busca además alcanzar nuevos retos convirtiendo debilidades en fortalezas.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/cohete.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/mano.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/pesos.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/tabla.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/images/header/visto.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Empresas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: ' Áreas funcionales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diagnóstico organizacional',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Matrices diagnosticas ',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Instrumentos de recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Grupos de interés',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amador, A. y Oviedo G. (2006). Análisis de competitividad del biodiesel colombiano. Instituto Tecnológico y de Estudios Superiores de Monterrey.',
      link:
        'https://repository.unab.edu.co/bitstream/handle/20.500.12749/1973/2006_Tesis_Amador_Andrea.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Bravo, L., Ramos, P., Tejada, A. y Valenzuela, A. (2019). Perspectiva teórica del diagnóstico organizacional. Revista Venezolana de Gerencia, 24(88), p. 1316 – 1328.',
      link: 'https://www.redalyc.org/journal/290/29062051021/html/',
    },
    {
      referencia:
        'Cardoso, M. y Poveda, N. (2021). Diagnóstico Organizacional y Plan de Mejoramiento para la Microempresa Modas Milenio del municipio de La Mesa, Cundinamarca [Trabajo de grado]. Universidad de Cundinamarca.',
      link:
        'https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/3761/Diagn%c3%b3stico%20organizacional%20y%20plan%20de%20mejoramiento%20para%20la%20microempresa%20modas%20milenio%20del%20municipio%20de%20La%20Mesa-%20Cundinamarca.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Celaya, R., González, N., Ramírez, R. y Valenzuela, C. (2010). Diagnóstico organizacional: una mirada hacia el futuro. Instituto Tecnológico de Sonora [ITSON].',
      link:
        'https://www.itson.mx/publicaciones/pacioli/Documents/no70/43b-diagnostico_organizacional_una_mirada_hacia_el_futuro_noviembre_2010_corregido.pdf ',
    },
    {
      referencia:
        'Código de Comercio. (2020). Artículo 461. Definición de la sociedad de economía mixta.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr014.html#:~:text=ART%C3%8DCULO%20461.,salvo%20disposici%C3%B3n%20legal%20en%20contrario',
    },
    {
      referencia:
        ' Decreto 957 de 2019. [Ministerio de Industria, Comercio y Turismo]. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011.  Junio 5 de 2019.',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      referencia:
        'Gallardo, Y. y Moreno, A. (1999). Aprender a Investigar. Módulo 3. Recolección de la Información. ICFES.',
      link:
        ' https://www.unilibrebaq.edu.co/unilibrebaq/images/CEUL/mod3recoleccioninform.pdf',
    },
    {
      referencia: 'Gerencie.com. (2022). Sociedad Unipersonal.',
      link:
        ' https://www.gerencie.com/las-sociedades-unipersonales-no-existen-en-colombia.html',
    },
    {
      referencia:
        'Matiz, F. y Pérez, A. (2009). Planeando la  Empresa I. Editorial Universidad EAN.',
      link:
        'https://editorial.universidadean.edu.co/acceso-abierto/planeando-la-empresa-i.pdf',
    },
    {
      referencia:
        'Münch, L. (2004). Fundamentos de Administración. Casos y Prácticas. Editorial Trillas.',
    },
    {
      referencia:
        'Pedraza, M., Sastoque, J., Serrano, L. y Tarazona, D. (2015). Diagnóstico organizacional a 100 Mipymes de Fusagasugá [Trabajo de investigación]. Universidad de Cundinamarca.',
      link:
        'https://repositorio.ucundinamarca.edu.co/bitstream/handle/20.500.12558/1349/DIAGNOSTICO%20ORGANIZACIONAL%20A%20100%20MIPYMES%20DE%20FUSAGASUGA.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Robichaud, F. (2018). Mapeo de grupos de interés: Cuándo, por qué y cómo mapear los grupos de interés.',
      link:
        'https://www.boreal-is.com/es/blog/mapeo-partes-interesadas-grupos-interes/',
    },
    {
      referencia:
        'Ramírez, C. (2009) Fundamentos de Administración. Ecoe Ediciones.',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=zXs5DwAAQBAJ&oi=fnd&pg=PP1&dq=Libros+acerca+de+administraci%C3%B3n+y+concepto+de+empresa&ots=sIinLGLTsA&sig=_LpcfRYwDoHZLbx5nry9LKpSYIA&redir_esc=y#v=onepage&q=Libros%20acerca%20de%20administraci%C3%B3n%20y%2',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'Ciencia que coordina recursos mediante procesos, procedimientos y métodos que permiten el logro de los objetivos organizacionales.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'Análisis o investigación que se realiza con el fin de determinar una situación, tendencia o causa de un problema, reconocer su entorno y proponer posibles soluciones que probablemente causarán cambios en la organización.',
    },
    {
      termino: 'Matriz',
      significado:
        'Instrumento de gestión en la organización que permite recoger información acerca de un proceso, actividad o estrategia implementada en la organización, con el fin de consolidar la información, posteriormente analizarla, y finalmente, utilizarla para la toma de decisiones.',
    },
    {
      termino: 'Método',
      significado:
        'Modelos y procedimientos metodológicos y sistemáticos que aportan al estudio de un problema u objeto de una situación, para la construcción de conocimiento válido y comprobable de un fenómeno particular por medio de una observación, tesis, hipótesis, entre otros elementos. ',
    },
    {
      termino: '<i>Stakeholders</i>',
      significado:
        'Grupos de interés  o partes interesadas de la organización que influyen de manera directa e impactan a la organización en el logro de sus objetivos.',
    },
    {
      termino: 'Técnica',
      significado:
        'Conjunto de procedimientos cuyo objetivo es garantizar la operatividad del proceso investigativo con el fin de obtener suficiente información y conocimiento para resolver los interrogantes planteados orientados a la solución del problema u objeto de la investigación.',
    },
  ],
  complementario: [
    {
      tema: '1.1. Clasificación.',
      referencia:
        'Decreto 957 de 2019. [Ministerio de Industria, Comercio y Turismo]. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único del Sector Comercio, Industria y Turismo y se reglamenta el artículo 2° de la Ley 590 de 2000, modificado por el artículo 43 de la Ley 1450 de 2011.  Junio 5 de 2019.',
      tipo: 'Documento legal - Decreto',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      tema: '1.2. Áreas funcionales.',
      referencia:
        'Cámara de Comercio de Cúcuta. (s. f.). Consolidado comparativo de sociedades',
      tipo: 'Documento – cuadro comparativo',
      link:
        'https://www.cccucuta.org.co/uploads_descarga/desc_49414aa27e2ee1132e863a9d4d1b8f09.pdf',
    },
    {
      tema: '1.3. Diagnóstico organizacional.',
      referencia:
        'Hoyos, G. (2018). El modelo de las cinco Fuerzas de Porter como instrumento para la adopción de decisiones estratégicas organizacionales: aplicación al sector de la Construcción Naval Militar. [Trabajo de Grado]. Centro Universitario de la Defensa en la Escuela Naval Militar',
      tipo: 'Documento – trabajo de grado',
      link:
        'http://calderon.cud.uvigo.es/bitstream/handle/123456789/232/Hoyos%20Perales%2c%20Guillermo%20memoria.pdf',
    },
    {
      tema: '2. Instrumentos de recolección de la información.',
      referencia:
        'Gallardo, Y. y Moreno, A. (1999). Aprender a Investigar. Módulo 3. Recolección de la Información. ICFES.',
      tipo: 'Libro',
      link:
        'https://www.unilibrebaq.edu.co/unilibrebaq/images/CEUL/mod3recoleccioninform.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Norma Constanza Morales Cruz',
        cargo: 'Experta Técnica',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora y Evaluadora Instrucciona',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadro',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
