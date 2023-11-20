import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPortfolioLuisComponent } from './bio-portfolio-luis.component';

describe('BioPortfolioLuisComponent', () => {
  let component: BioPortfolioLuisComponent;
  let fixture: ComponentFixture<BioPortfolioLuisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioPortfolioLuisComponent]
    });
    fixture = TestBed.createComponent(BioPortfolioLuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
