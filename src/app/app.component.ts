import { Component } from '@angular/core';
import { BotoesComponent } from './botoes/botoes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [BotoesComponent]
})
export class AppComponent {}
