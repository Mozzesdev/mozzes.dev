import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/useLanguage";

const PdfView = () => {
  const { language } = useLanguage();
  const [pdf, setPdf] = useState<string | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdfFile = await import(
          `../assets/Resumen (${language === "es" ? "Es" : "En"}).pdf`
        );
        setPdf(pdfFile.default);
      } catch (error) {
        console.error("Error al cargar el PDF:", error);
        setPdf(null);
      }
    };

    loadPdf();
  }, [language]);

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <title>
        {language === "es" ? "Resumen | Mozzesdev" : "Summary | Mozzesdev"}
      </title>
      {pdf ? (
        <object data={pdf} type="application/pdf" width="100%" height="100%">
          <p>
            Tu navegador no soporta la visualización de PDFs. Puedes descargarlo{" "}
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              aquí
            </a>
          </p>
        </object>
      ) : (
        <p>Cargando PDF...</p>
      )}
    </div>
  );
};

export default PdfView;
