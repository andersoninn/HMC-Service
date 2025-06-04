'use client';
import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useState } from 'react';

import Slide from './Slide';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true, // loop ativado
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  // autoplay a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  const slides = [
    {
      title: 'Mudanças nacionais e internacionais',
      text: 'Cuidamos da sua mudança com precisão, seja para outro bairro ou outro país. Planejamento, transporte seguro e equipe experiente garantem uma transição tranquila do início ao fim.',
      index: 0,
      bgImage: '/movingChange.jpg',
    },
    {
      title: 'Limpeza de ambientes e pós-eventos',
      text: 'Ambientes limpos em tempo recorde. Atuamos com agilidade e discrição em limpezas residenciais, comerciais e pós-eventos, deixando tudo pronto para o próximo capítulo.',
      index: 1,
      bgImage: '/cleaning.jpg',
    },
    {
      title: 'Profissional Organizer',
      text: 'Transformamos caos em ordem. Organizamos espaços pessoais e profissionais com métodos inteligentes, praticidade e estética — facilitando sua rotina com leveza.',
      index: 2,
      bgImage: '/organizer.jpg',
    },
  ];

  return (
    <>
      <div className="navigation-wrapper z-10">
        <div
          ref={sliderRef}
          className={`keen-slider h-[80vh] transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slides.map((slide, i) => (
            <Slide
              key={i}
              data={{
                title: slide.title,
                text: slide.text,
                index: i,
                bgImage: slide.bgImage,
              }}
            />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={false}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={false}
            />
          </>
        )}
      </div>
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`hidden md:block arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled} w-2 h-2 md:w-8 md:h-8 cursor-pointer`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
