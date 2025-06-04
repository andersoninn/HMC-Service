'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

export default function BudgetGeneratorCard() {
  const [serviceType, setServiceType] = useState('nacional');
  const [collaborators, setCollaborators] = useState('driverOnly');
  const [hours, setHours] = useState(2);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  // 🔧 Simulando distância real (em breve será calculado via API)
  const distanceKm = 25;

  const hourlyRate = useMemo(() => {
    switch (collaborators) {
      case 'driverOnly':
        return 30;
      case 'driverPlus1':
        return 40;
      case 'driverPlus2':
        return 50;
      default:
        return 0;
    }
  }, [collaborators]);

  const extraHelpers = useMemo(() => {
    switch (collaborators) {
      case 'driverPlus1':
        return 1;
      case 'driverPlus2':
        return 2;
      default:
        return 0;
    }
  }, [collaborators]);

  const shouldChargeDistance = distanceKm > 20;

  const basePerKm = serviceType === 'internacional' ? 2 : 1.5;
  const helperExtraPerKm = serviceType === 'internacional' ? 0.5 : 0.25;
  const ratePerKm = basePerKm + extraHelpers * helperExtraPerKm;

  const distanceCost = useMemo(() => {
    if (!shouldChargeDistance) return 0;
    return ratePerKm * distanceKm; // ✅ somente ida
  }, [distanceKm, ratePerKm, shouldChargeDistance]);

  const bookingFee = 30;
  const baseCost = Math.max(hours, 2) * hourlyRate;
  const totalWithoutIVA = baseCost + distanceCost;
  const iva = totalWithoutIVA * 0.23;
  const totalWithIVA = totalWithoutIVA + iva;
  const remainingAfterBooking = totalWithIVA;

  const handleGenerate = () => {
    console.log({
      serviceType,
      collaborators,
      hours,
      origin,
      destination,
      totalWithIVA,
    });
  };

  return (
    <Card className="max-w-2xl mx-auto my-8 p-6 space-y-6">
      <CardContent className="space-y-4">
        <h2 className="text-2xl font-bold">
          Prototipo do Gerador Orçamento - v1
        </h2>

        {/* Tipo de serviço */}
        <div className="space-y-2">
          <Label>Tipo de serviço</Label>
          <RadioGroup
            value={serviceType}
            onValueChange={setServiceType}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nacional" id="nacional" />
              <Label htmlFor="nacional">Nacional</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="internacional" id="internacional" />
              <Label htmlFor="internacional">Internacional</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Equipe */}
        <div className="space-y-2">
          <Label>Equipe</Label>
          <RadioGroup
            value={collaborators}
            onValueChange={setCollaborators}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="driverOnly" id="driverOnly" />
              <Label htmlFor="driverOnly">Somente motorista</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="driverPlus1" id="driverPlus1" />
              <Label htmlFor="driverPlus1">Motorista + 1 ajudante</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="driverPlus2" id="driverPlus2" />
              <Label htmlFor="driverPlus2">
                Motorista + 2 ajudantes (combo)
              </Label>
            </div>
            <div className="flex items-center space-x-2 opacity-50 cursor-not-allowed">
              <RadioGroupItem disabled value="moreThan3" id="moreThan3" />
              <Label htmlFor="moreThan3">Mais de 3 ajudantes (em breve)</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Horas */}
        <div className="space-y-2">
          <Label htmlFor="hours">Horas estimadas</Label>
          <Input
            id="hours"
            type="number"
            min={2}
            value={hours}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHours(Number(e.target.value))
            }
          />
        </div>

        {/* Endereços */}
        <div className="space-y-2">
          <Label htmlFor="origin">Endereço de origem</Label>
          <Input
            id="origin"
            placeholder="Ex: Rua A, Lisboa"
            value={origin}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOrigin(e.target.value)
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination">Endereço de destino</Label>
          <Input
            id="destination"
            placeholder="Ex: Rua B, Porto"
            value={destination}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDestination(e.target.value)
            }
          />
        </div>

        {/* Botão */}
        <Button className="w-full mt-4" onClick={handleGenerate}>
          Gerar orçamento
        </Button>

        {/* Resultados */}
        <div className="border-t pt-4 mt-6 space-y-1 text-sm text-gray-700">
          <p>
            Valor por hora: <strong>{hourlyRate.toFixed(2)}€</strong>
          </p>
          <p>
            Horas estimadas: <strong>{Math.max(hours, 2)}h</strong>
          </p>

          <p>
            Deslocamento: <strong>{distanceCost.toFixed(2)}€</strong>
            <details className="ml-2 mt-1">
              <summary className="cursor-pointer text-xs text-blue-600">
                Ver detalhes
              </summary>
              <div className="pl-4 mt-1 text-gray-600 space-y-1 text-xs">
                <p>
                  • Tipo de serviço:{' '}
                  {serviceType === 'nacional' ? 'Nacional' : 'Internacional'}
                </p>
                <p>• Base por km: {basePerKm.toFixed(2)}€</p>
                <p>• Ajudantes: {extraHelpers}</p>
                <p>
                  • Extra por ajudante: {helperExtraPerKm.toFixed(2)}€ ×{' '}
                  {extraHelpers} ={' '}
                  {(helperExtraPerKm * extraHelpers).toFixed(2)}€
                </p>
                <p>• Total por km: {ratePerKm.toFixed(2)}€</p>
                <p>• Distância: {distanceKm} km (somente ida)</p>
                <p>
                  • Valor deslocamento: {distanceKm} × {ratePerKm.toFixed(2)}€ ={' '}
                  {distanceCost.toFixed(2)}€
                </p>
              </div>
            </details>
          </p>

          <p>
            Taxa de agendamento: <strong>{bookingFee.toFixed(2)}€</strong>
          </p>
          <p>
            Subtotal (sem IVA): <strong>{totalWithoutIVA.toFixed(2)}€</strong>
          </p>
          <p>
            IVA (23%): <strong>{iva.toFixed(2)}€</strong>
          </p>
          <p className="font-semibold">
            Total da mudança: <strong>{totalWithIVA.toFixed(2)}€</strong>
          </p>

          {/* <div className="border-t pt-4 mt-4 text-base">
            <p className="text-yellow-600 font-semibold">
              Taxa de reserva (antecipada): {bookingFee.toFixed(2)}€
            </p>
            <p className="text-green-700 font-bold">
              Valor restante no dia da mudança:{' '}
              {remainingAfterBooking.toFixed(2)}€
            </p>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
