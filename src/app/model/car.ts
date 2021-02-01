export interface Car {
  id: number;
  brand: string;
  model: string;
  engineVolume: number;
  prodYear: number;
  interior: {
    heatedSeats: boolean;
    cupHolders: number;
  };
}
