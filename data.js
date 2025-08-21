// data.js — versión limpia

/* ===== HOTSPOTS (puedes editar/añadir los tuyos) ===== */
window.HOTSPOTS = [

  { x: 61.8, y: 44.2, n: 1,  title: "Acciones generales módulo perfiles:",     text: "Se encuentra un campo de búsqueda el cual filtra según los parámetros insertados, se tiene el botón de exportar el cual permite descargar el listado de los perfiles registrados en el sistema en diferentes formatos, se tiene el botón para crear un nuevo perfil." },
  { x: 87.1, y: 56.5, n: 2,  title: "Acciones perfil:",   text: "Estas acciones permiten gestionar un perfil seleccionado, se tiene el botón para editar el perfil. En este caso no se puede eliminar el perfil." },
];

/* ===== BOTONES flotantes =====
   IMPORTANTE: El último objeto NO lleva coma al final.
*/
window.BUTTONS = [
  { x: 95, y: 95, label: "Manual",        href: "manuales/MANUAL SIR Gestión ABT.pdf", target: "blank", variant: "ghost" },

  { x: 90.0, y: 43.6, label: "+ Añadir Nuevo Perfil",
  href: "https://wilvar88.github.io/SIR-ABT-Crear-Perfil/",
  target: "self",
  size: "w135h27", }   // ← usará esa medida exacta , 


  
];
