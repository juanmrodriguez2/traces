export interface TracesResponse {
  ip: string;
  name: string;
  code: string;
  lat: number;
  lon: number;
  currencies: [
    {
      iso: string;
      symbol: string;
      conversion_rate: number;
    },
    {
      iso: string;
      symbol: string;
      conversion_rate: number;
    },
  ];
  distance_to_usa: number;
}
