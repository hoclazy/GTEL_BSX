import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongDauGiaComponent } from './phong-dau-gia.component';

describe('PhongDauGiaComponent', () => {
  let component: PhongDauGiaComponent;
  let fixture: ComponentFixture<PhongDauGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongDauGiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhongDauGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
