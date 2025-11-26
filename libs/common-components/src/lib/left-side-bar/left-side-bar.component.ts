import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'gd-left-side-bar',
    templateUrl: './left-side-bar.component.html',
    styleUrls: ['./left-side-bar.component.less'],
    standalone: false
})
export class LeftSideBarComponent implements OnInit {
  @Input() showSpinner = false;

  constructor() {
  }

  ngOnInit() {
  }

}
