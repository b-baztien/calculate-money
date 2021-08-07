import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  balance: string;
  needPercnet: string = '50';
  wantPercnet: string = '30';
  investPercnet: string = '20';
  calculateText: string;

  calculatePercent = (a: number, b: number) => a * (b / 100);
  calculateBalance() {
    if (
      this.balance &&
      this.needPercnet &&
      this.wantPercnet &&
      this.investPercnet &&
      (isNaN(+this.balance) ||
        isNaN(+this.needPercnet) ||
        isNaN(+this.wantPercnet) ||
        isNaN(+this.investPercnet))
    ) {
      this.calculateText = '';
      return;
    }

    const need = this.calculatePercent(+this.balance, +this.needPercnet);
    const want = this.calculatePercent(+this.balance, +this.wantPercnet);
    const invest = this.calculatePercent(+this.balance, +this.investPercnet);

    this.calculateText = `
เงินเดือน ${this.balance} บาท
เงินใช้จ่าย ${need} บาท (${this.needPercnet}%)
เงินซื้อของที่อยากได้ ${want} บาท (${this.wantPercnet}%)
เงินออม / ลงทุน ${invest} บาท (${this.investPercnet}%)
    `;
  }
}
