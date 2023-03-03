export interface StatisticsResponse {
  longest_distance: {
    country: string;
    value: number;
  };
  most_traced: {
    country: string;
    value: number;
  };
}
