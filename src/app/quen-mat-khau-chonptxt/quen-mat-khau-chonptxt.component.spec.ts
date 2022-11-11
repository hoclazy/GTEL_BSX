import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuenMatKhauChonptxtComponent } from './quen-mat-khau-chonptxt.component';

describe('QuenMatKhauChonptxtComponent', () => {
  let component: QuenMatKhauChonptxtComponent;
  let fixture: ComponentFixture<QuenMatKhauChonptxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuenMatKhauChonptxtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuenMatKhauChonptxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
