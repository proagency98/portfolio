import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOpinionesComponent } from './cards-opiniones.component';

describe('CardsOpinionesComponent', () => {
  let component: CardsOpinionesComponent;
  let fixture: ComponentFixture<CardsOpinionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsOpinionesComponent]
    });
    fixture = TestBed.createComponent(CardsOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
