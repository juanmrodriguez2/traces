import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface RatesData {
  base: string;
  date: string;
  rates: { [key: string]: number };
  success: boolean;
  timestamp: number;
}

@Injectable()
export class FixerService {
  private readonly baseUrl = 'https://api.apilayer.com/fixer';

  async getRates(currency: string): Promise<RatesData> {
    const url = `${this.baseUrl}/latest?base=USD&symbols=${currency}`;
    const response = await axios.get(url, {
      headers: {
        apikey: process.env.FIXER_API_KEY ?? '',
      },
    });
    return response.data;
  }
}
