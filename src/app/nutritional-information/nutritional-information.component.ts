import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { isMobile } from '../shared/utils';

interface NutritionalInformation {
  item: string;
  amount: number;
}

@Component({
  selector: 'app-nutritional-information',
  templateUrl: './nutritional-information.component.html',
  styleUrls: ['./nutritional-information.component.css'],
})
export class NutritionalInformationComponent {
  displayedColumns: string[] = ['Alimento', 'Quantidade'];
  foods: NutritionalInformation[] = [
    { item: 'SOJA FARELO', amount: 47.6394 },
    { item: 'ALGODÃO FARELO 40%', amount: 16 },
    { item: 'MILHO GRÃO', amount: 15 },
    { item: 'OLEO DE SOJA', amount: 8.848 },
    { item: 'FARINHA CASCA MANDIOCA', amount: 8.4703 },
    { item: 'FOSFATO BICALCICO', amount: 2.8585 },
    { item: 'PREMIX-APP', amount: 1 },
    { item: 'CALCARIO', amount: 0.1838 },
  ];

  menuOpen = true;
  dialogContent: string = '';

  isMobile = isMobile;

  constructor(public dialog: MatDialog) {}

  get total(): number {
    return 100;
  }
}
