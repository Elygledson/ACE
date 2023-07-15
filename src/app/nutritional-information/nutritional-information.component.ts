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

export interface UserData {
  nutrient: string;
  unit: string;
  amount: string;
  minAmount: string;
  maxAmount: string;
}
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
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
    'nutriente',
    'unidade',
    'quantidade',
    'quantidade mínima',
    'quantidade máxima',
    'editar',
  ];
  dataSource: MatTableDataSource<UserData>;
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
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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

  toggleEditMode(row: any) {
    this.editMode = !this.editMode;
    this.selectedRow = row;
    this.editedRow = { ...row }; // Cria uma cópia da linha selecionada para realizar as edições
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
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    nutrient: name,
    unit: name,
    amount: name,
    minAmount: Math.round(Math.random() * 100).toString(),
    maxAmount: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
