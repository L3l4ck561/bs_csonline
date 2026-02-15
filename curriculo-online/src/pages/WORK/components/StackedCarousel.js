import React, { useState, useEffect } from "react";
import { slides } from "../data";
import "./StackedCarousel.css";

export default function StackedCarousel() {
  const [current, setCurrent] = useState(0);

  const total = slides.length;

  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  const move = (dir) => {
    setCurrent((prev) => (prev + dir + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => move(1), 10000);
    return () => clearInterval(interval);
  }, []);

  const renderCard = (index, position) => {
    const slide = slides[index];

    return (
      <div
        key={index}
        className={`carousel-card ${position}`}
      >
        <a href={slide.url} target="_blank" rel="noreferrer">
          <img src={slide.img} alt={slide.desc.nome} />
        </a>
      </div>
    );
  };

  return (
    <>
      <h3 className="mb-5 text-center" id="aplicacoes" >Aplicações</h3>

      <div className="carousel-wrapper">
        {renderCard(prevIndex, "prev")}
        {renderCard(current, "active")}
        {renderCard(nextIndex, "next")}

        <button className="btn-control btn-prev" onClick={() => move(-1)}>❮</button>
        <button className="btn-control btn-next" onClick={() => move(1)}>❯</button>
      </div>

      <div className="info text-center mt-4">
        <h5>
          {slides[current].desc.nome}
          {" "}
          <span
            className={
              slides[current].desc.status === "Concluído"
                ? "badge bg-success"
                : "badge bg-warning"
            }
          >
            {slides[current].desc.status}
          </span>
        </h5>

        <p>{slides[current].desc.texto}</p>

        {slides[current].desc.tec.map((tec, i) => (
          <span key={i} className="badge bg-info me-1">
            {tec}
          </span>
        ))}
      </div>
    </>
  );
}
