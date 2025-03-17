/*
  Argumentos opcionales:

    - Modelo de cv (uno de los siguientes)
      general : Genérico (default)
      exactas : Formulario de concursos para Exactas
    
    - Destino de los archivos generados (ruta relativa) (default: ruta actual)
      dst:<RUTA>
*/

const cargo = "JTP" // Para Exactas; puede ser JTP, AYp o AYs

import * as D from './datos.js';

import fs from 'fs';
const Archivo = fs;
const Modelo = {};

const obtenerLcencias = function() {
  return "\n  \\begin{itemize}\n    \\item 01/08/2023 - 29/02/2024\n  \\end{itemize}\n"
};

const datos_eventos_reps = function(data) {
  const resultado = [];
  for (let i of data.instancias) {
    let elemento = Object.assign({}, i);
    for (let k of ['pre','nombre','en']) {
      if (k in data && !(k in elemento)) {
        elemento[k] = data[k];
      }
    }
    resultado.push(elemento);
  }
  return resultado;
};

const elementos_docentes_otros =
  ["SdEC","EncuentroProfesorados","ForoFdL","LUDOVER"]
  .map(k => datos_eventos_reps(D.todos_mis_datos.extends_rep[k]))
  .flat();
elementos_docentes_otros.sort(D.ordenFechas);

const elementos_extension_divulgacion =
  ["SdC","NdlM","FdL","FeriaProfesiones","PlazaCiencia","FMujer"]
  .map(k => datos_eventos_reps(D.todos_mis_datos.extends_rep[k]))
  .flat()
  .concat(D.todos_mis_datos.extension.filter(x => !D.esUnProyectoE(x)));
elementos_extension_divulgacion.sort(D.ordenFechas);

const elementos_extension_articulacion = [];
for (let k of ["Cx1D","DOV","EVE"]) {
  let data = D.todos_mis_datos.extends_rep[k];
  for (let i of data.instancias) {
    let elemento = Object.assign({}, i);
    if ('nombre' in data && !('nombre' in elemento)) {
      elemento.nombre = data.nombre;
    }
    elementos_extension_articulacion.push(elemento);
  }
}
elementos_extension_articulacion.sort(D.ordenFechas);

const modelos = {
  exactas:{
    esqueleto: function(contenido) {
      return `\\begin{enumerate}[leftmargin=0.8cm]\n\n${contenido}\n\n\\end{enumerate}`;
    },
    archivos:[
      { nombre:"datos_del_aspirante.tex",
        base:"exactas/template/datos_del_aspirante.tex",
        reemplazos:[
          {i:"No se tuvo ninguna licencia.", o:obtenerLcencias},
          {i:"% \\newcommand{\\firma}", o:"\\newcommand{\\firma}"},
          {i:"{\\escalaFirmaPrincipal}{0.05}",o:"{\\escalaFirmaPrincipal}{0.1}"},
          {i:"{\\escalaFirmaCadaCarilla}{0.16}",o:"{\\escalaFirmaCadaCarilla}{0.06}"},
          {i:"\\newcommand{\\AYs}{}",o:`\\newcommand{\\${cargo}}{}`}
        ]
      },
      { nombre:"docentes.tex",
        esqueleto: {
          secciones:[
            {letra:'a', nombre:'Universitarios', elementos: D.todos_mis_datos.docentes,
              modeloElemento: function(elemento) {
                const cargo = D.procesarCargo(elemento);
                const materia = D.procesarMateria(elemento);
                const institucion = D.procesarInstitucion(elemento);
                const tiempo = D.procesarTiempo(elemento);
                return `      \\WorkEntry{\\textbf{${cargo}} ${materia}}\n      {${institucion}.}\n      {${tiempo}}`;
              }
            },
            {letra:'b', nombre:'En otros niveles educativos'},
            {letra:'c', nombre:'Formación pedagogica'},
            {letra:'d', nombre:'Otras actividades docentes', elementos:elementos_docentes_otros,
              modeloElemento: function(elemento) {
                const nombre = D.procesarNombre(elemento);
                const edición = D.procesarEdición(elemento);
                const rol = D.procesarRol(elemento);
                const fecha = D.procesarTiempo(elemento);
                return `      \\WorkEntry{\\textbf{${nombre}}${edición}}\n      {${rol}}\n      {${fecha}}`;
              }
            }
          ]
        }
      },
      { nombre:"extension.tex",
        esqueleto: {
          secciones:[
            {letra:'a', nombre:'Proyectos de Extensión actuales y anteriores',
              secciones:[
                {letra:'i', nombre:'realizados en el ámbito de las Universidades Nacionales.',
                  elementos: D.todos_mis_datos.extension,
                  filtro: D.esUnProyectoE
                }
              ]
            },
            {letra:'b', nombre:'Actividades',
              secciones:[
                {letra:'i', nombre:'de divulgación científica',
                  elementos: elementos_extension_divulgacion
                },
                {letra:'ii', nombre:'de articulación con otros niveles educativos',
                  elementos: elementos_extension_articulacion
                }
              ]
            },
            {letra:'c', nombre:'Publicaciones'},
            {letra:'d', nombre:'Presentaciones de proyectos de extensión en congresos, jornadas y otros encuentros de la especialidad'},
            {letra:'e', nombre:'Otras actividades de extensión no contempladas en los puntos anteriores.'}
          ],
          modeloElemento: function(elemento) {
            const nombre = D.procesarNombre(elemento);
            const pre = D.procesarPre(elemento);
            const edición = D.procesarEdición(elemento);
            const descripción = D.procesarDescripción(elemento);
            const rol = D.procesarRol(elemento);
            let campo2 = "";
            if (descripción.length > 0) {
              campo2 = descripción;
              if (rol.length > 0) {
                campo2 += "\\\\\n      "
              }
            }
            campo2 += rol;
            const en = D.procesarEn(elemento);
            const tiempo = D.procesarTiempo(elemento);
            let info = D.procesarInfo(elemento);
            if (info.length > 0) {
              info = `\\\\\n      ${info}`;
            }
            return `      \\WorkEntry{${pre}\\textbf{${nombre}}${edición}}\n      {${campo2}}\n      {${en}}\n      {${tiempo}${info}}`;
          }
        }
      },
      { nombre:"cientificos.tex",
        esqueleto: {
          elementos: D.todos_mis_datos.investigacion,
          secciones:[
            {letra:'a', nombre:'Trabajos Publicados', filtro:D.esUnaPublicacion,
              modeloElemento: function(elemento) {
                const anio = D.procesarAño(elemento);
                const nombre = D.procesarNombre(elemento);
                const en = D.procesarEn(elemento);
                const autores = D.procesarAutores(elemento);
                return `      \\WorkEntry{${anio} \\textbf{${nombre}}}\n      {${autores}.}\n      {${en}}`;
              }
            },
            {letra:'b', nombre:'Participación en congresos o acontecimientos nacionales o internacionales',
              filtro:D.esUnCongreso,
              modeloElemento: function(elemento) {
                const nombre = D.procesarNombre(elemento);
                const rol = D.procesarRol(elemento);
                const fecha = D.procesarFecha(elemento.fecha);
                const en = D.procesarEn(elemento);
                return `      \\WorkEntry{${nombre}}\n      {${rol}}\n      {${fecha}}\n      {${en}}`;
              }
            },
            {letra:'c', nombre:'Formación de Recursos Humanos.', filtro: x => false},
            {letra:'d', nombre:'Participación en Proyectos de Investigación', filtro:D.esUnProyectoI,
              modeloElemento: function(elemento) {
                const nombre = D.procesarNombre(elemento);
                const título = D.procesarTítulo(elemento);
                const código = D.procesarCódigo(elemento);
                let info = D.procesarInfo(elemento);
                if (info.length > 0) {
                  info = `\n      {${info}}`;
                }
                return `      \\WorkEntry{\\textbf{${nombre}}}\n      {Código ${código}.}\n      {${título}}${info}`;
              }
            },
            {letra:'e', nombre:'Cursos de Posgrado no incluidos en la carrera de Doctorado.', filtro: x => false},
            {letra:'f', nombre:'Otros antecedentes científicos no considerados en los puntos anteriores', filtro: x => false}
          ]
        }
      }
    ],
    modeloSeccion: function(dataSeccion, esqueleto) {
      const f = function(dataSeccion) {
        let contenido = [];
        const elementos = 'elementos' in dataSeccion ? dataSeccion.elementos : esqueleto.elementos || [];
        const filtroSeccion = 'filtro' in dataSeccion ? dataSeccion.filtro : x => true;
        const modeloElemento = 'modeloElemento' in dataSeccion ? dataSeccion.modeloElemento : esqueleto.modeloElemento;
        for (let elemento of elementos.filter(filtroSeccion)) {
          contenido.push(modeloElemento(elemento));
        }
        if (contenido.length == 0) {
          contenido = "    \\\\ No corresponde.";
        } else {
          contenido = `\n    \\begin{itemize}[leftmargin=0.2cm]\n\n${contenido.join("\n\n")}\n\n    \\end{itemize}`;
        }
        return `  \\item[${dataSeccion.letra})]{${dataSeccion.nombre}\n${contenido}\n  }`;
      }
      if ('secciones' in dataSeccion) {
        return f({
          letra:dataSeccion.letra,
          nombre:dataSeccion.nombre,
          modeloElemento: x=>x,
          elementos: dataSeccion.secciones.map(f)
        });
      } else {
        return f(dataSeccion);
      }
    }
  },
  general:{archivos:[]}
};

const procesarArchivo = function(dataArchivo, base) {
  if ('base' in dataArchivo) {
    let contenido = leerArchivo(dataArchivo.base);
    if ('reemplazos' in dataArchivo) {
      for (let r of dataArchivo.reemplazos) {
        let sobreEscribir = typeof r.o == 'string' ? r.o : (typeof r.o == 'function' ? r.o() : '?');
        contenido = contenido.replaceAll(r.i, sobreEscribir);
      }
    }
    escribirArchivo(dataArchivo.nombre, contenido);
  } else if ('esqueleto' in dataArchivo && 'esqueleto' in modelos[base]) {
    let contenido = [];
    const modeloSeccion = 'modeloSeccion' in dataArchivo.esqueleto ? dataArchivo.esqueleto.modeloSeccion : modelos[base].modeloSeccion;
    for (let seccion of dataArchivo.esqueleto.secciones) {
      contenido.push(modeloSeccion(seccion, dataArchivo.esqueleto));
    }
    escribirArchivo(dataArchivo.nombre, modelos[base].esqueleto(contenido.join("\n\n")));
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
  
  for (let archivo of modelos[Modelo.Base].archivos) {
    if (procesarArchivo(archivo, Modelo.Base) != 0) {
      return 1;
    }
  }

  return 0;
};

process.exit(main(process.argv.slice(2)));