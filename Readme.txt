GRIMONI.COM
===========

Sitio web corporativo estático de Grimoni, SLU.

Grimoni diseña sistemas de inteligencia artificial para operaciones reales:
conectamos el conocimiento distribuido de una organización y lo convertimos en
sistemas que entienden el contexto, ejecutan procesos y escalan con control
humano.

El sitio presenta:
- Soluciones de IA aplicadas a operaciones.
- La arquitectura del sistema: conocimiento, modelos especializados, módulos
  verticales, agentes y control humano.
- Ejemplos de aplicación por sectores.
- El método de trabajo, desde la definición del proceso hasta la operación.
- Información de contacto, privacidad, cookies, condiciones y aviso legal.

TECNOLOGÍAS
-----------

- HTML5 estático
- CSS propio: assets/css/grimoni.css
- JavaScript sin dependencias: assets/js/grimoni.js
- Fuentes web locales en formato WOFF2
- Imágenes y recursos estáticos locales

No requiere compilación, instalación de paquetes ni servidor de aplicaciones.

ESTRUCTURA
----------

/                       Versión en español
/ca/                    Versión en catalán
/en/                    Versión en inglés
/assets/css/            Hojas de estilo
/assets/js/             Interacciones de navegación y página
/assets/fonts/          Tipografías locales y licencias
/assets/img/            Logotipos, iconos e imágenes
sitemap.xml             Sitemap multilingüe
robots.txt              Directivas para rastreadores

PÁGINAS PRINCIPALES
-------------------

index.html              Inicio
soluciones.html         Soluciones
arquitectura.html       Arquitectura del sistema
sectores.html           Sectores y casos de aplicación
metodo.html             Método de trabajo
contacto.html           Contacto

También se incluyen las páginas de aviso legal, privacidad, cookies y
condiciones en los tres idiomas.

EJECUCIÓN LOCAL
---------------

Puede abrirse directamente desde index.html. Para probarlo con un servidor
local, desde la raíz del proyecto:

    python -m http.server 8000

Después, abre http://localhost:8000/ en el navegador.

DESPLIEGUE
----------

Publica el contenido de esta carpeta en la raíz del hosting de grimoni.com.
El sitio usa rutas relativas y contiene etiquetas canonical y hreflang para:

- Español:  https://grimoni.com/
- Catalán:  https://grimoni.com/ca/
- Inglés:   https://grimoni.com/en/

CONTACTO
--------

Grimoni, SLU
info@grimoni.com
Carrer Esteve Albert, Edifici La Roureda, bloc A, 1r pis, 2a porta
Santa Coloma · Andorra la Vella
