import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaOpinionesComponent } from './banda-opiniones.component';

describe('BandaOpinionesComponent', () => {
  let component: BandaOpinionesComponent;
  let fixture: ComponentFixture<BandaOpinionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandaOpinionesComponent]
    });
    fixture = TestBed.createComponent(BandaOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
