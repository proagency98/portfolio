import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateIdCardComponent } from './template-id-card.component';

describe('TemplateIdCardComponent', () => {
  let component: TemplateIdCardComponent;
  let fixture: ComponentFixture<TemplateIdCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateIdCardComponent]
    });
    fixture = TestBed.createComponent(TemplateIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
