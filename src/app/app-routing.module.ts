import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhongDauGiaComponent } from './phong-dau-gia/phong-dau-gia.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';

const routes: Routes = [
  {
    path: 'app-quen-mat-khau',
    component: QuenMatKhauComponent
  },
  {
    path: 'phong-dau-gia',
    component: PhongDauGiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
