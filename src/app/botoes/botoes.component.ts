import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss']
})
export class BotoesComponent {
  numbers: number[][] = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
    [0]
  ];
}
