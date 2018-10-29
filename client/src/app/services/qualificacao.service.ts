import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Qualificacao } from '@app/model/Qualificacao';

const endpoint = 'http://localhost:8090/secured/qualificacao';

@Injectable({
  providedIn: 'root'
})
export class QualificacaoService {

  constructor(private http: HttpClient) {

  }

  public listAll(): Qualificacao[] {

    let qualificacoes: Qualificacao[] = [];

    this.http.get<Qualificacao[]>(endpoint).subscribe((result: Array<any>) => { result.map((item: any) => { qualificacoes.push(new Qualificacao().deserialize(item)); }) });

    return qualificacoes;
  }

}
