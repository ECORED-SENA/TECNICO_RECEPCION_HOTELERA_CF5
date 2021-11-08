export default {
  global: {
    componenteFormativo: 'Software hotelero y las reservaciones en hoteles',
    descripcionCurso:
      'Existe una amplia variedad de sistemas de gestión hotelera o PMS (<em>Property Management System</em>) por sus siglas en inglés, que ayudan a agilizar las operaciones de control y a facilitar los métodos de control de estas. Estos se dividen en módulos para cada área de la propiedad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Software de gestión hotelera – PMS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Ubicación física en la recepción',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características',
            hash: 't1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Roles',
            hash: 't1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Funciones',
            hash: 't1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Módulos operativos',
            hash: 't1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Principales proveedores',
            hash: 't1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Instructivos y protocolos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cómo tomar una reserva en PMS',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Reservas de grupos',
            hash: 't2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cómo cancelar una reserva en PMS',
            hash: 't2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Cómo modificar una reserva en PMS',
            hash: 't2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manual de usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'La seguridad de red',
            hash: 't4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'La seguridad de las aplicaciones',
            hash: 't4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'La seguridad de la información',
            hash: 't4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'La seguridad operativa',
            hash: 't4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo:
              'La recuperación ante desastres y la continuidad del negocio',
            hash: 't4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'La capacitación del usuario final',
            hash: 't4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Políticas de uso de herramientas informáticas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Política de tratamiento de la información personal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Reportes de reservas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        'Bardi, J. A. (2010). Hotel Front Office Management. En J. A. Bardi, Hotel Front Office Management. John Wiley & Sons.',
    },
    {
      referencia:
        'Cross, R. (1997). Revenue Management: Hard-Core Tactics for Market Domination. Broadway Books.',
    },
    {
      referencia: 'Kasavana, M. L. (2011). Hospitality Upgrade.',
      link:
        'https://www.hospitalityupgrade.com/_magazine/magazine_Detail.asp/?ID=686',
    },
    {
      referencia:
        'Kaspersky Labs. (2021). Kaspersky Latinoamérica. Obtenido de ',
      link:
        'https://latam.kaspersky.com/resource-center/definitions/what-is-cyber-security',
    },
    {
      referencia: 'Levy-Bonvin, J. (2003). Hospitalitynet',
      link: 'https://www.hospitalitynet.org/opinion/4017990.html',
    },
    {
      referencia: 'Mastel Hospitality. (2019). Mastel Hospitality.',
      link:
        'https://www.mastelhospitality.com/evolution-of-opera-pms-oracle-hospitality/',
    },
    {
      referencia:
        'Moll, S. V. (1984). Front-of-the-House Computer Systems: A User’s Guide. Hospitality Rewiev, 2(2), Art. 5.',
      link:
        'https://digitalcommons.fiu.edu/cgi/viewcontent.cgi?referer=https://en.wikipedia.org/&httpsredir=1&article=1036&context=hospitalityreview',
    },
    {
      referencia: 'Opera. (2020). Oracle.com.',
      link:
        'https://www.oracle.com/in/industries/hospitality/what-is-hotel-pms.html',
    },
    {
      referencia: 'Puorto, S. (2018). Phocuswire.com.',
      link:
        'https://www.phocuswire.com/A-brief-history-of-property-management-systems',
    },
  ],
  glosario: [
    {
      termino: 'Channel Manager',
      significado:
        'sistema cuya función es unificar la información de tarifas y disponibilidad en los diferentes canales de comercio electrónico.',
    },
    {
      termino: 'Cliente / Servidor',
      significado:
        'modelo de la arquitectura de <i>software</i> donde el programa informático se instala en servidor central (proveedor) y desde allí se despliegan los recursos o servicios a los equipos de los usuarios (clientes).',
    },
    {
      termino: 'CRM',
      significado:
        'abreviatura inglesa de <i>Customer Relationship Management</i> y son sistemas que ayudan a gestionar todos los aspectos de la relación empresa cliente.',
    },
    {
      termino: 'POS',
      significado:
        'abreviatura inglesa de <i>Point of Sale</i> o punto de venta y son los sistemas de facturación que se usan en puntos de servicio directo al cliente, como restaurantes, droguerías, cajas de supermercado etc.',
    },
    {
      termino: 'SAAS',
      significado:
        'abreviatura inglesa de <i>Software as a Service</i> que se refiere a los paquetes informáticos que se consumen a demanda. Es decir, están disponibles en la nube vía internet y el usuario consume lo que necesita.',
    },
  ],
  complementario: [
    {
      texto:
        'Moll, S. V. (1984). Front-of-the-House Computer Systems: A User´s Guide. Hospitality Review, 2(2). https://digitalcommons.fiu.edu/hospitalityreview/vol2/iss2/5”',
      tipo: 'Artículo',
      link:
        'https://digitalcommons.fiu.edu/cgi/viewcontent.cgi?referer=https://en.wikipedia.org/&httpsredir=1&article=1036&context=hospitalityreview',
    },
    {
      texto:
        'Congreso de la República de Colombia. (18 de octubre de 2012). Ley 1581, por la cual se dictan disposiciones generales para la protección de datos personales. ',
      tipo: 'Documento',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      texto:
        'Oracle. (2021). Oracle Hospitality OPERA 5 Property Management. Oracle.',
      tipo: 'Folleto',
      descarga: '/downloads/anexo01.pdf',
    },
    {
      texto: 'Zeus. (s.f.). El poder de tener todo bajo control. Zeus.',
      tipo: 'Folleto',
      descarga: '/downloads/anexo02.pdf',
    },
    {
      texto: 'Ezee. (s.f.). Ezee Absolute. Ezee.',
      tipo: 'Folleto',
      descarga: '/downloads/anexo03.pdf',
    },
    {
      texto: 'Ezee. (s.f.). eZee Frontdesk Manual. Ezee',
      tipo: 'Folleto',
      descarga: '/downloads/anexo04.pdf',
    },
    {
      texto:
        'eZee Hotel software solutions provider. (2014). How to Take a Single Room Reservation in eZee Absolute Cloud Hotel Management Software - Old UI. [Video].',
      tipo: 'Video Youtube',
      link: 'https://youtu.be/F5Dt-WqJsqw',
    },
    {
      texto:
        'eZee Hotel software solutions provider. (2018). How to Take Group Bookings in eZee Absolute Hotel Management System? [Video]. YouTube.',
      tipo: 'Video Youtube',
      link: 'https://youtu.be/uU5HwMF7TMQ',
    },
    {
      texto:
        'eZee Hotel software solutions provider. (2020). How to Cancel a Reservation in eZee Absolute Using Extranet? [Video]. YouTube.',
      tipo: 'Video Youtube',
      link: 'https://youtu.be/5NBllgCC288',
    },
    {
      texto:
        'BBC News. (2018). Marriott: un ataque informático deja expuestos los datos de 500 millones de clientes del grupo hotelero. BBC News.',
      tipo: 'Página web',
      link: 'https://www.bbc.com/mundo/noticias-46404767',
    },
    {
      texto: 'eZee Frontdesk. (s.f.). Centro de reservas.',
      tipo: 'Página web',
      link: 'https://www.ezeefrontdesk.com/hotel-pms.php/manuals/',
    },
    {
      texto:
        'Oracle. (2021). Bienvenido a OPERA Property Management System (PMS).',
      tipo: 'Página web',
      link:
        'https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/welcome_to_pms.htm',
    },
    {
      texto:
        'Superintendencia de Industria y Comercio (s.f.). Protección de datos personales.',
      tipo: 'Página web',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
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
        nombre: 'Harbey Castelblanco',
        cargo: 'Experto técnico',
        centro: 'Centro Nacional Colombo Alemán',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Perilla Méndez',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
