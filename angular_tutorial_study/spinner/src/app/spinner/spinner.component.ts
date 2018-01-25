import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <button (click)="onPlus($event)">+</button>
      <span>{{ count }}</span>
    <button (click)="onMinus($event)">-</button>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() count: number;

  constructor() {
    console.log(arguments);
  }

  ngOnInit() {
    console.log(this.count);
  }

  onPlus(event: any) {
    this.count++;
  }

  onMinus(event: any) {
    this.count--;
  }
}
