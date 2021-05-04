import { Component } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { Commands } from '../interface/commands';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  comandos: Commands;
  constructor(private helper: HelperService) {}
}
