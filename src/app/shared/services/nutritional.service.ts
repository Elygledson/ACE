import { Injectable } from '@angular/core';
import { FoodNutritionalInfo } from 'src/app/nutritional-information/nutritional-information.component';

@Injectable({
  providedIn: 'root',
})
export class NutritionalService {
  private nutritionalInfo: Record<string, FoodNutritionalInfo[]> = {
    'camarao-farelo': [
      { item: 'MILHO GRÃO', percentage: 35.9356 },
      { item: 'SOJA FARELO', percentage: 25.8021 },
      { item: 'CAMARÃO FARELO', percentage: 25 },
      { item: 'ÓLEO DE SOJA', percentage: 8.9812 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8756 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCÁRIO', percentage: 0.4054 },
    ],
    'farelo-abacaxi': [
      { item: 'SOJA FARELO', percentage: 51.4637 },
      { item: 'MILHO GRÃO', percentage: 23.3571 },
      { item: 'FARELO ABACAXI', percentage: 15 },
      { item: 'ÓLEO DE SOJA', percentage: 6.1264 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8019 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCÁRIO', percentage: 0.2509 },
    ],
    'farelo-coco': [
      { item: 'SOJA FARELO', percentage: 51.2749 },
      { item: 'COCO FARELO', percentage: 20 },
      { item: 'MILHO GRÃO', percentage: 19.399 },
      { item: 'OLEO DE SOJA', percentage: 5.2391 },
      { item: 'FOSFATO BICALCICO', percentage: 2.9841 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCÁRIO', percentage: 0.1029 },
    ],
    'farelo-trigo-amendoim': [
      { item: 'AMENDOIM FARELO', percentage: 55.33 },
      { item: 'MILHO GRÃO', percentage: 40.2488 },
      { item: 'FOSFATO BICALCICO', percentage: 2.9654 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCÁRIO', percentage: 0.4559 },
      { item: 'ALGODÃO FARELO 40%', percentage: 0 },
      { item: 'TRIGO FARELO', percentage: 0 },
      { item: 'SOJA FARELO', percentage: 0 },
      { item: 'ÓLEO DE SOJA', percentage: 0 },
    ],
    'farinha-casca-mandioca': [
      { item: 'SOJA FARELO', percentage: 47.6394 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'MILHO GRÃO', percentage: 15 },
      { item: 'ÓLEO DE SOJA', percentage: 8.848 },
      { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCÁRIO', percentage: 0.1838 },
    ],
    'farinha-folha-mandioca': [
      { item: 'SOJA FARELO', percentage: 57.9145 },
      { item: 'MILHO GRÃO', percentage: 21.9797 },
      { item: 'FARINHA FOLHA MANDIOCA', percentage: 10 },
      { item: 'ÓLEO DE SOJA', percentage: 6.0583 },
      { item: 'FOSFATO BICALCICO', percentage: 2.9436 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCÁRIO', percentage: 0.1039 },
    ],
    'farinha-manga': [
      { item: 'SOJA FARELO', percentage: 60.6932 },
      { item: 'MILHO GRÃO', percentage: 20.4303 },
      { item: 'FARINHA MANGA', percentage: 10 },
      { item: 'ÓLEO DE SOJA', percentage: 4.8742 },
      { item: 'FOSFATO BICALCICO', percentage: 2.8567 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCÁRIO', percentage: 0.1456 },
    ],
    'varredura-mandioca': [
      { item: 'SOJA FARELO', percentage: 45 },
      { item: 'MILHO GRÃO', percentage: 20 },
      { item: 'ALGODÃO FARELO 40%', percentage: 16 },
      { item: 'ÓLEO DE SOJA', percentage: 7.6292 },
      { item: 'VARREDURA MANDIOCA', percentage: 6.2716 },
      { item: 'FOSFATO BICALCICO', percentage: 2.7268 },
      { item: 'LEITE DESNATADO PÓ', percentage: 1.1177 },
      { item: 'PREMIX-APP', percentage: 1 },
      { item: 'CALCÁRIO', percentage: 0.2546 },
    ],
  };

  constructor() {}

  getNutritionalInfo(food: string): any {
    console.log(food);
    return this.nutritionalInfo[food] || [];
  }
}
