import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=1&offset=0');

    data.results.forEach( ({ name, url }) => {
      console.log('here we have name and url: ', name, url);
      const no = +url.split('/').at(-2);
      console.log('Here have no: ', no);
    });

    return {
      pokemons: data.results
    };
  }

}

