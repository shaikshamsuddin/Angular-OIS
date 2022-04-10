import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IycontributionComponent } from './iycontribution.component';

describe('IycontributionComponent', () => {
  let component: IycontributionComponent;
  let fixture: ComponentFixture<IycontributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IycontributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IycontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
