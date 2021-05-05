import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rover',
  templateUrl: './rover.component.html',
  styleUrls: ['./rover.component.scss'],
})
export class RoverComponent implements OnInit {
  flecha;
  @Input() orientation: 'N' | 'S' | 'L' | 'W';
  constructor() {}

  ngOnInit() {}

  getOrientation(orientation) {
    switch (orientation) {
      case 'N':
        return (this.flecha = 'arrow-up-outline');
      case 'S':
        return (this.flecha = 'arrow-down-outline');
      case 'W':
        return (this.flecha = 'arrow-left-outline');
      case 'E':
        return (this.flecha = 'arrow-right-outline');
    }
  }
}
