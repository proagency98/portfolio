import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxServicesComponent } from './box-services.component';

describe('BoxServicesComponent', () => {
  let component: BoxServicesComponent;
  let fixture: ComponentFixture<BoxServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxServicesComponent]
    });
    fixture = TestBed.createComponent(BoxServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
