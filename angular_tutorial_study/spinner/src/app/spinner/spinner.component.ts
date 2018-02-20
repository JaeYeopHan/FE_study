import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  @Output() outCountChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onPlus(event: any) {
    this.count++;
    this.outCountChanged.emit(this.count);
  }

  onMinus(event: any) {
    this.count--;
  }
}
