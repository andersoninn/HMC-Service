'use client';

import { ReactNode, RefObject } from 'react';
import { Button } from '../ui/button';
import { useServiceStore } from './useServiceStore';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionText: string;
  offsetTop?: boolean;
  serviceKey: 'movingChange' | 'cleaning' | 'organizer';
  scrollTargetRef?: RefObject<HTMLElement | null>;
}

export default function ServiceCard({
  icon,
  title,
  description,
  actionText,
  offsetTop = false,
  serviceKey,
  scrollTargetRef,
}: ServiceCardProps) {
  const { setSelectedService, selectedService } = useServiceStore();

  const isSelected = selectedService === serviceKey;

  return (
    <article
      className={`z-30 flex flex-col justify-between p-8 py-10 shadow-lg md:w-full md:flex-1 text-center min-h-[380px] h-full transition-colors duration-200 max-w-[80%] animate__animated animate__fadeInUp ${
        offsetTop ? 'md:-mt-24' : '-mt-24'
      } ${
        isSelected
          ? 'bg-stone-900 text-white'
          : 'bg-white hover:bg-stone-800 hover:text-white'
      }`}
    >
      <div className="flex flex-col gap-6 items-center flex-grow">
        <span className="p-0 -mb-4">{icon}</span>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="-mt-2">{description}</p>
      </div>

      <Button
        variant="service"
        onClick={() => {
          setSelectedService(serviceKey);
          scrollTargetRef?.current?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="mt-6 uppercase"
      >
        {actionText}
      </Button>
    </article>
  );
}
