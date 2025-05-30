'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useServiceStore } from './useServiceStore';
import { highlightServiceTitle } from '@/utils/highlightServiceTitle';
import React from 'react';

type ServiceInfo = {
  title: string;
  description: string;
  link: string;
};

const ServiceDescription = forwardRef<HTMLElement, {}>(
  (_, ref): React.ReactElement | null => {
    const { selectedService } = useServiceStore();

    if (!selectedService) {
      return (
        <p className="text-gray-500">
          Selecione um serviço para ver os detalhes.
        </p>
      );
    }

    const serviceDetails: Record<string, ServiceInfo> = {
      movingChange: {
        title:
          'Especialistas em mudanças desafiadoras. Você relaxa, a gente resolve.',
        description:
          'Cuidamos de cada detalhe da sua mudança, do planejamento à execução. Com equipe experiente, transporte seguro e agilidade, sua única preocupação será escolher o novo lugar favorito da casa.',
        link: '/servicos/mudanca',
      },
      cleaning: {
        title: 'Limpeza feita por quem entende. Rápido, discreto e confiável.',
        description:
          'Do dia a dia ao pós-mudança, entregamos ambientes impecáveis com agilidade e discrição. Nossa equipe é treinada para limpar com eficiência, respeitando seu tempo, sua rotina e seu espaço',
        link: '/servicos/limpeza',
      },
      organizer: {
        title:
          'Organização profissional para quem valoriza tempo, espaço e bem-estar.',
        description:
          'Organizamos sua casa ou espaço de trabalho com método e sensibilidade. Cada objeto no lugar certo, de forma funcional e personalizada — para que você ganhe tempo, clareza e tranquilidade no dia a dia.',
        link: '/servicos/organizacao',
      },
    };

    const highlightMap: Record<string, string[]> = {
      movingChange: [
        'Especialistas',
        'em',
        'mudanças',
        'a',
        'gente',
        'resolve',
      ],
      cleaning: ['Limpeza', 'Rápido', 'discreto', 'confiável'],
      organizer: [
        'Organização',
        'profissional',
        'valoriza',
        'tempo',
        'espaço',
        'bem-estar',
      ],
    };

    const highlights = highlightMap[selectedService] || [];
    const service = serviceDetails[selectedService];

    return (
      <section className="mt-12" ref={ref} id="services">
        <article className="md:container-1024 m-auto flex flex-col md:flex-row items-center justify-between gap-8 max-w-[80%]">
          <article className="flex-1 md:w-1/2 flex flex-col justify-start gap-4">
            <h2 className="text-3xl font-bold mb-2 relative z-10 flex flex-wrap gap-x-1">
              {highlightServiceTitle(service.title, highlights)}
            </h2>

            <p className="mb-4 md:max-w-[440px]">{service.description}</p>
            <Button asChild className="uppercase w-64" variant="dark">
              <a href={service.link}>Saiba mais</a>
            </Button>
          </article>

          <article className="md:w-1/2 w-full h-64 relative overflow-hidden">
            <Image
              alt={selectedService}
              src={`/${selectedService}.jpg`}
              fill
              className="object-cover"
            />
          </article>
        </article>
      </section>
    );
  }
);

export default ServiceDescription;
