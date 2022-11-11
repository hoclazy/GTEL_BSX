import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhongDauGiaComponent } from './phong-dau-gia/phong-dau-gia.component';
import { QuenMatKhauComponent } from './quen-mat-khau/quen-mat-khau.component';
import { QuenMatKhauChonptxtComponent } from './quen-mat-khau-chonptxt/quen-mat-khau-chonptxt.component';
import { NhapMaOtpComponent } from './nhap-ma-otp/nhap-ma-otp.component';
import { OtpKhongHopLeComponent } from './otp-khong-hop-le/otp-khong-hop-le.component';

@NgModule({
  declarations: [
    AppComponent,
    PhongDauGiaComponent,
    QuenMatKhauComponent,
    QuenMatKhauChonptxtComponent,
    NhapMaOtpComponent,
    OtpKhongHopLeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
