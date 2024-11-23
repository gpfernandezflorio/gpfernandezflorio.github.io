/*
  Argumentos opcionales:

    - Modelo de cv (uno de los siguientes)
      general : Genérico (default)
      exactas : Formulario de concursos para Exactas
    
    - Destino de los archivos generados (ruta relativa) (default: ruta actual)
      dst:<RUTA>
*/

const Archivo = require('node:fs');
const Modelo = {};

const claves = {
  cargo:{
    Ay2: "Ayudante de Segunda",
    Ay1: "Ayudante de Primera",
    Jtp: "Jefe de Trabajos Prácticos",
    ah: "Docente (ad-honorem)",
    PI: "Profesor Instructor"
  },
  en: {
    // Para docente
    DC:"Departamento de Computación (DC) - Facultad de Ciencias Exactas y Naturales (FCEyN) - Universidad de Buneos Aires (UBA)",
    Unahur:"Universidad Nacional de Hurlingham (UNaHur)",
    Unipe:"Universidad Pedagógica Nacional (UniPe)",
    UNQ:"Universidad Nacional de Quilmes (UNQ)",
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
  }
};

const todos_mis_datos = {
  investigacion: [
    { // 2020 Tesis de Licenciatura
      nombre: "Estimación de la Veracidad de Expresiones Faciales utilizando Aprendizaje Profundo",
      año: 2020,
      en: ["Tesis de Licenciatura para la carrera Licenciatura en Ciencias de la Computación", "Facultad de Ciencias Exactas y Naturales, UBA"],
      url: "https://gestion.dc.uba.ar/media/academic/grade/thesis/TesisGonzaloFernadez_eXcX1PK.pdf",
      más: ["\\textbf{Directora}: María Elena Buemi", "\\textbf{Jurados}: Enrique Segura y Daniel Acevedo"]
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
    { // 2021 JADICC AelE
      nombre: "Arduino en la Escuela: una herramienta versátil para la enseñanza de programación y robótica",
      año: 2021,
      autores: ["YO", "María Belén Ticona Oquendo", "CCM"],
      en: "JADiCC21",
      url: "https://jadicc2021.program.ar/wp-content/uploads/2021/10/JADICC2021_paper_56.pdf"
    },
    { // 2022 JADICC Enfoque espiralado
      nombre: "Aprender programación usando bloques y texto en forma simultánea - Un enfoque espiralado",
      año: 2022,
      autores: ["YO", "FIDEL", "CECI"],
      en: "JADiCC22",
      url: "https://repositorio.unne.edu.ar/handle/123456789/50765"
    },
    { // 2023 JAIIO Relevamiento
      nombre: "Relevamiento de conocimientos previos de programación en el nivel universitario",
      año: 2023,
      autores: ["YO", "CECI", "FIDEL"],
      en: "JAIIO23",
      url: "https://publicaciones.sadio.org.ar/index.php/JAIIO/article/view/632/647"
    },
    { // 2024 EJS Relevamiento
      nombre: "Relevamiento de conocimientos previos de programación en el nivel universitario",
      año: 2024,
      autores: ["YO", "CECI", "FIDEL"],
      en: "Electronic Journal of SADIO (EJS) 23 (2) 2024, pp 150-175",
      url: "https://publicaciones.sadio.org.ar/index.php/EJS/article/view/862/701"
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
    { // 2024 JAR AelE
      nombre: "AelE: una herramienta para la enseñanza de programación basada en Arduino",
      año: 2024,
      autores: ["YO", "CCM"],
      en: "JAR24"/*,
      url: ""*/
    },
    { // 2024 CLEI AelE
      nombre: "AelE: a versatile tool for teaching programming and robotics using Arduino",
      año: 2024,
      autores: ["YO", "CCM"],
      en: "CLEI24",
      doi:"10.1109/CLEI64178.2024.10700288",
      url: "doi"
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
      durante: [{a:2016, c:2},{a:2016, c:2}]
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
      materia: "La programación y su Didáctica",
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
      materia: "La programación y su Didáctica 2",
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

const obtenerLcencias = function() {
  return "\n  \\begin{itemize}\n    \\item 01/08/2023 - 29/02/2024\n  \\end{itemize}\n"
};

const archivos = {
  exactas:[
    { nombre:"datos_del_aspirante.tex",
      base:"exactas/template/datos_del_aspirante.tex",
      reemplazos:[
        {i:"No se tuvo ninguna licencia.", o:obtenerLcencias},
        {i:"% \\newcommand{\\firma}", o:"\\newcommand{\\firma}"},
        {i:"{\\escalaFirmaPrincipal}{0.05}",o:"{\\escalaFirmaPrincipal}{0.1}"},
        {i:"{\\escalaFirmaCadaCarilla}{0.16}",o:"{\\escalaFirmaCadaCarilla}{0.06}"}
      ]
    }
  ],
  general:[]
};

const procesarArchivo = function(dataArchivo) {
  if ('base' in dataArchivo && 'reemplazos' in dataArchivo) {
    let contenido = leerArchivo(dataArchivo.base);
    for (let r of dataArchivo.reemplazos) {
      let sobreEscribir = typeof r.o == 'string' ? r.o : (typeof r.o == 'function' ? r.o() : '?');
      contenido = contenido.replaceAll(r.i, sobreEscribir);
    }
    escribirArchivo(dataArchivo.nombre, contenido);
  }
  return 0;
};

const leerArchivo = function(ruta) {
  return Archivo.readFileSync(ruta, 'utf8');
};

const escribirArchivo = function(ruta, contenido) {
  Archivo.writeFileSync(Modelo.DST + ruta, contenido);
};

const rutaDestino = function(args) {
  let posiblesRutas = args.filter(x => x.startsWith("dst:"));
  let ruta = posiblesRutas.length > 0 ? posiblesRutas[0].substring(4) : "./";
  if (!ruta.endsWith("/")) {
    ruta += "/";
  }
  return ruta;
};

const main = function(args) {
  Modelo.Base = args.includes('exactas') ? "exactas" : "general";
  Modelo.DST = rutaDestino(args);
  
  for (let archivo of archivos[Modelo.Base]) {
    if (procesarArchivo(archivo) != 0) {
      return 1;
    }
  }

  return 0;
};

process.exit(main(process.argv.slice(2)));