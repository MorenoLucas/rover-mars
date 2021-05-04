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

  constructor(private helper: HelperService) {
    this.cuadrado.width = 10;
    this.cuadrado.height = 10;
  }
}
