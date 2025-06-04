'use client';

import { useRef } from 'react';
import { IoImageSharp } from 'react-icons/io5';
import ServiceCard from './ServiceCard';
import ServiceDescription from './ServiceDescription';

export default function ServicesContainer() {
  const descriptionRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <section className="container-1024 m-auto flex flex-col md:flex-row justify-between items-center md:items-stretch gap-8">
        <ServiceCard
          icon={<IoImageSharp className="w-24 h-24" />}
          title="Mudanças Nacionais e Internacionais"
          description="Realizamos mudanças nacionais e internacionais com total segurança, agilidade, eficiência e equipe especializada."
          actionText="Ver detalhes"
          offsetTop={false}
          serviceKey="movingChange"
          scrollTargetRef={descriptionRef}
        />
        <ServiceCard
          icon={<IoImageSharp className="w-24 h-24" />}
          title={
            <>
              Limpeza Profissional
              <br />e Organizer
            </>
          }
          description="Cuidamos da limpeza e organização com agilidade e atenção aos detalhes para transformar seu espaço"
          actionText="Ver detalhes"
          offsetTop
          serviceKey="cleaning"
          scrollTargetRef={descriptionRef}
        />
        <ServiceCard
          icon={<IoImageSharp className="w-24 h-24" />}
          title="Armazenamento e Embalamento"
          description="Cuidamos do armazenamento e/ou embalamento com segurança, praticidade e atenção a cada detalhe."
          actionText="Ver detalhes"
          offsetTop
          serviceKey="storageAndPackaging"
          scrollTargetRef={descriptionRef}
        />
      </section>
      <ServiceDescription ref={descriptionRef} />
    </>
  );
}
