import { Component } from '@angular/core';
import { BotoesComponent } from './botoes/botoes.component';
import { NumeroTelaComponent } from "./numero-tela/numero-tela.component";
import { Professor } from './professor.model';
import { Ajudante } from './ajudante.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [BotoesComponent, NumeroTelaComponent, NgIf,]
})
export class AppComponent {

  numero1: string = '';
  numero2: string = '';
  numero3: string = '';
  professoresSelecionados: Professor[] = [];
  ajudantesSelecionados: Ajudante[] = [];
  nomeCandidato: string = '';
  tipoVoto: 'PROFESSOR' | 'AJUDANTE' = 'PROFESSOR'
  votacao: boolean = true;



  constructor() {
      const Professor1 = new Professor('alexandre', '100');
      const Professor2 = new Professor('alexsander', '200');
      const Professor3 = new Professor('alexandra', '300');

      const Ajudante1 = new Ajudante('adelia', '400');
      const Ajudante2 = new Ajudante('adilson', '500');
      const Ajudante3 = new Ajudante('adelio', '600');

      this.professoresSelecionados.push(Professor1);
      this.professoresSelecionados.push(Professor2);
      this.professoresSelecionados.push(Professor3);
      
      this.ajudantesSelecionados.push(Ajudante1);
      this.ajudantesSelecionados.push(Ajudante2);
      this.ajudantesSelecionados.push(Ajudante3);
  }

  pintarnumerotela(numeroClicado: number) {

    if (this.numero1 == '') {
      this.numero1 = numeroClicado.toString();
      return;
    }

    if (this.numero2 == '') {
      this.numero2 = numeroClicado.toString();
      return;
    }

    if (this.numero3 == '') {
      this.numero3 = numeroClicado.toString();

      if (this.tipoVoto == 'PROFESSOR') {
        this.localizarProfessores(this.numero1 + this.numero2 + this.numero3);
        
      }
      if (this.tipoVoto == 'AJUDANTE') {
        this.localizarAjudantes(this.numero1 + this.numero2 + this.numero3);

      }
    }
  }



  Confirma() {
    const numeroCompleto = this.numero1 + this.numero2 + this.numero3;
    if (this.tipoVoto === 'PROFESSOR') 
      
    {
      this.localizarProfessores(numeroCompleto);
      if (this.nomeCandidato)
      {
      this.limparVariaveisNumero();
      this.tipoVoto = 'AJUDANTE';
    }
    return;
    }

    if (this.tipoVoto === 'AJUDANTE') 
      {
        this.localizarAjudantes(numeroCompleto);
      
    if (this.nomeCandidato)
    {
      this.limparVariaveisNumero();
      this.votacao = false;
    }
  }
  }

  VotarBranco() {
    if (this.tipoVoto === 'PROFESSOR') {
      this.tipoVoto = 'AJUDANTE';
      return;
    }
  
    if (this.tipoVoto === 'AJUDANTE') {
      this.votacao = false; 
    }
  }

  localizarProfessores(numero: string) {
    const professorLocalizado = this.professoresSelecionados.find(linha => linha.numero === numero);

    if (professorLocalizado) {
      this.nomeCandidato = professorLocalizado.nomeprofessor;
    }
  }
  localizarAjudantes(numero: string) {
    const ajudanteLocalizado = this.ajudantesSelecionados.find(linha => linha.numero === numero);

    if (ajudanteLocalizado) {
      this.nomeCandidato = ajudanteLocalizado.nomeajudante;

    }
  }

  limparVariaveisNumero() {
    this.numero1 = '';
    this.numero2 = '';
    this.numero3 = '';
    this.nomeCandidato = '';
  }

  
}
