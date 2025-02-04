import { highlightCode } from "../utils";

export const posts = {
  en: [
    {
      id: 1,
      title: "Web Scraping in 15 Minutes: Extract Data from Any Website",
      date: "Feb 2, 2025",
      path: "web-scraping-in-15-minutes",
      category: "🧩 NodeJS",
      image: "https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png",
      description:
        "Learn web scraping with Node.js, extracting data and saving it to a JSON file.",
      content: `<div class="lang-section" id="en">
    <p><em>Practical tutorial for beginners using Node.js without external dependencies</em></p>

    <h2>🚀 What will you learn?</h2>
    <ul>
        <li>Extract titles and prices from a sample webpage.</li>
        <li>Save the data in a JSON file.</li>
        <li>Ethical and technical tips for responsible web scraping.</li>
    </ul>

    <!-- Step 1: Initial Setup -->
    <h2>🔧 Step 1: Initial Setup</h2>
    <p>Before you begin, make sure you have <a href="https://nodejs.org/" target="_blank">Node.js</a> installed. Then, create a new project:</p>
    <div class="code-block">
    <pre><code>${highlightCode(`mkdir web-scraping-tutorial
cd web-scraping-tutorial
npm init -y`)}</code></pre>
    </div>
    <p>In this step, we will install the necessary dependencies for working with web scraping. For this tutorial's example, we need the <code>jsdom</code> library, which allows us to manipulate HTML content as if we were working in a browser.</p>
    <p>Run the following command to install <code>jsdom</code> in your project:</p>
    <div class="code-block">
      <pre><code>${highlightCode(`npm install jsdom`)}</code></pre>
    </div>
    <p>This command will install <code>jsdom</code> as a dependency in your project. You can now use it to parse and manipulate the HTML from the pages you want to scrape.</p>

    <!-- Step 2: Web Scraping Script -->
    <h2>💻 Step 2: Scraping Script (scraper.js)</h2>
    <p>Now we will create a simple script that extracts book titles and prices from an example page (<a href="http://books.toscrape.com/" target="_blank">Books to Scrape</a>) and saves them to a JSON file.</p>

    <h3>2.1: HTTP Request</h3>
    <p>The first step is to get the content from the webpage we want to analyze. We will use the native JavaScript API called <code>fetch</code>, which allows us to make HTTP requests without needing external libraries like "axios".</p>
    <p>In this step, we make a <strong>GET</strong> request to the URL <code>http://books.toscrape.com/</code> to fetch the HTML content of the page.</p>
    <div class="code-block">
        <pre><code>${highlightCode(`const URL = 'http://books.toscrape.com/';

async function scrapeData() {
  try {
    const response = await fetch(URL);
    const data = await response.text();
    // Continue in the next step...
  } catch (error) {
    console.error('Error:', error.message);
  }
}`)}</code></pre>
    </div>
    <p>In this code snippet, we are using <code>fetch(URL)</code> to make an HTTP request to the page. Then, we convert the response to text using <code>response.text()</code>, which returns the HTML content of the page.</p>

    <h3>2.2: HTML Processing</h3>
    <p>Once we've obtained the HTML content of the page, we need to process it to extract the data we're interested in (in this case, the titles and prices of books). Instead of using <code>cheerio</code>, a jQuery library for the server, we use <code>JSDOM</code>.</p>
    <p><code>JSDOM</code> allows us to convert a string (the HTML we got from the page) into a <code>Document</code> object that we can manipulate with standard methods like <code>querySelectorAll</code> to select elements from the DOM.</p>
    <div class="code-block">
        <pre><code>${highlightCode(`import { JSDOM } from 'jsdom';  // Import JSDOM

const URL = 'http://books.toscrape.com/';

async function scrapeData() {
  try {
    const response = await fetch(URL);
    const data = await response.text();
    
    // Use JSDOM to create a browser-like environment
    const dom = new JSDOM(data);  // Here we create a JSDOM object with the obtained HTML
    const doc = dom.window.document;  // Access the DOM through window.document
    
    const books = [];
    const products = doc.querySelectorAll('article.product_pod');
    
    products.forEach((element) => {
      const title = element.querySelector('h3 a').getAttribute('title');
      const price = element.querySelector('p.price_color').textContent;
      books.push({ title, price });
    });
    
    writeFileSync('books.json', JSON.stringify(books, null, 2));
    console.log('Data saved!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

scrapeData();`)}</code></pre>
    </div>
    <p>In this snippet:</p>
    <ul>
        <li>First, we use <code>JSDOM</code> to parse the HTML we got from the GET request.</li>
        <li>Then, we create a <code>doc</code> object representing the page's DOM and use <code>querySelectorAll('article.product_pod')</code> to get all the elements containing the books.</li>
        <li>Within a <code>forEach</code> loop, we extract the title and price of each book. The title is obtained using <code>getAttribute('title')</code> on the link inside the <code>h3</code> element, and the price is retrieved using <code>textContent</code> from the paragraph with the <code>price_color</code> class.</li>
    </ul>

    <h3>2.3: Saving Data</h3>
    <p>Once we've extracted the data, we save it in a JSON file. We use Node.js's native <code>fs</code> module to write the file to the filesystem.</p>
    <p>The JSON file will contain the extracted books, with the title and price fields for each book. We use the <code>writeFileSync</code> function to save the file synchronously, meaning the process will pause until the file is saved.</p>
    <div class="code-block">
        <pre><code>${highlightCode(`import { writeFileSync } from 'fs';  // Import fs

const URL = 'http://books.toscrape.com/';

async function scrapeData() {
  try {
    const response = await fetch(URL);
    const data = await response.text();
    
    // Use JSDOM to create a browser-like environment
    const dom = new JSDOM(data);  // Here we create a JSDOM object with the obtained HTML
    const doc = dom.window.document;  // Access the DOM through window.document
    
    const books = [];
    const products = doc.querySelectorAll('article.product_pod');
    
    products.forEach((element) => {
      const title = element.querySelector('h3 a').getAttribute('title');
      const price = element.querySelector('p.price_color').textContent;
      books.push({ title, price });
    });
    
    writeFileSync('books.json', JSON.stringify(books, null, 2));  // Save the data
    console.log('Data saved!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

scrapeData();`)}</code></pre>
    </div>
    <p>In this code, after processing and extracting the data, we use <code>writeFileSync</code> to save the data in a file named <code>books.json</code>. The final result is a well-formatted JSON file containing a list of books with their respective titles and prices.</p>

    <!-- Final Output -->
    <h2>📊 Final Output</h2>
    <p>The generated file <strong>books.json</strong> will have the following format:</p>
    <div class="code-block">
        <pre><code>[ 
  {
    "title": "A Light in the Attic",
    "price": "£51.77"
  },
  {
    "title": "Tipping the Velvet",
    "price": "£53.74"
  },
  {
    "title": "Soumission",
    "price": "£50.10"
  },
  ...
]</code></pre>
    </div>

    <!-- Ethical and Technical Tips -->
    <h2>⚠️ Key Tips</h2>
    <ul>
        <li><strong>Always check the robots.txt file:</strong> This file tells you which parts of the website are allowed or disallowed for bots to scrape.</li>
        <li><strong>Avoid making too many requests in a short time:</strong> This can overload the server and cause problems. Use delays between requests if needed.</li>
        <li><strong>Respect the terms of service:</strong> Some websites explicitly prohibit web scraping in their terms of use.</li>
    </ul>
    <p><strong>GitHub Repository:</strong> <a href="https://github.com/yourusername/web-scraping-tutorial" target="_blank">Full code here</a></p>
</div>
`,
    },
  ],
  es: [
    {
      id: 1,
      title: "Web Scraping en 15 Minutos: Extrae Datos de Cualquier Web",
      date: "Feb 2, 2025",
      path: "web-scraping-in-15-minutes",
      category: "🧩 NodeJS",
      image: "https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png",
      description:
        "Aprende a hacer web scraping con Node.js, extrayendo datos y guardándolos en un archivo JSON.",
      content: `<div class="lang-section" id="es">
    <p><em>Tutorial práctico para principiantes usando Node.js sin dependencias externas</em></p>

    <h2>🚀 ¿Qué vas a aprender?</h2>
    <ul>
        <li>Extraer títulos y precios de una página web de ejemplo.</li>
        <li>Guardar los datos en un archivo JSON.</li>
        <li>Consejos éticos y técnicos para hacer scraping responsable.</li>
    </ul>

    <!-- Capa 1: Configuración Inicial -->
    <h2>🔧 Paso 1: Configuración Inicial</h2>
    <p>Antes de comenzar, asegúrate de tener instalado <a href="https://nodejs.org/" target="_blank">Node.js</a>. Luego,
      crea un nuevo proyecto:</p>
    <div class="code-block">
    <pre><code>${highlightCode(`mkdir web-scraping-tutorial
cd web-scraping-tutorial
npm init -y`)}</code></pre>
    </div>
    <p>En este paso, instalaremos las dependencias necesarias para trabajar con el web scraping. Para el ejemplo de este
      tutorial, necesitamos la librería <code>jsdom</code>, que nos permite manipular el contenido HTML como si estuviéramos
      trabajando en un navegador.</p>
    <p>Ejecuta el siguiente comando para instalar <code>jsdom</code> en tu proyecto:</p>
    <div class="code-block">
      <pre><code>${highlightCode(`npm install jsdom`)}</code></pre>
    </div>
    <p>Este comando instalará <code>jsdom</code> como una dependencia en tu proyecto. Ahora puedes usarlo para analizar y
      manipular el HTML de las páginas que quieras raspar.</p>

    <!-- Capa 2: Script de Web Scraping -->
    <h2>💻 Paso 2: Script de Scraping (scraper.js)</h2>
    <p>Ahora crearemos un script simple que extraiga los títulos y precios de libros desde una página de ejemplo (<a href="http://books.toscrape.com/" target="_blank">Books to Scrape</a>) y los guarde en un archivo JSON.</p>

    <h3>2.1: Solicitud HTTP</h3>
    <p>El primer paso es obtener el contenido de la página web que deseamos analizar. Para ello, usaremos la API nativa de JavaScript llamada <code>fetch</code>, que nos permite hacer solicitudes HTTP sin necesidad de librerías externas como "axios".</p>
    <p>En este paso, realizamos una solicitud <strong>GET</strong> a la URL <code>http://books.toscrape.com/</code> para obtener el contenido HTML de la página.</p>
    <div class="code-block">
        <pre><code>${highlightCode(`const URL = 'http://books.toscrape.com/';

async function scrapeData() {
  try {
    const response = await fetch(URL);
    const data = await response.text();
    // Continúa en la siguiente capa...
  } catch (error) {
    console.error('Error:', error.message);
  }
}`)}</code></pre>
    </div>
    <p>En este fragmento de código, estamos usando <code>fetch(URL)</code> para hacer una solicitud HTTP a la página. Luego, convertimos la respuesta en texto usando <code>response.text()</code>, lo que nos devuelve el HTML de la página.</p>

    <h3>2.2: Procesamiento del HTML</h3>
    <p>Una vez que hemos obtenido el contenido HTML de la página, necesitamos procesarlo para extraer los datos que nos interesan (en este caso, los títulos y precios de los libros). En lugar de usar <code>cheerio</code>, que es una librería de jQuery para el servidor, utilizamos <code>JSDOM</code>.</p>
    <p><code>JSDOM</code> nos permite convertir una cadena de texto (el HTML que obtuvimos de la página) en un objeto de tipo <code>Document</code> que podemos manipular con métodos estándar como <code>querySelectorAll</code> para seleccionar elementos del DOM.</p>
    <div class="code-block">
        <pre><code>${highlightCode(`import { JSDOM } from 'jsdom';  // Importamos JSDOM

const URL = 'http://books.toscrape.com/';

async function scrapeData() {
  try {
    const response = await fetch(URL);
    const data = await response.text();
    
    // Usamos JSDOM para crear un entorno similar al navegador
    const dom = new JSDOM(data);  // Aquí creamos un objeto JSDOM con el HTML obtenido
    const doc = dom.window.document;  // Accedemos al DOM a través de window.document
    
    const books = [];
    const products = doc.querySelectorAll('article.product_pod');
    
    products.forEach((element) => {
      const title = element.querySelector('h3 a').getAttribute('title');
      const price = element.querySelector('p.price_color').textContent;
      books.push({ title, price });
    });
    
    writeFileSync('books.json', JSON.stringify(books, null, 2));
    console.log('¡Datos guardados!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

scrapeData();`)}</code></pre>
    </div>
    <p>En este fragmento:</p>
    <ul>
        <li>Primero, usamos <code>JSDOM</code> para analizar el HTML que obtuvimos de la solicitud GET.</li>
        <li>Luego, creamos un objeto <code>doc</code> que representa el DOM de la página y utilizamos <code>querySelectorAll('article.product_pod')</code> para obtener todos los elementos que contienen los libros.</li>
        <li>Dentro de un ciclo <code>forEach</code>, extraemos el título y el precio de cada libro. El título se obtiene usando <code>getAttribute('title')</code> en el enlace dentro del elemento <code>h3</code>, y el precio se obtiene usando <code>textContent</code> del párrafo con clase <code>price_color</code>.</li>
    </ul>

    <h3>2.3: Guardado de Datos</h3>
    <p>Una vez que hemos extraído los datos, los guardamos en un archivo JSON. Usamos el módulo nativo de Node.js <code>fs</code> para escribir el archivo en el sistema de archivos.</p>
    <p>El archivo JSON contendrá los libros extraídos, con los campos de título y precio de cada libro. Usamos la función <code>writeFileSync</code> para guardar el archivo de forma síncrona, lo que significa que el proceso se detendrá hasta que el archivo se haya guardado.</p>
    <div class="code-block">
        <pre><code>${highlightCode(`import { writeFileSync } from 'fs';  // Importamos fs

const URL = 'http://books.toscrape.com/';

async function scrapeData() {
  try {
    const response = await fetch(URL);
    const data = await response.text();
    
    // Usamos JSDOM para crear un entorno similar al navegador
    const dom = new JSDOM(data);  // Aquí creamos un objeto JSDOM con el HTML obtenido
    const doc = dom.window.document;  // Accedemos al DOM a través de window.document
    
    const books = [];
    const products = doc.querySelectorAll('article.product_pod');
    
    products.forEach((element) => {
      const title = element.querySelector('h3 a').getAttribute('title');
      const price = element.querySelector('p.price_color').textContent;
      books.push({ title, price });
    });
    
    writeFileSync('books.json', JSON.stringify(books, null, 2));  // Guardamos los datos
    console.log('¡Datos guardados!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

scrapeData();`)}</code></pre>
    </div>
    <p>En este código, después de haber procesado y extraído los datos, usamos <code>writeFileSync</code> para guardar los datos en un archivo llamado <code>books.json</code>. El resultado final es un archivo JSON bien formateado que contiene una lista de libros con sus respectivos títulos y precios.</p>

    <!-- Capa 3: Output Final -->
    <h2>📊 Output Final</h2>
    <p>El archivo generado <strong>books.json</strong> tendrá el siguiente formato:</p>
    <div class="code-block">
        <pre><code>[ 
  {
    "title": "A Light in the Attic",
    "price": "£51.77"
  },
  {
    "title": "Tipping the Velvet",
    "price": "£53.74"
  },
  {
    "title": "Soumission",
    "price": "£50.10"
  },
  ...
]</code></pre>
    </div>

    <!-- Capa 4: Consejos Éticos y Técnicos -->
    <h2>⚠️ Consejos Clave</h2>
    <ul>
        <li><strong>Revisa siempre el archivo robots.txt:</strong> Este archivo indica qué partes del sitio web están permitidas o prohibidas para ser rastreadas por bots.</li>
        <li><strong>Evita hacer demasiadas peticiones en poco tiempo:</strong> Esto puede sobrecargar el servidor del sitio web y causar problemas. Usa retardos entre peticiones si es necesario.</li>
        <li><strong>Respeto a los términos de servicio:</strong> Algunos sitios prohíben explícitamente el web scraping en sus términos de uso.</li>
    </ul>
    <p><strong>Repositorio GitHub:</strong> <a href="https://github.com/tuusuario/web-scraping-tutorial" target="_blank">Código completo aquí</a></p>
</div>
`,
    },
  ],
};
