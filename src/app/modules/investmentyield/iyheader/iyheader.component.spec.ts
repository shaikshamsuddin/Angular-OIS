import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IyheaderComponent } from './iyheader.component';

describe('IyheaderComponent', () => {
  let component: IyheaderComponent;
  let fixture: ComponentFixture<IyheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IyheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
