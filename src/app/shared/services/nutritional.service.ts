import { Injectable } from '@angular/core';
import { Info } from 'src/app/nutritional-information/nutritional-information.component';

@Injectable({
  providedIn: 'root',
})
export class NutritionalService {
  private nutritionalInfo: Record<string, Info> = {
    'camarao-farelo': {
      nutritionalInfo: [
        { item: 'MILHO GRÃO', percentage: 35.9356 },
        { item: 'SOJA FARELO', percentage: 25.8021 },
        { item: 'CAMARÃO FARELO', percentage: 25 },
        { item: 'ÓLEO DE SOJA', percentage: 8.9812 },
        { item: 'FOSFATO BICALCICO', percentage: 2.8756 },
        { item: 'PREMIX-APP', percentage: 1 },
        { item: 'CALCÁRIO', percentage: 0.4054 },
      ],
      content: '',
    },
    'farelo-abacaxi': {
      nutritionalInfo: [
        { item: 'SOJA FARELO', percentage: 51.4637 },
        { item: 'MILHO GRÃO', percentage: 23.3571 },
        { item: 'FARELO ABACAXI', percentage: 15 },
        { item: 'ÓLEO DE SOJA', percentage: 6.1264 },
        { item: 'FOSFATO BICALCICO', percentage: 2.8019 },
        { item: 'PREMIX-APP', percentage: 1 },
        { item: 'CALCÁRIO', percentage: 0.2509 },
      ],
      content: `<h1>Resíduos da manga e do Abacaxi</h1>
                As frutas são produzidas principalmente para atender ao consumo humano. No entanto,
                muitos resíduos (subprodutos) são produzidos durante o processamento desse produto. Esses
                resíduos, em sua maioria, não são aproveitados pela indústria, que os descarta no meio ambiente
                causando sérios impactos a este. Ocorre que os subprodutos descartados pela indústria são ricos em
                proteínas, vitaminas e minerais e podem ser usados na alimentação animal compondo parcialmente
                a dieta dos animais de produção, como os peixes. Essas informações são importantes porque é
                através de uma boa dieta que os animais ganham peso vivo. Além desse fator, os subprodutos são
                uma boa alternativa ao produtor devido ao fato de baratearem o custo da ração, pois alimentos de
                alto valor como milho e soja podem ser substituídos parcialmente por resíduos da manga ou do
                abacaxi, por exemplo.`,
    },
    'farelo-coco': {
      nutritionalInfo: [
        { item: 'SOJA FARELO', percentage: 51.2749 },
        { item: 'COCO FARELO', percentage: 20 },
        { item: 'MILHO GRÃO', percentage: 19.399 },
        { item: 'OLEO DE SOJA', percentage: 5.2391 },
        { item: 'FOSFATO BICALCICO', percentage: 2.9841 },
        { item: 'PREMIX-APP', percentage: 1 },
        { item: 'CALCÁRIO', percentage: 0.1029 },
      ],
      content: '',
    },
    'farelo-trigo-amendoim': {
      nutritionalInfo: [
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
      content: '',
    },
    'farinha-casca-mandioca': {
      nutritionalInfo: [
        { item: 'SOJA FARELO', percentage: 47.6394 },
        { item: 'ALGODÃO FARELO 40%', percentage: 16 },
        { item: 'MILHO GRÃO', percentage: 15 },
        { item: 'ÓLEO DE SOJA', percentage: 8.848 },
        { item: 'FARINHA CASCA MANDIOCA', percentage: 8.4703 },
        { item: 'FOSFATO BICALCICO', percentage: 2.8585 },
        { item: 'PREMIX-APP', percentage: 1 },
        { item: 'CALCÁRIO', percentage: 0.1838 },
      ],
      content: '',
    },
    'farinha-folha-mandioca': {
      nutritionalInfo: [
        { item: 'SOJA FARELO', percentage: 57.9145 },
        { item: 'MILHO GRÃO', percentage: 21.9797 },
        { item: 'FARINHA FOLHA MANDIOCA', percentage: 10 },
        { item: 'ÓLEO DE SOJA', percentage: 6.0583 },
        { item: 'FOSFATO BICALCICO', percentage: 2.9436 },
        { item: 'PREMIX-APP', percentage: 1 },
        { item: 'CALCÁRIO', percentage: 0.1039 },
      ],
      content: '',
    },
    'farinha-manga': {
      nutritionalInfo: [
        { item: 'SOJA FARELO', percentage: 60.6932 },
        { item: 'MILHO GRÃO', percentage: 20.4303 },
        { item: 'FARINHA MANGA', percentage: 10 },
        { item: 'ÓLEO DE SOJA', percentage: 4.8742 },
        { item: 'FOSFATO BICALCICO', percentage: 2.8567 },
        { item: 'PREMIX-APP', percentage: 1 },
        { item: 'CALCÁRIO', percentage: 0.1456 },
      ],
      content: `<h1>Resíduos da manga e do Abacaxi</h1>
                As frutas são produzidas principalmente para atender ao consumo humano. No entanto,
                muitos resíduos (subprodutos) são produzidos durante o processamento desse produto. Esses
                resíduos, em sua maioria, não são aproveitados pela indústria, que os descarta no meio ambiente
                causando sérios impactos a este. Ocorre que os subprodutos descartados pela indústria são ricos em
                proteínas, vitaminas e minerais e podem ser usados na alimentação animal compondo parcialmente
                a dieta dos animais de produção, como os peixes. Essas informações são importantes porque é
                através de uma boa dieta que os animais ganham peso vivo. Além desse fator, os subprodutos são
                uma boa alternativa ao produtor devido ao fato de baratearem o custo da ração, pois alimentos de
                alto valor como milho e soja podem ser substituídos parcialmente por resíduos da manga ou do
                abacaxi, por exemplo.`,
    },
    'varredura-mandioca': {
      nutritionalInfo: [
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
      content: '',
    },
  };

  constructor() {}

  getNutritionalInfo(food: string): Info {
    return this.nutritionalInfo[food] || [];
  }
}
