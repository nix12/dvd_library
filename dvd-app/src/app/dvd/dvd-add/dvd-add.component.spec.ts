import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdAddComponent } from './dvd-add.component';

describe('DvdAddComponent', () => {
  let component: DvdAddComponent;
  let fixture: ComponentFixture<DvdAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
