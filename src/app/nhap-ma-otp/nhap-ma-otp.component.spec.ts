import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhapMaOtpComponent } from './nhap-ma-otp.component';

describe('NhapMaOtpComponent', () => {
  let component: NhapMaOtpComponent;
  let fixture: ComponentFixture<NhapMaOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhapMaOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhapMaOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
