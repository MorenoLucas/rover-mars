import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { Commands, Coordinates } from '../interface/commands';
import { Square } from '../interface/square';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //

  width: string;
  height: string;

  heightInitial;
  widthInitial;
  orientationInitial;
  orders;
  square: Square = {
    width: 0,
    height: 0,
  };
  @Output() orientation = new EventEmitter();

  constructor(private helper: HelperService) {}

  ngOnInit() {
    this.helper.rover$.subscribe((res) => {
      this.heightInitial = res.height;
      this.orientationInitial = res.orientation;
      this.widthInitial = res.width;
    });
  }

  startTrip() {
    const ordersArray = Array.from(this.orders.toUpperCase()) as (
      | 'L'
      | 'A'
      | 'R'
    )[];

    this.helper.trip(
      ordersArray,
      {
        successTrip: true,
        orientation: this.orientationInitial.toUpperCase(),
        coordinates: {
          xWidth: parseInt(this.widthInitial),
          yHeight: parseInt(this.heightInitial),
        },
        direction: ordersArray[0],
      },
      this.square
    );
  }

  getWidth() {
    if (this.width) {
      this.square.width = parseInt(this.width);
      const dimensionsRes = `${this.width}px`;
      console.log('square', this.square);
      return dimensionsRes;
    }
  }
  getHeight() {
    if (this.height) {
      this.square.height = parseInt(this.height);
      const dimensionsRes = `${this.height}px`;
      console.log('square', this.square);

      return dimensionsRes;
    }
  }
}
