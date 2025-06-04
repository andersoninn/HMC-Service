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
      text: 'Realizamos mudanças com total segurança, eficiência e agilidade — seja para outro bairro ou outro país. Conte com equipe especializada e transporte cuidadoso em cada detalhe.',
      index: 0,
      bgImage: '/movingChange.jpg',
    },
    {
      title: 'Limpeza profissional e organização inteligente',
      text: 'Transformamos seu espaço com limpeza ágil e organização inteligente. Cuidamos de tudo com atenção aos detalhes — do pós-evento ao dia a dia.',
      index: 1,
      bgImage: '/cleaning.jpg',
    },
    {
      title: 'Armazenamento e embalamento',
      text: 'Soluções práticas para guardar ou embalar seus bens com segurança. Ideal para mudanças, viagens ou reformas. Tudo protegido com carinho e eficiência.',
      index: 2,
      bgImage: '/storage.jpg',
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
