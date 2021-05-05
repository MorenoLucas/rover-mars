import { Component } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { Commands, Coordinates } from '../interface/commands';
import { Square } from '../interface/square';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  comandos: Commands;
  cuadrado: Square;
  movimientos = [];

  constructor(private helper: HelperService) {
    this.cuadrado = {
      width: 10,
      height: 10,
    };
    this.comandos = {
      direction: 'A',
      orientation: 'N',
      coordinates: {
        yHeight: 0,
        xWidth: 0,
      },
    };

    this.movimientos.push('A');
    this.movimientos.push('A');
    this.movimientos.push('R');
    this.movimientos.push('A');

    this.helper.trip(this.movimientos, this.comandos, this.cuadrado);
  }
}
