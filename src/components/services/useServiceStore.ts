// src/store/useServiceStore.ts
import { create } from 'zustand';

type ServiceType = 'movingChange' | 'cleaning' | 'organizer' | null;

interface ServiceStore {
  selectedService: ServiceType;
  setSelectedService: (service: ServiceType) => void;
}

export const useServiceStore = create<ServiceStore>(set => ({
  selectedService: 'movingChange',
  setSelectedService: service => set({ selectedService: service }),
}));
