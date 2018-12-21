import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchcomponentComponent } from './fetchcomponent.component';

describe('FetchcomponentComponent', () => {
  let component: FetchcomponentComponent;
  let fixture: ComponentFixture<FetchcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
