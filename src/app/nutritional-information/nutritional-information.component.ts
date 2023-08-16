import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { isMobile } from '../shared/utils';
import { ActivatedRoute } from '@angular/router';
import { NutritionalService } from '../shared/services/nutritional.service';

export interface FoodNutritionalInfo {
  item: string;
  percentage: number;
}
@Component({
  selector: 'app-nutritional-information',
  templateUrl: './nutritional-information.component.html',
  styleUrls: ['./nutritional-information.component.css'],
})
export class NutritionalInformationComponent implements OnInit {
  displayedColumns: string[] = ['Alimento', 'Quantidade'];
  foods: FoodNutritionalInfo[] = [];

  menuOpen = true;
  dialogContent: string = '';

  isMobile = isMobile;

  constructor(
    private nutritionalService: NutritionalService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.foods = this.nutritionalService.getNutritionalInfo(params['link']);
    });
  }

  get total(): number {
    return 100;
  }
}
