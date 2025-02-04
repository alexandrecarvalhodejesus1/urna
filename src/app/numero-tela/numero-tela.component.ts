import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numero-tela',
  standalone: true,
  imports: [],
  templateUrl: './numero-tela.component.html',
  styleUrl: './numero-tela.component.scss'
})
export class NumeroTelaComponent {
@Input() numero: string = '';

}
