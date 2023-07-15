import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalInformationComponent } from './nutritional-information.component';

describe('NutritionalInformationComponent', () => {
  let component: NutritionalInformationComponent;
  let fixture: ComponentFixture<NutritionalInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionalInformationComponent]
    });
    fixture = TestBed.createComponent(NutritionalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
