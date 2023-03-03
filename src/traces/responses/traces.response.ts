import { ApiProperty } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

class TracesResponseCurrency {
  @ApiProperty({ example: 'ARS', default: 'ARS' })
  iso: string;
  @ApiProperty({ example: '$', default: '$' })
  symbol: string;
  @ApiProperty({ example: '0.023', default: '0.023' })
  conversion_rate: number;
}

export class TracesResponse {
  @ApiProperty({ example: '190.191.237.90', default: '190.191.237.90' })
  ip: string;
  @ApiProperty({ example: 'Argentina', default: 'Argentina' })
  name: string;
  @ApiProperty({ example: 'AR', default: 'AR' })
  code: string;
  @ApiProperty({ example: '-34.6022', default: '-34.6022' })
  lat: number;
  @ApiProperty({ example: '-58.3845', default: '-58.3845' })
  lon: number;
  @ApiModelProperty({ isArray: true, type: [TracesResponseCurrency] })
  currencies: Array<TracesResponseCurrency>;
  @ApiProperty({ example: '0', default: '0' })
  distance_to_usa: number;
}
