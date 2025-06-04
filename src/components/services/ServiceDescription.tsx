'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useServiceStore } from './useServiceStore';
import { highlightServiceTitle } from '@/utils/highlightServiceTitle';
import React from 'react';
import Link from 'next/link';

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
          'Mudanças nacionais e internacionais, grandes ou pequenas. Você relaxa, a gente resolve.',
        description:
          'Fazemos mudanças de qualquer porte, para qualquer destino. Do planejamento ao transporte, nossa equipe cuida de tudo com agilidade, segurança e atenção aos detalhes — seja uma caixa ou uma casa inteira.',

        link: '/servicos/mudanca',
      },
      cleaning: {
        title:
          'Limpeza profissional e organização inteligente. Cada coisa no seu lugar — e sua rotina no controle.',
        description: `
          • Limpezas completas em casas, escritórios, eventos e muito mais — com agilidade, discrição e equipe treinada.  
          • Organização personalizada com nossa profissional expert, que não só arruma, mas ensina como manter tudo no lugar.  

          Do brilho à funcionalidade, transformamos espaços e ajudamos você a manter a ordem todos os dias.`,
        link: '/servicos/limpeza',
      },
      storageAndPackaging: {
        title:
          'Embalamento e armazenamento com método. Para sua casa, sua empresa ou o mundo.',
        description:
          'Embalamos com segurança para mudanças, envios internacionais ou armazenamento local. Também disponibilizamos espaços organizados e prontos para guardar o que importa, com praticidade, discrição e todo o cuidado que seus bens merecem.',
        link: '/servicos/organizacao',
      },
    };

    const highlightMap: Record<string, string[]> = {
      movingChange: ['Mudanças', 'grandes', 'pequenas', 'relaxa', 'resolve'],
      cleaning: [
        'Limpeza',
        'organização',
        'profissional',
        'inteligente',
        'controle',
      ],
      storageAndPackaging: [
        'Embalamento',
        'armazenamento',
        'método',
        'casa',
        'empresa',
        'mundo',
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

            <p className="mb-4 md:max-w-[440px] whitespace-pre-line">
              {service.description}
            </p>

            <Button asChild className="uppercase w-64" variant="dark">
              {/* <a href={service.link}>Orçamento</a> */}
              <Link href="https://wa.me/351919393811" target="_blank">
                Orçamento
              </Link>
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
