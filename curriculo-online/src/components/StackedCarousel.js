import React, { useState, useEffect } from 'react';
import './StackedCarousel.css'; // Importamos o CSS separado

const data = [
  {
    "img": process.env.PUBLIC_URL + '/lostfound.png',
    "url": 'https://github.com/L3l4ck561/LostFound?tab=readme-ov-file#readme',
    "desc": {
      'nome': 'LostFound',
      'status': 'Concluído',
      'texto': 'Aplicativo web para tratamento de itens perdidos',
      'tec': ['HTML', 'JavaScript', 'CSS', 'Python', 'MySql']
    },
  },
  {
    "img": process.env.PUBLIC_URL + '/cucuja.png',
    "url": 'https://birdgamejam.itch.io/a-toca-da-coruja',
    "desc": {
      'nome': 'Toca da coruja',
      'status': 'Concluído',
      'texto': 'Feito em gráficos 2D e Pixel art, inspirado em jogos retrô,',
      'tec': ['construct 2']
    },
  },
  {
    "img": process.env.PUBLIC_URL + '/senai+.png',
    "url": "https://github.com/SergioPelais/SENAI-/tree/main",
    "desc": {
      'nome': 'Senai+',
      'status': 'Concluído',
      'texto': 'Sistema web para controle de entradas e saídas de alunos',
      'tec': ['Python', 'HTML/CSS', 'JavaScript','MySQL','logs']
    },
  },
  {
    "img": process.env.PUBLIC_URL + '/tristeza.png',
    "url": "https://l3l4ck561.github.io/setembroAmarelo/",
    "desc": {
      'nome': 'SetembroAmarelo',
      'status': 'Concluído',
      'texto': 'Evento Senai - semana de tecnologia. Com temática: DivertidaMente',
      'tec': ['HTML', 'JavaScript', 'CSS']
    },
  },
  {
    "img": 'https://picsum.photos/id/1015/500/300',
    "url": "http://localhost:3000/bs_csonline#/portifolio",
    "desc": {
      'nome': 'Gerenciador de estoque - fármacos(Mn)',
      'status': 'Em andamento',
      'texto': '',
      'tec': []
    },
  },
]

const StackedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [info, setInfo] = useState(1);

  const getTransform = (offset) => {
    const baseOffset = 100;
    const baseScale = 0.1;
    const baseRotate = 10;
    const x = offset * baseOffset;
    const scale = 1 - Math.abs(offset) * baseScale;
    const rotate = offset * baseRotate;
    return `translateX(${x}px) scale(${scale}) rotateY(${rotate}deg)`;
  };

  const getOpacity = (offset) => {
    return 1 - Math.abs(offset) * 0.2;
  };

  const moveCarousel = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (<>
    <div className="carousel-wrapper">
      <div className="carousel-stacked">
        {data.map((src, index) => {
          const offset = index - currentIndex;
          const adjustedOffset = ((offset + data.length + 2) % data.length) - 2;

          if (Math.abs(adjustedOffset) > 2) {
            return null; // só mostra 5 imagens
          }
          return (
            <div data-bs-ride="carousel"
              key={index}
              className={`carousel-card ${adjustedOffset === 0 ? 'active' : ''}`}
              style={{
                transform: getTransform(adjustedOffset),
                opacity: getOpacity(adjustedOffset),
                zIndex: adjustedOffset === 0 ? 10 : 10 - Math.abs(adjustedOffset),
                visibility: 'visible',
              }}
            >

              <a href={src.url}><img src={src.img} alt={`Slide ${index}`} /></a>
              {
                offset == 0 ? info != index ? setInfo(index) : '' : ''
              }
            </div>
          );
        })}
      </div>
      <button className="btn-control btn-prev" onClick={() => moveCarousel(-1)}>❮</button>
      <button className="btn-control btn-next" onClick={() => moveCarousel(1)}>❯</button>
    </div>

    <div className='info'>
      <h5>Projeto {info + 1}: {data[info].desc.nome} <span className={data[info].desc.status == 'Concluído' ? 'badge bg-success' : 'badge bg-warning'}>{data[info].desc.status}</span></h5>
      <p>{data[info].desc.texto}</p>
      {data[info].desc.tec.map(e => <span className="badge bg-info me-1">{e}</span>)}
    </div>
  </>
  );
};

export default StackedCarousel;
