# Introduccion a JavaScript

## ¿Qué es JavaScript?
JavaScript o JS como hoy es conocido es el lenguaje de programación o scripting, dinámico, que da vida a todo lo que consumimos a través de un navegador de internet. Fue creado, originalmente, para agregar al texto HTML la capacidad de tener lógica de programación o funcionalidad y luego no paró de evolucionar.

### ¿Qué puede y qué NO puede hacer JavaScript en el navegador?

En el navegador JavaScript puede realizar cualquier cosa relacionada con la manipulación de una página web, interacción con el usuario y el servidor web. Por ejemplo:
* Agregar nuevo HTML a la página, cambiar el contenido existente y modificar estilos.
* Reaccionar a las acciones del usuario, ejecutarse con los clics del ratón, movimientos del puntero y al oprimir teclas.
* Enviar solicitudes de red a servidores remotos, descargar y cargar archivos (Tecnologías llamadas AJAX y COMET).
* Obtener y configurar cookies, hacer preguntas al visitante y mostrar mensajes.
* Recordar datos en el lado del cliente con el almacenamiento local (“local storage”).

Sin embargo las capacidades de JavaScript en el navegador están limitadas para proteger la seguridad de usuario. El objetivo es evitar que una página maliciosa acceda a información privada o dañe los datos de usuario. Por ejemplo:
* JavaScript en el navegador no puede leer y escribir arbitrariamente archivos en el disco duro, copiarlos o ejecutar programas. No tiene acceso directo a funciones del Sistema operativo (OS).
* Los navegadores más modernos le permiten trabajar con archivos, pero el acceso es limitado y solo permitido si el usuario realiza ciertas acciones, como “arrastrar” un archivo a la ventana del navegador o seleccionarlo por medio de una etiqueta &lt;input&gt;.
* Existen maneras de interactuar con la cámara, micrófono y otros dispositivos, pero eso requiere el permiso explícito del usuario.
* Diferentes pestañas y ventanas generalmente no se conocen entre sí. A veces sí lo hacen: por ejemplo, cuando una ventana usa JavaScript para abrir otra. Pero incluso en este caso, JavaScript no puede acceder a la otra si provienen de diferentes sitios (de diferente dominio, protocolo o puerto).
* JavaScript puede fácilmente comunicarse a través de la red con el servidor de donde la página actual proviene. Pero su capacidad para recibir información de otros sitios y dominios está bloqueada. Aunque sea posible, esto requiere un acuerdo explícito (expresado en los encabezados HTTP) desde el sitio remoto.

### ¿Cómo agregar JavaScript en una página web?

```html
// Guión en línea
<button onclick="alert('Hola mundo!')">Click Me</button>

// Guión interno
<script>
      console.log('Hola mundo!')
</script>

// Guión externo
<script src="introduccion.js" ></script>
```

### ¿Qué es NodeJs?

Lo primero que tenemos que enfrentar a la hora de deshacernos del browser o navegador es que vamos a necesitar un Entorno de Ejecución JS en nuestro equipo o sistema operativo para que logremos ejecutar el código escrito en JavaScript. NodeJs es un motor de ejecución de JavaScript open-source que está basado en el motor de Javascript que Google creo para el navegador Chrome y que es llamado V8.
