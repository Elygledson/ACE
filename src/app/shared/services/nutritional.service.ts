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
      content: `<h2>A Farinha de Resíduo de Camarão na Alimentação Animal</h2>
              <p>A farinha de resíduo de camarão é um produto seco, obtido a partir do resíduo restante do beneficiamento do camarão, podendo conter pedaços ou até mesmo, camarões internos.Por ser proveniente de um resíduo sua composição é bastante variável devido a alguns fatores, tais como: diferença entre as espécies de camarão, e fonte e/ou método de processamento, por exemplo.</p>
              <p>Os trabalhos com a farinha de camarão para alimentação animal são escassos quando comparados com outros temas da literatura. De acordo com Freitas et al, (1976) os resíduos constituem cerca de 40% do peso total de camarão, eles são gerados no processamento do camarão para a produção do filé, sendo composto por cefalotórax, segmentos abdominais, cauda e pequenos camarões que não se enquadram no padrão do comércio. Valdares Filho et al. (2002) avaliou a composição química desse resíduo: 61,22% matéria orgânica, 30.36% de proteína bruta, 38,78% de matéria mineral, 57, 52% de digestibilidade da matéria seca e 71,82% de digestibilidade da matéria orgânica.
              De acordo com Backes et al. (2007) esse material cozido e seco em estufa apresenta 93,60% de matéria seca, 37,56% de proteína bruta,2,87%de extrato de etéreo, e 41,01% de matéria mineral. Khempaka et al. (2011), encontraram valores de 36,69% para proteína bruta, 10,28% de extrato etéreo, 19,49% de fibra bruta (a fibra bruta aparece sob forma de quitina), 4.92% de cálcio e fósforo total de 1,20%. Demonstrando que a farinha de resíduo possui rica composição química.
              Também tem se estudado o aproveitamento do resíduo de camarão como fonte protéica no balanceamento de dietas. Empregando a FRC em pesquisas com relação à nutrição animal, Pereira-da-Silva et al. (2000), avaliaram respostas da Tilápia do Nilo (Oreochromis niloticus) à atratividade e palatabilidade da farinha de camarão e afirmaram que este resíduo possui alta atrato-palatabilidade para os 
              peixes sendo indicada sua utilização neste tipo de produção animal, pois melhora o consumo de ração. Em uma criação animal mais exótica, Rodrigues et al. (2004), observaram que a farinha da cabeça de camarão com energia metabolizável verdadeira de 3247 kcal/kg pode perfeitamente utilizada na alimentação de rã-touro
              </p>`,
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
      content: `<h2>Resíduos da manga e do Abacaxi</h2>
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
      content: `<h2>Composição Nutricional da Farinha de Coco</h2><p>O farelo de coco é um subproduto, resultante do processamento industrial do coco, após a retirada da água e da polpa para alimentação humana. Neste ingrediente a quantidade de óleo pode variar de acordo com o método de extração. O farelo apresenta um teor de 20 a 25% de proteína bruta de razoável qualidade e 10 a 12% de fibra sendo que esta interfere na adequada utilização da proteína. Altas temperaturas durante a estocagem aceleram a rancificação e, em regiões de grande umidade, a armagenagem em condições inadequadas pode favorecer a contaminação microbiana.</p>
      <img src="../../../assets/tutorial/F.coco.jpg" alt="imagem do coco"/>
      <p>Desta forma, o farelo de coco vem sendo incorporado à alimentação animal, sobretudo por sua disponibilidade na região Nordeste. MIRANDA et al. (2005), afirmaram que o farelo de coco pode substituir totalmente o farelo de soja em dietas nutricionalmente balanceadas para tambaqui sem comprometer o seu desempenho e que níveis crescentes da inclusão desse ingrediente na ração proporcionou melhores índices de viabilidade econômica. Já LEMOS et al. (2011) indica a substituição de até 25% do farelo de soja por farelo de coco, para o tambaqui, permitindo assim a elaboração de dietas mais viáveis economicamente.
      O valor nutritivo do farelo de coco na alimentação de carpa capim foi estudado por SILVA & WEERAKOON (1981), que substituíram 33% do zooplâncton da ração dessas larvas por esse subproduto. Segundo esses autores, tal nível de inclusão modificou a taxa de ingestão e, embora tenha proporcionado conversão alimentar de 1,29 resultou em diminuião da taxa de crescimento dos alevinos.</p>
      <img src="../../../assets/tutorial/tambaqui.jpg" alt="imagem de peixe"/>
      <p>OLIVEIRA et al. (1997) avaliaram a digestibilidade do farelo de coco para pacu e encontraram valores de 72,63; 83,35; 38,77 e 87,42% respectivamente para as frações matéria seca, proteína bruta, extrato etéreo, fibra bruta e matéria mineral. Concluiram que o farelo de coco, em função do seu coeficiente de digestibilidade, apresenta-se como produto sucedâneo (pode ser substituto) para confecção de dietas para peixes tropicais.SANTOS et al. (2009) trabalhando com alevinos para tilápia do Nilo, avaliaram a inclusão de diferentes níveis de farelo de coco em rações e seus efeitos sobre o desempenho produtivo e viabilidade econômica e recomendaram a inclusão de 15% de farelo de coco em dietas completas. Já PEZZATO et al. (2000) avaliaram o potencial de utilização do farelo de coco em rações para tilápia do Nilo e constataram que o farelo de coco pode ser empregado em níveis de 30% da ração para a tilápia do Nilo sem afetar nos parâmetros produtivos.</p>
      `,
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
      content: `<h2> Composição Nutricional da Farinha de Trigo</h2>
                <p>O farelo de trigo é o principal e mais abundante subproduto da moenda de grãos, sendo principalmente utilizado em rações animais, consiste em um recurso alimentar renovável e pouco explorado. Contêm entre 15 e 17% de PB: 4,5% de gordura e 10% de FB.
                Ressalta-se que a proteína do farelo de trigo é deficiente nos aminoácidos: lisina, metionina e fenilanina, sendo muitas vezes necessário a suplementação por aminoácidos sintéticos nas rações.
                No entanto, ROSTAGNO et al. (2005) cita que a adição de farelo de trigo na dieta de animais monogástricos é limitada principalmente pela alta concentração de fibra. Os principais polissacarídeos não-amídicos(PNA) presentes nestes subproduto são as arabinoxilanas (36,5%), mas contém também celulose (11%), lignina (3 a 10%) e ácidos urônicos (3 a 6%).
                A digestibilidade dos nutrientes do farelo de trigo para tilápia do Nilo foi avaliado por PEZZATO et al.(2002), quando encontraram coeficientes de digestibilidade de: 59.29, 94.86
                e 91.29% para MS, PB e EB respectivamente. 
                Segundo KUBITZA (2011), embora o farelo de trigo favoreça a boa expansão dos peletes extrusados, o seu elevado teor de fibra bruta limita o seu uso em rações para peixes em níveis de até 25%.</p>`,
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
      content: `<h2>Composição Nutricional da Farinha da Casca de Mandioca</h2><p>A mandioca é uma planta nativa do Brasil, cultivada em praticamente em todo o seu território. Tem um alto potencial para alimentação animal, é uma fonte rica em energia e pode produzir diferentes resíduos, como a farinha da sua casca. É importante fazer uso dos subprodutos, não só da mandioca mas de todos os subprodutos em geral, porque se estes não forem recolhidos de forma adequada podem contaminar significativamente o meio ambiente.</p>
        <img src="../../../assets/tutorial/mandioca.jpg" alt="mandioca"/>
        <p>PEZZATO et al. (2004), estudaram a digestibilidade da raspa de mandioca e observaram resultados de aproximadamente 59,66 + ou - 2;38%; 93 + ou - 2,91%; 2.503 + ou - 21 kcal/kg, para matéria seca, proteína bruta e energia digestível, respectivamente.</p>`,
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
      content: `<h2>Composição Nutricional da Farinha da Folha de Mandioca</h2><p>A folha da mandioca apresenta um alto valor nutritivo, rica em proteínas, vitaminas e minerais. Além de possuir baixo custo de produção por serem consideradas resíduos de uma cultura de subsistência amplamente adaptada às nossas condições e, principalmente, por não competirem com o principal produto comercial da cultura, as raízes. 
      Entretanto, Sua utilização como alimento alternativo é limitado devido a grande variação do conteúdo nutricional das folhas das diferentes cultivares de mandioca. Isto ocorre porque existe um alto número de cultivares, adaptadas as mais diferentes regiões do país, as quais sofrem a influência de vários fatores como: variedades, áua, clima e solo, que podem acarretar enormes diferenças na composição química de cada uma dessas cultivares.</p>
      <img src="../../../assets/tutorial/folha de mandioca.jpg" alt="mandioca"/>
      <p>O conteúdo protéico da folha da mandioca varia entre 20 a 30%, apresentando boa qualidade, isto é um bom perfil de aminoácidos essenciais, como a lisina. Essas folhas também apresentam razoável taxas de minerais. Segundo NORMANHA (1966), as variações encontradas por 100g de folhas frescas são: cálcio- 100 a 210mg; ferro- 2 a 3,5mg; vitamina A- 9.000 a 13. U.I; tiamina (B1)- 0,15 a 0,30mg; riboflavina (B2)- 0,25 a 0,43mg; niacina- 0,45 a 3,53mg e vitamina C- 100 a 320mg.
      O valor nutritivo da folha de mandioca como fonte protéica em dietas para a tilápia do Nilo, foi estudado por NG & WEE (1989). Os coeficientes de digestibilidade aparentes para a proteínabruta foi de 18,2% quando do emprego de folhas úmidas e quando secas de 64%. Segundo ainda estes autores, houve uma variação nos coeficientes de digestibilidade da proteína de 35 a 67%.</p>`,
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
      content: `<h2>Resíduos da manga e do Abacaxi</h2>
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
      content: `<h2>Composição Nutricional da Farinha de Varredura de Mandioca</h2><p>A mandioca é uma planta nativa do Brasil, cultivada em praticamente em todo o seu território. Tem um alto potencial para alimentação animal, é uma fonte rica em energia e pode produzir diferentes resíduos, como a farinha da varredura. É importante fazer uso dos subprodutos, não só da mandioca mas de todos os subprodutos em geral, porque se estes não forem recolhidos de forma adequada podem contaminar significativamente o meio ambiente. A farinha de varredura é a farinha de mandioca destinada ao consumo humano que por algum motivo cai no chão da fábrica, sendo portanto um subproduto do processamento da mandioca pelas indústrias farinheiras e apresenta boa disponibilidade a baixo custo.</p>
      <img src="../../../assets/tutorial/varredura.jpg" alt="varredura"/>
      <p>LACERDA et al. (2005) avaliaram a farinha de varredura de mandioca na alimentação de carpa capim e concluiram que o farelo de varredura de mandioca pode substituir o milho em até 100% nas rações para alevinos. Testando este mesmo ingrediente para alevinos de tilápia do Nilo, BOSCOLO et al. (2002a) concluiram que a farinha de varredura de mandioca pode ser utilizada na alimentação de alevinos de tilápia do Nilo até o nível de 24% de inclusão, substituindo toda a energia do milho, sem causar prejuízos no desempenho dos animais.</p>`,
    },
  };

  constructor() {}

  getNutritionalInfo(food: string): Info {
    return this.nutritionalInfo[food] || [];
  }
}
