import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IyindexrateComponent } from './iyindexrate.component';

describe('IyindexrateComponent', () => {
  let component: IyindexrateComponent;
  let fixture: ComponentFixture<IyindexrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IyindexrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IyindexrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
