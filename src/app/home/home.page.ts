import { Component } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { Commands } from '../interface/commands';
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
    this.cuadrado.yHeight = 10;
    this.cuadrado.xWidth = 10;
    this.comandos.direction = 'A';
    this.comandos.orientation = 'N';
    this.comandos.coordinates.yHeight = 0;
    this.comandos.coordinates.xWidth = 0;
    this.movimientos.push('A');
    this.movimientos.push('R');
    this.movimientos.push('A');
    this.movimientos.push('A');

    this.helper.trip(this.movimientos, this.comandos, this.cuadrado);
  }
}
