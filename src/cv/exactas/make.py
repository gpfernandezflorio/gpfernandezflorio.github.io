import os
import shutil

carpeta_tmp = "tmp"
carpeta_template = "template"
carpeta_node = "output_node"
src_template = [
  "Makefile",
  "concursos.tex",
  "exactas.png"
]
src_yo = [
  "firma.jpg",
  "extension.tex",
  "profesionales.tex",
  "calificaciones.tex",
  "otros.tex"
]
src_node = [
  "datos_del_aspirante.tex",
  "docentes.tex",
  "cientificos.tex",
]

def main():
  if os.path.isdir(carpeta_tmp):
    shutil.rmtree(carpeta_tmp)
  os.mkdir(carpeta_tmp)
  if os.path.isdir(carpeta_node):
    shutil.rmtree(carpeta_node)
  os.mkdir(carpeta_node)

  os.chdir("..")
  if os.system("node datos.js exactas dst:exactas/" + carpeta_node) != 0:
    fail("No se generaron los archivos de datos (node datos.js)")
  os.chdir("exactas")

  for f in src_template:
    if os.path.isfile(os.path.join(carpeta_template, f)):
      shutil.copy2(os.path.join(carpeta_template, f), carpeta_tmp)
    else:
      fail("Falta el archivo " + f + " en la carpeta " + carpeta_template)
  
  for f in src_yo:
    if os.path.isfile(f):
      shutil.copy2(f, carpeta_tmp)
    else:
      fail("Falta el archivo " + f + " en esta carpeta")

  for f in src_node:
    if os.path.isfile(os.path.join(carpeta_node, f)):
      shutil.copy2(os.path.join(carpeta_node, f), carpeta_tmp)
    else:
      fail("Falta el archivo " + f + " en la carpeta " + carpeta_node)

  os.chdir(carpeta_tmp)
  os.system("make")

def fail(s):
  print(s)
  exit(0)

if __name__ == "__main__":
  main()