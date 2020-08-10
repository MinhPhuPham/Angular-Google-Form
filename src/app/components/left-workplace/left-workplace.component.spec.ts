import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftWorkplaceComponent } from './left-workplace.component';

describe('LeftWorkplaceComponent', () => {
  let component: LeftWorkplaceComponent;
  let fixture: ComponentFixture<LeftWorkplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftWorkplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftWorkplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
