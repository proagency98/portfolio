import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPortfolioLuisComponent } from './nav-portfolio-luis.component';

describe('NavPortfolioLuisComponent', () => {
  let component: NavPortfolioLuisComponent;
  let fixture: ComponentFixture<NavPortfolioLuisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPortfolioLuisComponent]
    });
    fixture = TestBed.createComponent(NavPortfolioLuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
