import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NutritionalInformationComponent } from './nutritional-information/nutritional-information.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'farelo-camarao', component: NutritionalInformationComponent },

      { path: 'farelo-abacaxi', component: NutritionalInformationComponent },

      { path: 'farelo-coco', component: NutritionalInformationComponent },

      {
        path: 'farelo-trigo-amendoim',
        component: NutritionalInformationComponent,
      },
      {
        path: 'farelo-casca-mandioca',
        component: NutritionalInformationComponent,
      },
      {
        path: 'farelo-folha-mandioca',
        component: NutritionalInformationComponent,
      },
      {
        path: 'farinha-manga',
        component: NutritionalInformationComponent,
      },
      {
        path: 'varredura-mandioca',
        component: NutritionalInformationComponent,
      },
      {
        path: '',
        redirectTo: 'farelo-camarao',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
