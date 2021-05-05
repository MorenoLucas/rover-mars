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
  valueWidth: string;
  valueHeight: string;

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

  getWidth() {
    console.log(this.valueWidth);
    if (parseInt(this.valueWidth) >= 0 && parseInt(this.valueWidth) <= 999) {
      this.cuadrado.width = parseInt(this.valueWidth);
      return this.valueWidth + '.px';
    } else {
      console.log('tamaño mayor al deseado');
    }
  }
  getHeight() {
    if (parseInt(this.valueHeight) >= 0 && parseInt(this.valueHeight) <= 999) {
      this.cuadrado.height = parseInt(this.valueHeight);
      return this.valueHeight + '.px';
    } else {
      console.log('tamaño mayor al deseado');
    }
  }
}
