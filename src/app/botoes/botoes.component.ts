import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, NgStyle, NgClass],
  templateUrl: './botoes.component.html',
  styleUrl: './botoes.component.scss'
})
export class BotoesComponent {

  @Input() numeros7a9 = false;
  @Input() numeros4a6 = false;
  @Input() numeros1a3 = false;
  @Input() numero0 = false;

  
}
