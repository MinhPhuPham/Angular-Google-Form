import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightWorkplaceComponent } from './right-workplace.component';

describe('RightWorkplaceComponent', () => {
  let component: RightWorkplaceComponent;
  let fixture: ComponentFixture<RightWorkplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightWorkplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
