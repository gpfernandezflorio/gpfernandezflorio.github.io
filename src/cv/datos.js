export const claves = {
  cargo:{
    Ay2: "Ayudante de Segunda",
    Ay1: "Ayudante de Primera",
    Jtp: "Jefe de Trabajos Prácticos",
    ah: "Docente (ad-honorem)",
    PI: "Profesor Instructor"
  },
  en: {
    // Para docente y eventos
    DC:"Departamento de Computación (DC) - Facultad de Ciencias Exactas y Naturales (FCEyN) - Universidad de Buneos Aires (UBA)",
    Unahur:"Universidad Nacional de Hurlingham (UNaHur)",
    Unipe:"Universidad Pedagógica Nacional (UniPe)",
    UNQ:"Universidad Nacional de Quilmes (UNQ)",
    UNC:"Universidad Nacional de Córdoba (UNC)",
    // Para investigación
    ICPR20:"International Conference on Pattern Recognition (ICPR) 2020",
    JADiCC21:"Jornadas Argentinas de Didáctica de las Ciencias de la Computación (JADiCC) 2021",
    JADiCC22:"Jornadas Argentinas de Didáctica de las Ciencias de la Computación (JADiCC), 18-20 de agosto de 2022, Corrientes, Argentina",
    JADiCC23:"Jornadas Argentinas de Didáctica de las Ciencias de la Computación (JADiCC), 1-2 de diciembre de 2023, Neuquén, Argentina",
    JADiCC24:"Jornadas Argentinas de Didáctica de las Ciencias de la Computación (JADiCC), 23-25 de octubre de 2024, Río Cuarto, Argentina",
    JAR24:"Jornadas Argentinas de Robótica (JAR), 4-7 de junio de 2024, Buenos Aires, Argentina",
    JAIIO23:"Simposio Argentino de Educación en Informática (SAEI) - Jornadas Argentinas de Informática e Investigación Operativa (JAIIO) 2023, 4-8 de septiembre de 2023, Buenos Aires, Argentina",
    CLEI24:"50 Conferencia Latinoamericana de Informática (L CLEI), 12-16 de agosto de 2024, Bahía Blanca, Argentina"
  },
  autores: {
    "YO":"Gonzalo Pablo Fernández",
    "CCM":"Christian Cossio-Mercado",
    "FIDEL":"Pablo E. ``Fidel'' Martínez López",
    "CECI":"Cecilia Martínez"
  },
  roles: {
    taller: "Dictado del taller",
    taller_s: "Dictado de los talleres"
  },
  taller: {
    "Problemas":"¿Cómo enseñar a programar? Una didáctica de la programación basada en la resolución de problemas",
    "Didáctica":"Taller de Didáctica de la Programación",
    "Electrónica":"Taller de Electrónica Aplicada",
    "Evaluación":"Taller de Evaluación",
    "Programación":"Taller de Programación y Robótica",
    "Robótica":"Taller de Robótica",
    "Apps":"Taller de Aplicaciones Móviles para el Aula"
  }
};

export const todos_mis_datos = {
  extends_rep: { // Actividades que se repiten
    SdEC:{
      nombre: "Semana de la Enseñanza de las Ciencias",
      instancias:[{
        edición: "2017",
        fecha:{a:2017,m:7,d:[13,14],h:", de 13:00hs a 15:30hs"},
        rol: {taller: ["Electrónica","Robótica"]}
      },{
        edición: "2018",
        fecha:{a:2018,m:7,d:[10,11,12],h:", de 16:00hs a 18:30hs"},
        rol: {taller: ["Didáctica","Electrónica","Robótica"]}
      },{
        edición: "2019",
        fecha:{a:2019,m:7,d:[10,11,12],h:", de 17:00hs a 19:30hs"},
        rol: {taller: ["Didáctica","Electrónica","Apps"]}
      },{
        edición: "2022",
        fecha:{a:2022,m:7,d:[12,14],h:", de 10:00hs a 12:30hs"},
        rol: {taller: ["Didáctica","Electrónica"]}
      },{
        edición: "2023",
        fecha:{a:2023,m:7,d:[11,12],h:", de 10:30hs a 13:00hs"},
        rol: {taller: ["Didáctica","Electrónica"]}
      },{
        edición: "2024",
        fecha:{a:2024,m:7,d:[10,11,12],h:", de 10:30hs a 13:00hs"},
        rol: {taller: ["Didáctica","Electrónica","Evaluación"]}
      }]
    },
    EC:{
      instancias:[{
        nombre: "XI Encuentro Internacional de Profesorados de Enseñanza Superior, Media y Primaria en Ciencias Naturales y Matemática",
        fecha:{a:2017,m:11,d:24,h:", de 10:30hs a 13:00hs"},
        rol: {taller: "Electrónica"}
      },{
        nombre: "XII Encuentro Internacional de Profesorados de Enseñanza Superior, Media y Primaria en Ciencias Naturales, Matemática y Tecnología",
        fecha:{a:2018,m:11,d:23,h:", de 9:30hs a 12:00hs"},
        rol: {taller: "Electrónica"}
      },{
        nombre: "XIII Encuentro Internacional de Profesorados de Enseñanza Superior, Media y Primaria en Ciencias Naturales, Matemática y Tecnología",
        fecha:{a:2019,m:11,d:22,h:", de 9:00hs a 11:30hs"},
        rol: {taller: "Programación"}
      },{
        nombre: "XVI Encuentro Internacional de Profesorados de Enseñanza Superior, Media y Primaria en Ciencias Naturales, Matemática y Tecnología",
        fecha:{a:2022,m:11,d:18,h:", de 9:30hs a 12:00hs"},
        rol: {taller: "Electrónica"}
      },{
        nombre: "XVII Encuentro Internacional de Profesorados de Enseñanza Superior, Media y Primaria en Ciencias Naturales, Matemática y Tecnología",
        fecha:{a:2023,m:11,d:17,h:", de 9:00hs a 11:00hs"},
        rol: {taller: "Problemas"}
      }]
    },
    FdL:{
      instancias:[{
        nombre: "19$^{\\circ}$ Foro Internacional de Enseñanza de Ciencias y Tecnologías",
        fecha: {a:2019,m:4,d:29,h:", de 10:30hs a 12:30hs"},
        rol: {taller: "Problemas"}
      },{
        nombre: "20$^{\\circ}$ Foro Internacional de Enseñanza de Ciencias y Tecnologías",
        fecha: {a:2022,m:5,d:9,h:", de 10:30hs a 12:30hs"},
        rol: {taller: "Problemas"}
      }]
    },
    LUDOVER:{
      nombre: "Taller de Videojuegos Ludover",
      instancias:[{
        edición: "edición virtual 2021"
      },{
        edición: "edición virtual 2022"
      }]
    }
  },
  extension: [

  ],
  investigacion: [
    { // Proyecto UBACyT 2018
      nombre: "UBACyT 2018 Mod II GF, Estudiante, Programación científica 2018-2019",
      título: "Análisis automático de la dinámica facial y corporal",
      código: "20020170200126BA",
      info:["Acreditado y financiado.","\\textbf{Director}: Daniel Acevedo"]
    },
    { // JADiPro 2018
      nombre: "Primeras \\textbf{Jornadas Argentinas de Didáctica de la Programación} (JADiPro 2018)",
      rol: "Asistente",
      fecha: {a:2018,d:[{m:5,d:31},{m:6,d:1}]},
      en: "UNQ",
      url: "https://jadipro.unq.edu.ar/event/1eras-jadipro-2018-05-31-2018-06-01-5/page/introduccion-1eras-jadipro"
      // {Presentación de dos posters:}
      // \begin{itemize}
      //   \item Despertando Vocaciones en Computación por Medio de la Resolución de Problemas con Programación\footnote{
      //     \url{https://drive.google.com/file/d/11Q6lYX6R9nhxT7xC7PeMLssZSbS47I1a/view}}
      //   \item La Programación y su Didáctica como parte de la Formación Docente en Ciencia y Tecnología\footnote{
      //     \url{https://drive.google.com/file/d/1tzRguCk1-sZkQwk8KVUB_AdLvE_K2uGa/view}}
      // \end{itemize}
      // \medskip
    },
    { // JADiPro 2019
      nombre: "Segundas \\textbf{Jornadas Argentinas de Didáctica de la Programación} (JADiPro 2019)",
      rol: "Asistente",
      fecha: {a:2019,m:6,d:[7,8]},
      en: "UNC"
      // {Presentación de dos posters:}
      // \begin{itemize}
      //   \item Formación docente complementaria para la implementación de La Programación y su Didáctica\footnote{
      //     \url{https://drive.google.com/open?id=16m6bdXDUZxmSbBeGUZ23HNGjkllkLbu-}}
      //   \item Electrónica aplicada para Ciencias y Tecnología con Arduino en la Escuela\footnote{
      //     \url{https://drive.google.com/open?id=16iX87DDbirIjMgsFyXKE8rtv7wthb7s8}}
      // \end{itemize}
      // \medskip
    },
    { // 2020 Tesis de Licenciatura
      nombre: "Estimación de la Veracidad de Expresiones Faciales utilizando Aprendizaje Profundo",
      año: 2020,
      autores: "YO",
      en: [
        "\\textbf{Tesis de Licenciatura} para la carrera Licenciatura en Ciencias de la Computación",
        "Facultad de Ciencias Exactas y Naturales, UBA",
        "Defendida el 13 de Marzo de 2020",
        "\\textbf{Directora}: María Elena Buemi",
        "\\textbf{Jurados}: Enrique Segura y Daniel Acevedo"
      ],
      url: "https://gestion.dc.uba.ar/media/academic/grade/thesis/TesisGonzaloFernadez_eXcX1PK.pdf"
    },
    { // 2020 ICPR Tesis
      nombre: "Attribute classification for the analysis of genuineness of facial expressions",
      año: 2020,
      autores: ["Gonzalo Fernández Florio", "María Elena Buemi", "Daniel Acevedo", "Pablo Negri"],
      en: "ICPR20",
    },
    { // 2021 IET Tesis
      nombre: "Attribute classification for the analysis of genuineness of facial expressions",
      año: 2021,
      autores: ["Gonzalo Fernández Florio", "María Elena Buemi", "Daniel Acevedo", "Pablo Negri"],
      en: "IET Conference Proceedings 2021 (1), pp 109-114",
      doi: "10.1049/icp.2021.1467",
      url: "doi"
    },
    { // JADiCC 2021
      nombre: "Primeras \\textbf{Jornadas Argentinas de Didáctica de las Ciencias de la Computación} (JADiCC 2021)",
      rol: "Asistente",
      fecha: {a:2021,m:11,d:[4,5,6]},
      en: "Fundación Sadosky",
      url: "https://jadicc2021.program.ar/"
    },
    { // 2021 JADICC AelE
      nombre: "Arduino en la Escuela: una herramienta versátil para la enseñanza de programación y robótica",
      año: 2021,
      autores: ["YO", "María Belén Ticona Oquendo", "CCM"],
      en: "JADiCC21",
      url: "https://jadicc2021.program.ar/wp-content/uploads/2021/10/JADICC2021_paper_56.pdf"
    },
    { // JADiCC 2022
      nombre: "Segundas \\textbf{Jornadas Argentinas de Didáctica de las Ciencias de la Computación} (JADiCC 2022)",
      rol: "Asistente",
      fecha: {a:2022,m:8,d:[18,19,20]},
      en: "Universidad Nacional del Nordeste",
      url: "https://jadicc2022.unne.edu.ar/"
    },
    { // 2022 JADICC Enfoque espiralado
      nombre: "Aprender programación usando bloques y texto en forma simultánea - Un enfoque espiralado",
      año: 2022,
      autores: ["YO", "FIDEL", "CECI"],
      en: "JADiCC22",
      url: "https://repositorio.unne.edu.ar/handle/123456789/50765"
    },
    { // JAIIO 2023
      nombre: "\\textbf{Simposio Argentino de Educación en Informática} (SAEI) dentro de las 52$^{\\circ}$ \\textbf{Jornadas Argentinas de Informática} (JAIIO 2023)",
      rol: "Asistente",
      fecha: {a:2023,m:9,d:7},
      en: "Universidad Nacional de Tres de Febrero",
      url: "https://52jaiio.sadio.org.ar/"
    },
    { // 2023 JAIIO Relevamiento
      nombre: "Relevamiento de conocimientos previos de programación en el nivel universitario",
      año: 2023,
      autores: ["YO", "CECI", "FIDEL"],
      en: "JAIIO23",
      url: "https://publicaciones.sadio.org.ar/index.php/JAIIO/article/view/632/647"
    },
    { // JIF 2023
      nombre: "V \\textbf{Jornadas de Investigadores en Formación en Ciencia y Tecnología} (JIF 2023)",
      rol: "Integrante del \\textbf{Comité Científico}",
      fecha: {a:2023,m:9,d:[28,29]},
      en: "UNQ",
      url: "https://sites.google.com/view/jif-cyt-unq-2023/"
    },
    { // JADiCC 2023
      nombre: "Terceras \\textbf{Jornadas Argentinas de Didáctica de las Ciencias de la Computación} (JADiCC 2023)",
      rol: "Integrante del \\textbf{Comité de Programa}",
      fecha: {a:2023,m:12,d:[1,2]},
      en: "Universidad Nacional del Comahue",
      url: "https://jadicc2023.program.ar/"
    },
    { // 2023 JADICC Taller DOV 23
      nombre: "Enseñanza de fundamentos conceptuales de programación usando Arduino",
      año: 2023,
      autores: ["YO", "CCM"],
      en: "JADiCC23"/*,
      url: ""*/
    },
    { // 2023 JADICC PRENDER
      nombre: "PRENDER: Una propuesta didáctico-pedagógica para la enseñanza de las Ciencias de la Computación",
      año: 2023,
      autores: ["CCM", "YO"],
      en: "JADiCC23"/*,
      url: ""*/
    },
    { // 2024 EJS Relevamiento
      nombre: "Relevamiento de conocimientos previos de programación en el nivel universitario",
      año: 2024,
      autores: ["YO", "CECI", "FIDEL"],
      en: "Electronic Journal of SADIO (EJS) 23 (2) 2024, pp 150-175",
      url: "https://publicaciones.sadio.org.ar/index.php/EJS/article/view/862/701"
    },
    { // 2024 JAR AelE
      nombre: "AelE: una herramienta para la enseñanza de programación basada en Arduino",
      año: 2024,
      autores: ["YO", "CCM"],
      en: "JAR24"/*,
      url: ""*/
    },
    { // JAIIO 2024
      nombre: "\\textbf{Simposio Argentino de Educación en Informática} (SAEI) dentro de las 53$^{\\circ}$ \\textbf{Jornadas Argentinas de Informática} (JAIIO 2024)",
      rol: "Asistente",
      fecha: {a:2024,m:8,d:[14,15]},
      en: "Universidad Nacional del Sur",
      url: "https://jaiio53.clei.org/"
    },
    { // CLEI 2024
      nombre: "50$^a$ \\textbf{Conferencia Latinoamericana de Informática} (CLEI 2024)",
      rol: "Asistente",
      fecha: {a:2024,m:8,d:[14,15]},
      en: "Universidad Nacional del Sur",
      url: "https://conferencia2024.clei.org/"
    },
    { // 2024 CLEI AelE
      nombre: "AelE: a versatile tool for teaching programming and robotics using Arduino",
      año: 2024,
      autores: ["YO", "CCM"],
      en: "CLEI24",
      doi:"10.1109/CLEI64178.2024.10700288",
      url: "doi"
    },
    { // JADiCC 2024
      nombre: "Cuartas \\textbf{Jornadas Argentinas de Didáctica de las Ciencias de la Computación} (JADiCC 2024)",
      rol: "Integrante del \\textbf{Comité de Programa}",
      fecha: {a:2024,m:10,d:[23,24,25]},
      en: "Universidad Nacional de Río Cuarto",
      url: "https://jadicc2024.dc.exa.unrc.edu.ar/"
    },
    { // 2024 JADICC UBA XXII
      nombre: "Iniciación a la programación en contextos de encierro con Arduino",
      año: 2024,
      autores: ["Daniela Macario Cabral", "CCM", "YO"],
      en: "JADiCC24"/*,
      url: ""*/
    },
    { // 2024 JADICC Taller DOV 23
      nombre: "¿Es posible enseñar los fundamentos de la programación sólo con Arduino?: Análisis de un curso introductorio para estudiantes de secundaria usando bloques",
      año: 2024,
      autores: ["YO", "CCM"],
      en: "JADiCC24"/*,
      url: ""*/
    },
    { // 2024 JADICC Metacognición
      nombre: "¿Cómo llevar lo que sabemos de Metacognición a las clases de programación?",
      año: 2024,
      autores: ["CCM", "YO", "Gastón Pérez"],
      en: "JADiCC24"/*,
      url: ""*/
    },
    { // 2024 JADICC Modelos de Cómputo
      nombre: "Reflexiones sobre la naturaleza de la Computación",
      año: 2024,
      autores: ["YO", "FIDEL", "Alejandro Artopoulos", "Alejandra Lliteras"],
      en: "JADiCC24"/*,
      url: ""*/
    }
  ],
  docentes: [
    { // Ay2 SO 2015
      cargo: "Ay2",
      materia: "Sistemas Operativos",
      en: "DC",
      durante: 2015
    },
    { // Ay2 TLeng 2016 1C + 2017 2C
      cargo: "Ay2",
      materia: "Teoría de Lenguajes",
      en: "DC",
      durante: [{a:2016, c:1},{a:2017, c:2}]
    },
    { // Ay2 Orga 2 2016 2C + 2019 1C
      cargo: "Ay2",
      materia: "Organización del Computador II",
      en: "DC",
      durante: [{a:2016, c:2},{a:2019, c:1}]
    },
    { // Ay2 LyC 2016 2C
      cargo: "Ay2",
      materia: "Lógica y Computabilidad",
      en: "DC",
      durante: {a:2016, c:2}
    },
    { // Ay1 Algo 3 2017 1C
      cargo: "Ay1",
      materia: "Algoritmos y Estructuras de Datos III",
      en: "DC",
      desde: {a:2017, m:4},
      hasta: {a:2017, m:7}
    },
    { // B1 2017 2C + 2018 2C + 2019 2C
      cargo: "ah",
      curso: "La programación y su Didáctica",
      en: "DC",
      durante: [{a:2017, c:2},{a:2018, c:2},{a:2019, c:2}]
    },
    { // Ay1 SO 2017 2C - 2018 1C
      cargo: "Ay1",
      materia: "Sistemas Operativos",
      en: "DC",
      desde: {a:2017, c:2},
      hasta: {a:2018, c:1}
    },
    { // Ay2 Algo 1 2019 1C
      cargo: "Ay2",
      materia: "Algoritmos y Estructuras de Datos I",
      en: "DC",
      durante: {a:2019, c:1}
    },
    { // Ay2 BD 2019 1C
      cargo: "Ay2",
      materia: "Base de Datos",
      en: "DC",
      durante: {a:2019, c:1}
    },
    { // B2 2019 2C
      cargo: {eq:"Ay2"},
      curso: "La programación y su Didáctica 2",
      en: "DC",
      durante: {a:2019, c:1}
    },
    { // Ay2 Orga 1 2019 2C
      cargo: "Ay2",
      materia: "Organización del Computador I",
      en: "DC",
      durante: {a:2019, c:2}
    },
    { // Ay1 LyC 2020 2C
      cargo: "Ay1",
      materia: "Lógica y Computabilidad",
      en: "DC",
      durante: {a:2020, c:2}
    },
    { // Ay2 PLP 2019 2C - 2020 2C
      cargo: "Ay2",
      materia: "Paradigmas de Programación",
      en: "DC",
      desde: {a:2019, c:2},
      hasta: {a:2020, c:2}
    },
    { // Ay2 Algo 1 2021 1C
      cargo: "Ay2",
      materia: "Algoritmos y Estructuras de Datos I",
      en: "DC",
      durante: {a:2021, c:1}
    },
    { // Ay1 Algo 2 2020 2C - 2021 1C
      cargo: "Ay1",
      materia: "Algoritmos y Estructuras de Datos II",
      en: "DC",
      desde: {a:2020, c:2},
      hasta: {a:2021, c:1}
    },
    { // Ay1 PLP 2021 1C + 2024 1C
      cargo: "Ay1",
      materia: "Paradigmas de Programación",
      en: "DC",
      durante: [{a:2021, c:1},{a:2024, c:1}]
    },
    { // Ay1 Unahur
      cargo: "Ay1",
      materia: "Introducción a la Programación",
      en: "Unahur",
      desde: {a:2021, c:2},
      hasta: {a:2022, c:1}
    },
    { // JTP Unipe 2023 2C + 2024 2C
      cargo: "Jtp",
      materia: "Teoría de la Computación",
      en: "Unipe",
      durante: [{a:2023, c:2},{a:2024, c:2}]
    },
    { // Prof. UNQ 2021 1C ->
      cargo: "PI",
      materia: "Introducción a la Programación",
      en: "UNQ",
      desde: {a:2021, c:1}
    }
  ]
};

export const esUnaPublicacion = function(elemento) {
  return 'en' in elemento && 'año' in elemento && 'autores' in elemento;
};

export const esUnProyecto = function(elemento) {
  return 'título' in elemento && 'código' in elemento;
};

export const esUnCongreso = function(elemento) {
  return 'en' in elemento && 'rol' in elemento && 'fecha' in elemento;
};

export const ordenFechas = function(elemento1, elemento2) {
  let año1 = elemento1.fecha.a;
  let año2 = elemento2.fecha.a;
  if (año1 == año2) {
    let mes1 = elemento1.fecha.m;
    let mes2 = elemento2.fecha.m;
    if (mes1 == mes2) {
      let dia1 = elemento1.fecha.d;
      if (Array.isArray(dia1)) { dia1 = dia1[0]; }
      let dia2 = elemento2.fecha.d;
      if (Array.isArray(dia2)) { dia2 = dia2[0]; }
      return dia1 - dia2;
    }
    return mes1 - mes2;
  }
  return año1 - año2;
}

export const procesarCargo = function(elemento) {
  if ('cargo' in elemento) {
    if (typeof elemento.cargo === 'string') {
      if (elemento.cargo in claves.cargo) {
        return claves.cargo[elemento.cargo];
      }
      return elemento.cargo;
    }
    if ('eq' in elemento.cargo) {
      return `Docente\\textnormal{ (equiparado a ${procesarCargo({cargo:elemento.cargo.eq})})}`;
    }
  }
  return "?";
};

export const procesarMateria = function(elemento) {
  if ('materia' in elemento) {
    if (typeof elemento.materia === 'string') {
      return `en la materia \\textbf{${elemento.materia}}`;
    }
  } else if ('curso' in elemento) {
    if (typeof elemento.curso === 'string') {
      return `en el curso \\textbf{${elemento.curso}}`;
    }
  }
  return "?";
};

export const procesarInstitucion = function(elemento) {
  if ('en' in elemento) {
    if (typeof elemento.en === 'string') {
      if (elemento.en in claves.en) {
        return claves.en[elemento.en];
      }
      return elemento.en;
    }
  }
  return "?";
};

export const procesarRol = function(elemento) {
  if (typeof elemento.rol === 'string') {
    return `${elemento.rol}.`;
  }
  let roles = [];
  for (let k of Object.keys(elemento.rol)) {
    let actividades = elemento.rol[k];
    if (!Array.isArray(actividades)) {
      actividades = [actividades];
    }
    if (k in claves) {
      actividades = actividades.map(x => `\\textbf{${x in claves[k] ? claves[k][x] : x}}`);
    }
    if (actividades.length > 1) {
      let ultimo = actividades.splice(-1)[0];
      actividades = `${claves.roles[`${k}_s`]} ${actividades.join(", ")} y ${ultimo}.`;
    } else {
      actividades = `${claves.roles[k]} ${actividades[0]}.`;
    }
    roles.push(actividades);
  }
  if (roles.length == 1) {
    return roles[0];
  } else {
    return `\\begin{itemize}\n${roles.map(x => `      \\item ${x}`).join("\n")}\\end{itemize}`
  }
};

export const procesarEdición = function(elemento) {
  return 'edición' in elemento ? ` ${elemento.edición}` : "";
};

export const procesarFecha = function(elemento) {
  let resultado = `${elemento.a}.`;
  if ('m' in elemento) {
    resultado = `${mes(elemento.m)} de ${resultado}`;
  }
  if ('d' in elemento) {
    resultado = `${procesarDias(elemento.d)} de ${resultado}`;
  }
  return resultado;
};

export const procesarDias = function(d) {
  if (typeof d === 'number') {
    return `${d}`;
  }
  if (Array.isArray(d)) {
    let dias = d.map(procesarDias);
    if (dias.length > 1) {
      let ultimo = dias.splice(-1)[0];
      return `${dias.join(", ")} y ${ultimo}`;
    } else {
      return `${dias[0]}`;
    }
  }
  if ('m' in d && 'd' in d) {
    return `${procesarDias(d.d)} de ${mes(d.m)}`
  }
  return "?";
}

export const procesarTítulo = function(elemento) {
  return elemento.título;
};

export const procesarCódigo = function(elemento) {
  return elemento.código;
};

export const procesarInfo = function(elemento) {
  if ('info' in elemento) {
    let info = elemento.info;
    if (!Array.isArray(info)) {
      info = [info];
    }
    info = info.map(x => `${x}.`).join("\\\\\n      ");
    return info;
  }
  return "";
};

export const procesarTiempo = function(elemento) {
  if ('durante' in elemento) {
    let periodos = elemento.durante;
    if (!Array.isArray(periodos)) {
      periodos = [periodos];
    }
    periodos = periodos.map(procesarPeriodo);
    if (periodos.length > 1) {
      let ultimo = periodos.splice(-1)[0];
      return `Durante ${periodos.join(", ")} y ${ultimo}.`;
    } else {
      return `Durante ${periodos[0]}.`;
    }
  } else if ('desde' in elemento) {
    let desde = procesarPeriodo(elemento.desde);
    if ('hasta' in elemento) {
      let hasta = procesarPeriodo(elemento.hasta);
      return `Entre ${desde} y ${hasta}.`;
    } else {
      return `Desde ${desde}.`;
    }
  }
  return "?";
};

export const procesarAño = function(elemento) {
  return elemento.año;
};

export const procesarNombre = function(elemento) {
  return elemento.nombre;
};

export const procesarEn = function(elemento) {
  if ('en' in elemento) {
    let en = elemento.en;
    if (!Array.isArray(en)) {
      en = [en]
    }
    en = en.map(x => {
      if (typeof x === 'string') {
        if (x in claves.en) {
          return claves.en[x];
        }
        return x;
      }
    });
    return en.map(x => `${x}.`).join("\\\\\n      ");
  }
  return "?";
};

export const procesarAutores = function(elemento) {
  if ('autores' in elemento) {
    let autores = elemento.autores;
    if (!Array.isArray(autores)) {
      autores = [autores];
    }
    autores = autores.map(x => x in claves.autores ? claves.autores[x] : x);
    if (autores.length > 1) {
      let ultimo = autores.splice(-1)[0];
      return `${autores.join(", ")} y ${ultimo}`;
    } else {
      return `${autores[0]}`;
    }
  }
};

export const procesarPeriodo = function(periodo) {
  if (typeof periodo === 'number') {
    return `${periodo}`;
  } else {
    let resultado = `${periodo.a}`;
    if ('m' in periodo) {
      resultado = `${mes(periodo.m)} de ${resultado}`;
    } else if ('c' in periodo) {
      resultado = `${cuatrimestre(periodo.c)} de ${resultado}`;
    }
    return resultado;
  }
};

export const mes = function(m) {
  return [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ][m-1];
};

export const cuatrimestre = function(c) {
  return `el ${c==1 ? 'primer' : (c==2 ? 'segundo' : "?")} cuatrimestre`;
};