import { Component, Pipe, PipeTransform } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product';

  countDown: Subscription | undefined;
  counter = 120;
  pgValue = 100;
  soTienDauGia: number = 0;
  nguoiDauGia: string  = '';
  ngayDauGia: any = Date;
  gioDauGia: any  =  Date;


  listDBDG: any = [
    {
    soTienDauGia: '500.000.000',
    nguoiDauGia: 'xxxx',
    ngayDauGia: '18/11/2022',
    gioDauGia: '11:26:53'
    },
    {
      soTienDauGia: '500.000.000',
      nguoiDauGia: 'xxxx',
      ngayDauGia: '18/11/2022',
      gioDauGia: '11:26:53'
    },
    {
      soTienDauGia: '500.000.000',
      nguoiDauGia: 'xxxx',
      ngayDauGia: '18/11/2022',
      gioDauGia: '11:26:53'
    },
    {
      soTienDauGia: '500.000.000',
      nguoiDauGia: 'xxxx',
      ngayDauGia: '18/11/2022',
      gioDauGia: '11:26:53'
    }
  ]

  ngOnInit() {
    this.countDown = timer(0, 1000).subscribe(() => {
      --this.counter;
      // if (this.counter === 0) {
      //   this.countDown.unsubscribe();
      // }
    });
  }

  // setProgressBarValue(value: number, total: number) {
  //   this.pgValue = (100 * value) / total;
  // }
}

// @Pipe({
//   name: 'formatTime',
// })
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}

export class FormatTimePipeSetHour implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value/3600);
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + hours).slice(-2) +
      ':' +
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
