import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpKhongHopLeComponent } from './otp-khong-hop-le.component';

describe('OtpKhongHopLeComponent', () => {
  let component: OtpKhongHopLeComponent;
  let fixture: ComponentFixture<OtpKhongHopLeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpKhongHopLeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpKhongHopLeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
