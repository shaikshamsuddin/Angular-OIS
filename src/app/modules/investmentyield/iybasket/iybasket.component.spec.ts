import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IybasketComponent } from './iybasket.component';

describe('IybasketComponent', () => {
  let component: IybasketComponent;
  let fixture: ComponentFixture<IybasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IybasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IybasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
