import React, { useRef } from "react";
import "./DownloadButton.css";
import CurriculoPrint from "../../curriculo";
import { useReactToPrint } from "react-to-print";

function DownloadButton() {
  const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,           // ← isso é o novo padrão recomendado
        documentTitle: "Curriculo_Carlos_Gabriel_2026",
        onBeforeGetContent: () => console.log("Preparando impressão..."),
        onAfterPrint: () => console.log("Impressão finalizada"),
    });

  return (
    <>
      {/* botão para gerar um pdf do certificado */}
      <div className="sticky-bottom text-start p-3 pb-5" style={{width:0}}>
        <button onClick={() => handlePrint()} className="download-button">
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
      <div style={{ display: "none" }}>
        <CurriculoPrint ref={componentRef} />
      </div>
    </>
  );
};

export default DownloadButton;
