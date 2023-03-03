import * as yup from 'yup';
import { ApiProperty } from '@nestjs/swagger';

export const tracesRequestSchema = yup.object({
  ip: yup.string().required(),
});

export class TracesRequest {
  @ApiProperty({ example: '167.62.158.169', default: '167.62.158.169' })
  ip: string;
}
