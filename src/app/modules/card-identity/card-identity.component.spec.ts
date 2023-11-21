import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIdentityComponent } from './card-identity.component';

describe('CardIdentityComponent', () => {
  let component: CardIdentityComponent;
  let fixture: ComponentFixture<CardIdentityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardIdentityComponent]
    });
    fixture = TestBed.createComponent(CardIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
