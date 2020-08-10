import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponentsComponent } from './options-components.component';

describe('OptionsComponentsComponent', () => {
  let component: OptionsComponentsComponent;
  let fixture: ComponentFixture<OptionsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
