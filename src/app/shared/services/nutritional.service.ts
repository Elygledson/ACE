import { Injectable } from '@angular/core';
import { FoodNutritionalInfo } from 'src/app/nutritional-information/nutritional-information.component';

@Injectable({
  providedIn: 'root',
})
export class NutritionalService {
  private nutritionalInfo: Record<string, FoodNutritionalInfo[]> = {
    'farelo-camarao': [
      { item: 'SOJA FARELO', percentage: 47.6394 },
      { item: 'SOJÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 15 },
      { item: 'OLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCARIO', percentage: 0.1838 },
    ],
    'farelo-abacaxi': [
      { item: 'SOJA FARELO', percentage: 50 },
      { item: 'SOJÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 15 },
      { item: 'OLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCARIO', percentage: 0.1838 },
    ],
    'farelo-coco': [
      { item: 'SOJA FARELO', percentage: 50 },
      { item: 'SOJÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 1 },
      { item: 'OLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCARIO', percentage: 0.1838 },
    ],
    'farelo-trigo-amendoim': [
      { item: 'SOJA FARELO', percentage: 47.6394 },
      { item: 'SOJÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 15 },
      { item: 'OLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCARIO', percentage: 0.1838 },
    ],
    'farinha-casca-mandioca': [
      { item: 'SOJA FARELO', percentage: 47.6394 },
      { item: 'SOJÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 15 },
      { item: 'OLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCARIO', percentage: 0.1838 },
    ],
    'farinha-folha-mandioca': [
      { item: 'SOJA FARELO', percentage: 47.6394 },
      { item: 'SOJÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 15 },
      { item: 'OLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCARIO', percentage: 0.1838 },
    ],
    'farinha-manga': [
      { item: 'SOJA FARELO', percentage: 47.6394 },
      { item: 'SOJÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 15 },
      { item: 'OLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCARIO', percentage: 0.1838 },
    ],
    'varredura-mandioca': [
      { item: 'SOJA FARELO', percentage: 47.6394 },
      { item: 'SOJÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 15 },
      { item: 'OLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCARIO', percentage: 0.1838 },
    ],
  };

  constructor() {}

  getNutritionalInfo(food: string): any {
    console.log(food);
    return this.nutritionalInfo[food] || [];
  }
}
