import { Component, ViewChild } from '@angular/core';
import { isMobile } from '../shared/utils';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('snav') sidenav!: MatSidenav;
  title = 'Farelo de Camarão';
  isMobile = isMobile;
  links = [
    {
      name: 'Farelo de Camarão',
      link: 'camarao-farelo',
      isActive: false,
    },
    {
      name: 'Farelo de Abacaxi',
      link: 'farelo-abacaxi',
      isActive: false,
    },
    {
      name: 'Farelo de Coco',
      link: 'farelo-coco',
      isActive: false,
    },
    {
      name: 'Farelo de Trigo e Amendoim',
      link: 'farelo-trigo-amendoim',
      isActive: false,
    },
    {
      name: 'Farinha de Casca de Mandioca',
      link: 'farinha-casca-mandioca',
      isActive: false,
    },
    {
      name: 'Farinha de Folha de Mandioca',
      link: 'farinha-folha-mandioca',
      isActive: false,
    },
    {
      name: 'Farinha de Manga',
      link: 'farinha-manga',
      isActive: false,
    },
    {
      name: 'Farelo de Varredura de Mandioca',
      link: 'varredura-mandioca',
      isActive: false,
    },
  ];

  closeSidebar(name: string): void {
    if (this.sidenav) {
      this.title = name;
      this.sidenav.close();
    }
  }
}
