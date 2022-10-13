import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferLetComponent } from './offer-let.component';

describe('OfferLetComponent', () => {
  let component: OfferLetComponent;
  let fixture: ComponentFixture<OfferLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
