import { ApiProperty } from '@nestjs/swagger';

class CountryDataStatisticsResponse {
  @ApiProperty({ example: 'United States', default: 'United States' })
  country: string;
  @ApiProperty({ example: '1', default: '1' })
  value: number;
}
export class StatisticsResponse {
  @ApiProperty()
  longest_distance: CountryDataStatisticsResponse;
  @ApiProperty()
  most_traced: CountryDataStatisticsResponse;
}
