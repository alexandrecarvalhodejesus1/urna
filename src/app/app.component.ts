import { Component } from '@angular/core';
import { BotoesComponent } from './botoes/botoes.component';
import { NumeroTelaComponent } from "./numero-tela/numero-tela.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [BotoesComponent, NumeroTelaComponent]
})
export class AppComponent {
  numeroDigitado1: string = '';
  numeroDigitado2: string = '';
  numeroDigitado3: string = '';

  CapturarNumeroClicado(numeroClicado: number) {
    
    if (this.numeroDigitado1.length == 0) {
      this.numeroDigitado1 = numeroClicado.toString();
      return;
    }

    if (this.numeroDigitado2.length == 0) {

      this.numeroDigitado2 = numeroClicado.toString();
      return;
    }

    if (this.numeroDigitado3.length == 0) {
      this.numeroDigitado3 = numeroClicado.toString();
    }
  }

}


