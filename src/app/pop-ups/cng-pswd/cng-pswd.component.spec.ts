import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CngPswdComponent } from './cng-pswd.component';

describe('CngPswdComponent', () => {
  let component: CngPswdComponent;
  let fixture: ComponentFixture<CngPswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CngPswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CngPswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
