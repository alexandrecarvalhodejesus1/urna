import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss']
})
export class BotoesComponent {
  numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

  @Output() numeroClicado = new EventEmitter<number>();

  //Método é composto por um nome seguido de parenteses que pode conter ou não PARAMETROS, e em seguida contém as chaves {} que tem a implementação de código
  ObterNumeroClicado(numero: number)
  {
    //implementação
    this.numeroClicado.emit(numero);
  }

}
