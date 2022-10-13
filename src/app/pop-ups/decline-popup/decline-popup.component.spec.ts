import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinePopupComponent } from './decline-popup.component';

describe('DeclinePopupComponent', () => {
  let component: DeclinePopupComponent;
  let fixture: ComponentFixture<DeclinePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclinePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
