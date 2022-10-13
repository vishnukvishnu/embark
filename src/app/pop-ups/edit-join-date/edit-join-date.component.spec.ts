import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJoinDateComponent } from './edit-join-date.component';

describe('EditJoinDateComponent', () => {
  let component: EditJoinDateComponent;
  let fixture: ComponentFixture<EditJoinDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJoinDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJoinDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
