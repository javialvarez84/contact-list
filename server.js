let listaContactos = ["David Alvarez", "Diego Alvarez", "Leonardo Alvarez"];

function agregarContacto(contacto) {
    listaContactos.push(contacto);
}

imprimirContactos();
agregarContacto();

function borrarContacto(contacto) {
  const indice = listaContactos.indexOf(contacto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}
imprimirContactos();

borrarContacto();

function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach((contacto) => {
    console.log(contacto);
  });
}

imprimirContactos();