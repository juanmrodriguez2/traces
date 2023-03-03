import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface IpInfo {
  countryCode: string;
  country: string;
  lat: number;
  lon: number;
  currency: string;
  ß;
}

@Injectable()
export class IpService {
  private readonly baseUrl = 'http://ip-api.com';
  async getIpInfo(ipAddress: string): Promise<IpInfo> {
    const response = await axios.get<IpInfo>(
      `${this.baseUrl}/json/${ipAddress}?fields=country,countryCode,lat,lon,currency`,
    );
    return response.data;
  }
}
