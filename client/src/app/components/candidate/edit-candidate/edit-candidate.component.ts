import { Candidate } from '@model/Candidate';
import { Qualificacao } from '@model/Qualificacao';
import { QualificacaoService } from '@services/qualificacao.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {

  candidate: Candidate = new Candidate('Leonardo', 'Otero', 10);
  qualificacoes: Qualificacao[] = [];
  filteredQualificacoes: Qualificacao[] = [];

  @ViewChild('qualificacoesInput') qualificacoesInput: ElementRef<HTMLInputElement>;

  constructor(private qualificacaoService: QualificacaoService) {
  }

  ngOnInit() {
    this.qualificacoes = this.qualificacaoService.listAll();
    console.info(this.qualificacoes);
    console.info(this.qualificacoes.filter(qualificacao => true));
  }

  public remove(qualificacao: string): void {
    this.candidate.removeQualificacao(qualificacao);
  }

  public selected(event: MatAutocompleteSelectedEvent): void {

    this.candidate.qualificacoes.push(this.searchByName(event.option.viewValue));
    this.qualificacoesInput.nativeElement.value = '';
  }

  private searchByName(value: string): Qualificacao {
    return this.qualificacoes.find(x => x.fullName() == value);
  }

}
