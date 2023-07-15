import { Component, HostListener } from '@angular/core';
import { isMobile } from '../shared/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  fishFeed = ['Tilápia'];
  isMobile = isMobile;
}
