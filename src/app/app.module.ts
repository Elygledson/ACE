import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NutritionalInformationComponent } from './nutritional-information/nutritional-information.component';
import { TutorialDialogComponent } from './tutorial-dialog/tutorial-dialog.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NutritionalInformationComponent, TutorialDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
