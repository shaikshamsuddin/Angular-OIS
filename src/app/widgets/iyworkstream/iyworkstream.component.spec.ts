import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IyworkstreamComponent } from './iyworkstream.component';

describe('IyworkstreamComponent', () => {
  let component: IyworkstreamComponent;
  let fixture: ComponentFixture<IyworkstreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IyworkstreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IyworkstreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
