import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import CurriculoPrint from "../../curriculo";
import "./DownloadButton.css";


function DownloadButton() {
  const componentRef = useRef();

  const hoje = new Date();
  const ano = hoje.getFullYear();

  const handleDownloadPDF = () => {

    const element = componentRef.current;

    const opt = {
      margin: 0,
      filename: `Curriculo_Carlos_Gabriel_${ano}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait"
      },
      pagebreak: {
        mode: ["avoid-all", "css", "legacy"]
      }
    };

    html2pdf().set(opt).from(element).save();
  };



  return (
    <>
      {/* botão para gerar um pdf do certificado */}
      <div className="sticky-bottom text-start p-3 pb-5" style={{ width: 0 }}>
        <button onClick={handleDownloadPDF} className="download-button">
          <div className="docs">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Imprimir
          </div>

          <div className="download">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
        </button>
      </div>

      <div style={{ position: "absolute", left: "-9999px" }}>
        <div ref={componentRef}>
          <CurriculoPrint />
        </div>
      </div>
    </>
  );
};

export default DownloadButton;
