import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdNewComponent } from './dvd-new.component';

describe('DvdNewComponent', () => {
  let component: DvdNewComponent;
  let fixture: ComponentFixture<DvdNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
