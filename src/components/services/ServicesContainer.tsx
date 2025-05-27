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
          title="Mudanças lorem"
          description="Serviço completo de mudanças residenciais e comerciais com agilidade, segurança e equipe especializada."
          actionText="Ver detalhes"
          offsetTop={false}
          serviceKey="movingChange"
          scrollTargetRef={descriptionRef} // ✅ aqui
        />
        <ServiceCard
          icon={<IoImageSharp className="w-24 h-24" />}
          title="Limpeza"
          description="Oferecemos serviços de limpeza geral, pós-obra e higienização completa, com equipe treinada e resultado impecável."
          actionText="Ver detalhes"
          offsetTop
          serviceKey="cleaning"
          scrollTargetRef={descriptionRef} // ✅ aqui
        />
        <ServiceCard
          icon={<IoImageSharp className="w-24 h-24" />}
          title="Organizer"
          description="Organização de ambientes residenciais e comerciais com técnicas modernas e personalizadas."
          actionText="Ver detalhes"
          offsetTop
          serviceKey="organizer"
          scrollTargetRef={descriptionRef} // ✅ aqui
        />
      </section>
      <ServiceDescription ref={descriptionRef} />
    </>
  );
}
