import vDownloader from "@/assets/VDownloader.png";
import Artisans from "@/assets/Artisans.png";
import AHMedical from "@/assets/ah.png";
import Giphy from "@/assets/giffy.png";

export const projects = {
  es: [
    {
      title: "VDownloader",
      image: vDownloader,
      tags: ["React", "Electron", "TypeScript", "Tailwind", "Node"],
      link: "https://github.com/Mozzesdev/VDownloader",
      repo: "https://github.com/Mozzesdev/VDownloader",
      description:
        "Aplicación para descargar videos, listas de reproducción y shorts de YouTube.",
      content: `
        <div class="project-details">
          <section>
            <h3>🚀 Características avanzadas:</h3>
            <ul>
              <li>Descarga en 4K y 8K con soporte para HDR</li>
              <li>Sistema de conversión batch para múltiples formatos (MP4, WEBM, MP3, WAV)</li>
              <li>Integración con metadatos ID3 para archivos de audio</li>
            </ul>
          </section>
          
          <section>
            <h3>🛠 Arquitectura técnica:</h3>
            <p>Implementación multi-proceso usando <strong>Electron IPC</strong> para:</p>
            <ul>
              <li>Colas prioritarias de descarga</li>
              <li>Manejo de errores con reintentos automáticos</li>
              <li>Descargas paralelas con límite configurable</li>
            </ul>
            <p><strong>Optimizaciones:</strong> Uso de WebWorkers para procesamiento no bloqueante y caché LRU para búsquedas recurrentes</p>
          </section>
        </div>
      `,
    },
    {
      title: "ArtisansHub",
      image: Artisans,
      link: "https://inventary-app.vercel.app/",
      tags: ["React", "Next.js", "TypeScript"],
      description:
        "App para conectar artesanos talentosos con amantes del arte.",
      content: `
        <div class="project-details">
          <section>
            <h3>🎨 Experiencia del usuario:</h3>
            <ul>
              <li>Tour interactivo para nuevos usuarios</li>
              <li>Sistema de matching basado en preferencias (ML básico)</li>
              <li>Visualizador 3D para obras escultóricas</li>
              <li>Streaming en vivo para demostraciones artísticas</li>
            </ul>
          </section>

          <section>
            <h3>🔍 Búsqueda inteligente:</h3>
            <p>Implementación con <strong>ElasticSearch</strong> para:</p>
            <ul>
              <li>Búsqueda semántica por materiales y técnicas</li>
              <li>Filtros geolocalizados con radio de 50km</li>
              <li>Autocompletado predictivo</li>
            </ul>
          </section>

          <section>
            <h3>💳 Sistema de pagos:</h3>
            <ul>
              <li>Integración con Stripe y MercadoPago</li>
              <li>Reservas con depósito reembolsable</li>
              <li>Historial de transacciones con exportación PDF</li>
              <li>Notificaciones en tiempo real via WebSocket</li>
            </ul>
          </section>
        </div>
      `,
    },
    {
      title: "Giffy.io",
      image: Giphy,
      repo: "https://github.com/Mozzesdev/Giffy-App",
      link: "https://giffy-app-ten.vercel.app/",
      tags: ["React", "CSS", "Framer Motion", "Styled-Components"],
      description: "Sitio web para buscar gifs usando la API de Giphy.",
      content: `
        <div class="project-details">
          <section>
            <h3>🌈 Features interactivos:</h3>
            <ul>
              <li>Previsualización en hover con efecto parallax</li>
              <li>Modo grid/list con persistencia en LocalStorage</li>
              <li>Creación de colecciones personalizadas</li>
              <li>Compartir en redes sociales con metatags dinámicos</li>
            </ul>
          </section>

          <section>
            <h3>⚡ Optimizaciones de rendimiento:</h3>
            <ul>
              <li>Lazy loading con Intersection Observer</li>
              <li>Compresión de assets con WebP y AVIF</li>
              <li>Cache estratificado (SWR + LocalForage)</li>
              <li>Bundle splitting por rutas</li>
            </ul>
            <p><strong>Resultado:</strong> 95+ en Performance Lighthouse</p>
          </section>

          <section>
            <h3>🎮 Controles avanzados:</h3>
            <ul>
              <li>Atajos de teclado para navegación rápida</li>
              <li>Soporte para gestos táctiles en móviles</li>
              <li>API pública para desarrolladores</li>
              <li>Widget embeddable para terceros</li>
            </ul>
          </section>
        </div>
      `,
    },
    {
      title: "AH Medical Inventory",
      image: AHMedical,
      repo: "https://github.com/Mozzesdev/inventary-app",
      link: "https://inventary-app.vercel.app/",
      tags: ["React", "Vike.js", "Node", "Express", "Jest"],
      description: "Aplicación privada de inventario para servicios médicos.",
      content: `
        <div class="project-details">
          <section>
            <h3>🏥 Flujos críticos:</h3>
            <ul>
              <li>Alertas tempranas de caducidad (30/15/7 días)</li>
              <li>Integración con lectores de código de barras</li>
              <li>Sincronización offline-first con PouchDB</li>
              <li>Auditoría de trazabilidad completa</li>
            </ul>
          </section>

          <section>
            <h3>🔐 Seguridad reforzada:</h3>
            <ul>
              <li>Doble factor de autenticación</li>
              <li>Encriptación AES-256 para datos sensibles</li>
              <li>Registro de actividad con IP tracking</li>
              <li>Pentesting periódico con OWASP ZAP</li>
            </ul>
          </section>

          <section>
            <h3>📊 Business Intelligence:</h3>
            <ul>
              <li>Dashboard con métricas en tiempo real</li>
              <li>Proyecciones de stock con ML</li>
              <li>Integración con SAP y sistemas hospitalarios</li>
              <li>Exportación de datos a formatos médicos estándar (HL7)</li>
            </ul>
          </section>
        </div>
      `,
    },
  ],
  en: [
    {
      title: "VDownloader",
      image: vDownloader,
      tags: ["React", "Electron", "TypeScript", "Tailwind", "Node"],
      link: "https://github.com/Mozzesdev/VDownloader",
      repo: "https://github.com/Mozzesdev/VDownloader",
      description:
        "Application for downloading videos, playlists, and shorts from YouTube.",
      content: `
        <div class="project-details">
          <section>
            <h3>🚀 Advanced Features:</h3>
            <ul>
              <li>4K and 8K downloads with HDR support</li>
              <li>Batch conversion for multiple formats (MP4, WEBM, MP3, WAV)</li>
              <li>ID3 metadata integration for audio files</li>
            </ul>
          </section>
          
          <section>
            <h3>🛠 Technical Architecture:</h3>
            <p>Multi-process implementation using <strong>Electron IPC</strong> for:</p>
            <ul>
              <li>Priority download queues</li>
              <li>Error handling with auto-retries</li>
              <li>Parallel downloads with configurable limits</li>
            </ul>
            <p><strong>Optimizations:</strong> WebWorkers for non-blocking processing and LRU cache for frequent searches</p>
          </section>
        </div>
      `,
    },
    {
      title: "ArtisansHub",
      image: Artisans,
      link: "https://inventary-app.vercel.app/",
      tags: ["React", "Next.js", "TypeScript"],
      description: "App connecting talented artisans with art lovers.",
      content: `
        <div class="project-details">
          <section>
            <h3>🎨 User Experience:</h3>
            <ul>
              <li>Interactive onboarding tour</li>
              <li>Preference-based matching system (basic ML)</li>
              <li>3D viewer for sculptural works</li>
              <li>Live streaming for art demonstrations</li>
            </ul>
          </section>

          <section>
            <h3>🔍 Smart Search:</h3>
            <p>Implementation with <strong>ElasticSearch</strong> for:</p>
            <ul>
              <li>Semantic search by materials and techniques</li>
              <li>Geolocated filters with 50km radius</li>
              <li>Predictive autocomplete</li>
            </ul>
          </section>

          <section>
            <h3>💳 Payment System:</h3>
            <ul>
              <li>Stripe and MercadoPago integration</li>
              <li>Bookings with refundable deposits</li>
              <li>Transaction history with PDF export</li>
              <li>Real-time notifications via WebSocket</li>
            </ul>
          </section>
        </div>
      `,
    },
    {
      title: "Giffy.io",
      image: Giphy,
      link: "https://giffy-app-ten.vercel.app/",
      repo: "https://github.com/Mozzesdev/Giffy-App",
      tags: ["React", "CSS", "Framer Motion", "Styled-Components"],
      description: "Website to search for gifs using Giphy's API.",
      content: `
        <div class="project-details">
          <section>
            <h3>🌈 Interactive Features:</h3>
            <ul>
              <li>Hover preview with parallax effect</li>
              <li>Grid/list mode with LocalStorage persistence</li>
              <li>Custom collection creation</li>
              <li>Social sharing with dynamic metatags</li>
            </ul>
          </section>

          <section>
            <h3>⚡ Performance Optimizations:</h3>
            <ul>
              <li>Lazy loading with Intersection Observer</li>
              <li>Asset compression with WebP and AVIF</li>
              <li>Layered caching (SWR + LocalForage)</li>
              <li>Route-based bundle splitting</li>
            </ul>
            <p><strong>Result:</strong> 95+ Lighthouse Performance score</p>
          </section>

          <section>
            <h3>🎮 Advanced Controls:</h3>
            <ul>
              <li>Keyboard shortcuts for quick navigation</li>
              <li>Touch gesture support for mobile</li>
              <li>Public API for developers</li>
              <li>Embeddable widget for third parties</li>
            </ul>
          </section>
        </div>
      `,
    },
    {
      title: "AH Medical Inventory",
      image: AHMedical,
      repo: "https://github.com/Mozzesdev/inventary-app",
      link: "https://inventary-app.vercel.app/",
      tags: ["React", "Vike.js", "Node", "Express", "Jest"],
      description: "Private inventory app for medical services.",
      content: `
        <div class="project-details">
          <section>
            <h3>🏥 Critical Workflows:</h3>
            <ul>
              <li>Early expiration alerts (30/15/7 days)</li>
              <li>Barcode scanner integration</li>
              <li>Offline-first sync with PouchDB</li>
              <li>Full traceability audit</li>
            </ul>
          </section>

          <section>
            <h3>🔐 Enhanced Security:</h3>
            <ul>
              <li>Two-factor authentication</li>
              <li>AES-256 encryption for sensitive data</li>
              <li>Activity logging with IP tracking</li>
              <li>Regular pentesting with OWASP ZAP</li>
            </ul>
          </section>

          <section>
            <h3>📊 Business Intelligence:</h3>
            <ul>
              <li>Real-time metrics dashboard</li>
              <li>Stock projections with ML</li>
              <li>Integration with SAP and hospital systems</li>
              <li>Data export to medical standards (HL7)</li>
            </ul>
          </section>
        </div>
      `,
    },
  ],
};
