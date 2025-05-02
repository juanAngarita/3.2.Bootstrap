const productos = [
  {
    nombre: "Anillo de Diamantes",
    descripcion:
      "Hermoso anillo con diamantes incrustados, ideal para ocasiones especiales.",
    imagen: "/images/articles/joya1.jpg",
    enlace: "#",
  },
  {
    nombre: "Collar de Oro",
    descripcion:
      "Collar de oro de 18 quilates con diseño elegante y sofisticado.",
    imagen: "/images/articles/joya2.webp",
    enlace: "#",
  },
  {
    nombre: "Pulsera de Plata",
    descripcion:
      "Pulsera moderna de plata esterlina, perfecta para uso diario.",
    imagen: "/images/articles/joya3.webp",
    enlace: "#",
  },
  {
    nombre: "Aretes de Perla",
    descripcion:
      "Finos aretes con perlas naturales, un clásico que nunca pasa de moda.",
    imagen: "/images/articles/jpya4.webp",
    enlace: "#",
  },
  {
    nombre: "Anillo de Compromiso",
    descripcion: "Un anillo clásico y elegante con piedra central brillante.",
    imagen: "/images/articles/joya5.jpg",
    enlace: "#",
  },
  {
    nombre: "Reloj de Lujo",
    descripcion: "Reloj con acabados en oro y correa de cuero genuino.",
    imagen: "/images/articles/joya6.webp",
    enlace: "#",
  },
  {
    nombre: "Broche Elegante",
    descripcion: "Broche con diseño floral en oro rosa y detalles en cristal.",
    imagen: "/images/articles/joya7.webp",
    enlace: "#",
  },
  {
    nombre: "Anillo de Plata",
    descripcion: "Anillo de plata esterlina con diseño minimalista y moderno.",
    imagen: "/images/articles/joya8.jpg",
    enlace: "#",
  },
  {
    nombre: "Anillo de Diamantes",
    descripcion:
      "Hermoso anillo con diamantes incrustados, ideal para ocasiones especiales.",
    imagen: "/images/articles/joya1.jpg",
    enlace: "#",
  },
  {
    nombre: "Collar de Oro",
    descripcion:
      "Collar de oro de 18 quilates con diseño elegante y sofisticado.",
    imagen: "/images/articles/joya2.webp",
    enlace: "#",
  },
  {
    nombre: "Pulsera de Plata",
    descripcion:
      "Pulsera moderna de plata esterlina, perfecta para uso diario.",
    imagen: "/images/articles/joya3.webp",
    enlace: "#",
  },
  {
    nombre: "Aretes de Perla",
    descripcion:
      "Finos aretes con perlas naturales, un clásico que nunca pasa de moda.",
    imagen: "/images/articles/jpya4.webp",
    enlace: "#",
  },
];

function generarTarjetas(lista) {
  let tarjetasHTML = "";

  lista.forEach((producto) => {
    tarjetasHTML += `
        <div class="col d-flex justify-content-center">
          <div class="card h-100 d-flex flex-column" style="width: 18rem">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <div class="mt-auto">
                <a href="${producto.enlace}" class="btn btn-primary">Ver producto</a>
              </div>
            </div>
          </div>
        </div>
      `;
  });

  return tarjetasHTML;
}

// Obtener el contenedor y agregar las tarjetas
document.getElementById("card-container").innerHTML =
  generarTarjetas(productos);

let terminosCondiciones = `
<h5>1. Aceptación de los Términos</h5>
<p>Al acceder y utilizar el sitio web de [Nombre de la Joyería] ("nosotros", "nuestro", "nos"), aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con estos términos, te solicitamos que no utilices nuestro sitio.</p>

<h5>2. Uso del Sitio</h5>
<p>Nuestro sitio web está destinado a ser utilizado con fines comerciales y personales. No está permitido el uso del sitio para fines ilegales o no autorizados. Al acceder al sitio, te comprometes a no realizar actividades que puedan dañar, deshabilitar, sobrecargar o deteriorar el funcionamiento del sitio.</p>

<h5>3. Productos y Precios</h5>
<p>Nos esforzamos por proporcionar descripciones precisas de nuestros productos. Sin embargo, no garantizamos que los detalles de los productos, incluidos precios, descripciones o imágenes, sean siempre exactos o completos. Los precios y la disponibilidad están sujetos a cambios sin previo aviso.</p>

<h5>4. Pedido y Pago</h5>
<p>Para realizar un pedido, el usuario debe completar el formulario de compra y proporcionar información precisa y completa. Aceptamos diversos métodos de pago, que se detallan en el proceso de pago. El pago debe ser confirmado antes de que se procese cualquier pedido.</p>

<h5>5. Envío y Entrega</h5>
<p>Realizamos envíos a nivel nacional e internacional. Los plazos de entrega varían según la ubicación y el servicio de envío seleccionado. No nos hacemos responsables por demoras fuera de nuestro control, como problemas en la aduana o incidencias con el servicio de transporte.</p>

<h5>6. Devoluciones y Reembolsos</h5>
<p>Las joyas pueden ser devueltas dentro de los 15 días posteriores a la recepción del producto, siempre que se encuentren en su estado original, sin uso y con el empaque original. Los gastos de envío para las devoluciones corren por cuenta del cliente. Los productos personalizados o hechos a medida no son reembolsables.</p>

<h5>7. Garantía</h5>
<p>Ofrecemos una garantía limitada para defectos de fabricación en nuestras joyas. La garantía no cubre daños causados por mal uso, accidentes, o desgaste normal. Para hacer uso de la garantía, el cliente debe presentar prueba de compra.</p>

<h5>8. Propiedad Intelectual</h5>
<p>El contenido del sitio web, incluidos los textos, imágenes, logotipos y gráficos, son propiedad de [Nombre de la Joyería] y están protegidos por las leyes de propiedad intelectual. No se permite el uso no autorizado de estos materiales sin nuestro consentimiento previo.</p>

<h5>9. Protección de Datos Personales</h5>
<p>Tu privacidad es importante para nosotros. Nos comprometemos a proteger la información personal que nos proporcionas. Solo utilizamos tus datos personales para procesar tu pedido y mejorar tu experiencia de compra. Para más detalles, consulta nuestra Política de Privacidad.</p>

<h5>10. Modificaciones de los Términos</h5>
<p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor tan pronto como se publiquen en el sitio. Te recomendamos revisar periódicamente esta sección para estar informado sobre cualquier cambio.</p>

<h5>11. Ley Aplicable</h5>
<p>Estos términos se regirán e interpretarán de acuerdo con las leyes de [país o región] sin tener en cuenta sus conflictos de disposiciones legales. Cualquier disputa relacionada con estos términos se resolverá en los tribunales competentes de [ubicación].</p>

<h5>12. Contacto</h5>
<p>Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos a través de [correo electrónico de contacto] o llamando al [número de contacto].</p>
`;

// Obtener el contenedor y agregar las tarjetas
document.querySelector(".modal-body").innerHTML = terminosCondiciones;

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.classList.add("was-validated");
});
