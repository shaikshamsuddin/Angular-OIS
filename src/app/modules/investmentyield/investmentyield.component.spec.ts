import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentyieldComponent } from './investmentyield.component';

describe('InvestmentyieldComponent', () => {
  let component: InvestmentyieldComponent;
  let fixture: ComponentFixture<InvestmentyieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentyieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentyieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
