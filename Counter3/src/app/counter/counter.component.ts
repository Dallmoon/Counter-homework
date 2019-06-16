import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div class="container">
    <app-increase (EventIncrease)="increase()"></app-increase>
      <div class="counter">{{num}}</div>
    <app-decrease (EventDecrease)="decrease()"></app-decrease>
  </div>
  `,
  styles: [`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    margin: 20px auto;
    font-size: 24px;
    color: #3f51b5;
  }
  .counter {
    width: 50px;
    text-align: center;
  }
  `]
})
export class CounterComponent {
  num: number = 0;
  increase() {
    ++this.num;
  }
  decrease() {
    if (this.num <= 0) return;
    --this.num;
  }
}
