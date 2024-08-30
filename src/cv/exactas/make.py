import os
import shutil

carpeta_tmp = "tmp"
carpeta_template = "template"
src_template = [
  "Makefile",
  "concursos.tex",
  "exactas.png"
]
src_yo = [
  "firma.jpg",
  "datos_del_aspirante.tex",
  "docentes.tex",
  "cientificos.tex",
  "extension.tex",
  "profesionales.tex",
  "calificaciones.tex",
  "otros.tex"
]

def main():
  if os.path.isdir(carpeta_tmp):
    shutil.rmtree(carpeta_tmp)
  os.mkdir(carpeta_tmp)

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

  os.chdir(carpeta_tmp)
  os.system("make")

def fail(s):
  print(s)
  exit(0)

if __name__ == "__main__":
  main()