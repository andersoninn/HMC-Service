'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { highlightServiceTitle } from '@/utils/highlightServiceTitle';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Ana Silva',
    message:
      'O serviço de mudança foi impecável. Tudo chegou no prazo e em perfeito estado, com cuidado, organização e atenção aos detalhes.',
    wide: true,
  },
  {
    name: 'Carlos Andrade',
    message:
      'A limpeza pós-evento deixou o ambiente como novo. Recomendo demais!',
  },
  {
    name: 'Fernanda Lima',
    message:
      'A organização dos meus armários transformou completamente minha rotina diária. Nunca pensei que algo tão simples, prático e bem executado poderia ter tanto impacto positivo, trazendo mais leveza, funcionalidade e harmonia para todos os meus dias.',
    tall: true,
  },
  {
    name: 'Mariana Rocha',
    message: 'Transformaram completamente meu closet. Profissionais incríveis!',
  },
  {
    name: 'Ricardo Pires',
    message:
      'Com a ajuda da equipe, nossa mudança foi leve e organizada. Sensacional!',
  },
  {
    name: 'Lucas Martins',
    message:
      'A atenção aos detalhes fez toda a diferença. Desde o primeiro contato até a finalização, tudo impecável.',
    wide: true,
  },
  {
    name: 'Gabriela Nunes',
    message: '"Limpeza de qualidade, rápida e eficaz. Voltarei a contratar!',
  },
  {
    name: 'Tiago Ferreira',
    message:
      'Organização surpreendente. Minha casa nunca esteve tão funcional!',
  },
  {
    name: 'Beatriz Souza',
    message: 'Limpeza rápida e sem complicações. Voltarei a contratar!',
  },
  {
    name: 'Débora Luiz',
    message:
      'Equipe incrível e super atenciosa! A mudança foi feita com muito carinho e segurança.',
    wide: true,
  },
  {
    name: 'Felipe Almeida',
    message:
      'A equipe superou expectativas. Foram ágeis e bastante cuidadosos.',
  },
];

const title = 'Clientes reais. Resultados verdadeiros.';
const highlights = ['Clientes ', 'verdadeiros '];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-stone-900" id="testemonials">
      <section className="md:container-1024 m-auto py-16 mt-24 max-w-[80%]">
        <article className="flex flex-col gap-4 text-start md:text-center text-white">
          <h2 className="text-3xl font-bold mb-2">
            {highlightServiceTitle(title, highlights)}
          </h2>
          <p className="mb-10" id="seeLess">
            Veja como transformamos mudanças caóticas em experiências leves,
            espaços bagunçados em refúgios organizados e eventos em ambientes
            impecáveis.
          </p>
        </article>

        <div className="relative">
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:auto-rows-[100px] transition-all duration-500',
              !showAll && 'max-h-[450px] overflow-hidden lg:max-h-none'
            )}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={cn(
                  'col-span-1 row-span-1',
                  testimonial.wide && 'lg:col-span-2',
                  testimonial.tall && 'row-span-2'
                )}
              >
                <Card className="h-full shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="px-4 py-3 flex flex-col justify-between h-full">
                    <p className="text-gray-700 italic">
                      "{testimonial.message}"
                    </p>
                    <p className="mt-1.5 text-right font-semibold text-gray-900">
                      — {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none lg:hidden" />
          )}
        </div>

        <div className="flex justify-center mt-6 lg:hidden">
          <Button
            variant="outline"
            onClick={() => {
              if (showAll) {
                setShowAll(false);

                setTimeout(() => {
                  document.getElementById('seeLess')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }, 200); // espere a transição do max-height (duração = 500ms, use um valor menor)
              } else {
                setShowAll(true);
              }
            }}
          >
            {showAll ? 'Ver menos' : 'Ver mais'}
          </Button>
        </div>
      </section>
    </section>
  );
}
