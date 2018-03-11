import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() count: number;

  constructor() {
    console.log(this.count);
  }

  ngOnInit() {
  }

  onClickPlusBtn(e) {
    this.count++;
  }

  onClickMinusBtn(e) {
    this.count--;
  }
}
