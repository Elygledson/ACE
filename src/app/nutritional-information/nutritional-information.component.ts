import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContentCreationComponent } from '../content-creation/content-creation.component';
import { isMobile } from '../shared/utils';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

export interface NutritionalInformation {
  id: number;
  nutrient: string;
  unit: string;
  amount: number;
  minAmount: number;
  maxAmount: number;
}

const NUTRIENTS: string[] = [
  'CALCIO',
  'ENERGIA. DIG.PEIXES',
  'FIBRA BRUTA',
  'FOSFORO DISPONÍVEL',
  'GORDURA',
  'PROTEINA BRUTA',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-nutritional-information',
  templateUrl: './nutritional-information.component.html',
  styleUrls: ['./nutritional-information.component.css'],
  animations: [
    trigger('fabAnimation', [
      state('open', style({ transform: 'rotate(45deg)' })),
      state('closed', style({ transform: 'rotate(0deg)' })),
      transition('closed <=> open', animate('200ms ease-in-out')),
    ]),
    trigger('menuAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class NutritionalInformationComponent {
  displayedColumns: string[] = [
    'id',
    'nutriente',
    'unidade',
    'qtde.',
    'qtde. mínima',
    'qtde. máxima',
    'editar',
  ];
  dataSource: MatTableDataSource<NutritionalInformation>;
  editMode: boolean = false;
  selectedRow: any;
  editedRow: any;
  menuOpen = true;
  dialogContent: string = '';
  isMobile = isMobile;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const data = Array.from({ length: 6 }, (_, k) =>
      createMockInformation(k + 1)
    );

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContentCreationComponent, {
      data: { content: this.dialogContent },
    });

    dialogRef.afterClosed().subscribe((dialogContent) => {
      this.dialogContent = dialogContent;
    });
  }

  toggleEditMode(row: NutritionalInformation) {
    this.selectedRow = row;
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { content: row },
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((dialogContent) => {
      let idx: any;
      if (dialogContent)
        idx = this.dataSource.filteredData.findIndex(
          (row) => row.id == dialogContent.id
        );
      this.dataSource.filteredData[idx] = { ...dialogContent };
      this.dataSource.data = this.dataSource.filteredData;
    });
  }

  saveChanges() {
    console.log('Changes saved:', this.editedRow);
    this.selectedRow = null;
    this.editMode = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createMockInformation(id: number): NutritionalInformation {
  const name = NUTRIENTS[Math.round(Math.random() * (NUTRIENTS.length - 1))];
  return {
    id: id,
    nutrient: name,
    unit: Math.round(Math.random() * 100).toString(),
    amount: Math.round(Math.random() * 100),
    minAmount: Math.round(Math.random() * 100),
    maxAmount: Math.round(Math.random() * (NUTRIENTS.length - 1)),
  };
}
