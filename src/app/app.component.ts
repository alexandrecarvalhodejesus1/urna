import { Component } from '@angular/core';
import { BotoesComponent } from './botoes/botoes.component';
import { NumeroTelaComponent } from "./numero-tela/numero-tela.component";
import { Professor } from './professor';
import { Ajudante } from './ajudante';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [BotoesComponent, NumeroTelaComponent]
})
export class AppComponent {

  professoresSelecionados: Professor[] = [];
  ajudantesSelecionados: Ajudante[] = [];
  numero1: string = '';
  numero2: string = '';
  numero3: string = '';
  nomeCandidato: string = '';
  tipoVoto: 'PROFESSOR' | 'AJUDANTE' = 'PROFESSOR'
  votaçao: boolean = true;



  constructor() {
    this.professoresSelecionados.push(
      new Professor('alexandre', '100'),
      new Professor('alexsander', '200'),
      new Professor('alexandra', '300')
    );

    this.ajudantesSelecionados.push(
      new Ajudante('adelia', '111'),
      new Ajudante('adilson', '222'),
      new Ajudante('adelio', '333')
    );
  }

  capturarNumeroClicado(numeroClicado: number) {

    if (this.numero1.length == 0) {
      this.numero1 = numeroClicado.toString();
      return;
    }

    if (this.numero2.length == 0) {
      this.numero2 = numeroClicado.toString();
      return;
    }

    if (this.numero3.length == 0) {
      this.numero3 = numeroClicado.toString();
      this.LocalizarDadosCandidato();
    }

  }

  LocalizarDadosCandidato() {
    if (this.tipoVoto == 'PROFESSOR')
      this.localizarProfessores()
    else
      this.localizarAjudantes();

  }

  Confirma() {
    if ((this.tipoVoto == 'PROFESSOR') && (this.nomeCandidato != '')) {
      this.limparVariaveisNumero();
      return;
    }

    if ((this.tipoVoto == 'AJUDANTE') && (this.nomeCandidato != '')) {
      this.limparVariaveisNumero();
      return;
    }
  }



  localizarProfessores() {
    const numeroCombinado = this.numero1 + this.numero2 + this.numero3;
    const professorLocalizado = this.professoresSelecionados.find(professor => professor.numero == numeroCombinado);

    if (professorLocalizado) {
      this.nomeCandidato = professorLocalizado.nome;
      this.tipoVoto = 'AJUDANTE';
    }
  }

  localizarAjudantes() {
    const numeroCombinado = this.numero1 + this.numero2 + this.numero3;
    const ajudanteLocalizado = this.ajudantesSelecionados.find(ajudate => ajudate.numero == numeroCombinado);

    if (ajudanteLocalizado) {
      this.nomeCandidato = ajudanteLocalizado.nome;
      

    }
  }

  limparVariaveisNumero() {
    this.numero1 = '';
    this.numero2 = '';
    this.numero3 = '';
    this.nomeCandidato = '';
  }

  // obterNomesProfessoresSelecionados(): string {
  //   const numeroCombinado = this.numero1 + this.numero2 + this.numero3;
  //   return this.mapaProfessores[numeroCombinado] || '';

  // }

  // obterNomesAjudantesSelecionados(): string {
  //   const numeroCombinado = this.numero1 + this.numero2 + this.numero3;
  //   return this.mapaAjudantes[numeroCombinado] || ''; 
  // }
}
