import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaPrincipalComponent } from './banda-principal.component';

describe('BandaPrincipalComponent', () => {
  let component: BandaPrincipalComponent;
  let fixture: ComponentFixture<BandaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandaPrincipalComponent]
    });
    fixture = TestBed.createComponent(BandaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
