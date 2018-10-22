import { Candidate } from '@model/Candidate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {

  candidates: Candidate[] = [];

  itensPorPagina: number[] = [5, 10, 25, 100];

  constructor() { }

  ngOnInit() {
    this.candidates.push(new Candidate('Leonardo Otero'));
    this.candidates.push(new Candidate('Bozo da Silva'));
    this.candidates.push(new Candidate('Pedro Pedreira'));
    this.candidates.push(new Candidate('Waldisnei Santos'));
    this.candidates.push(new Candidate('Heman de Jesus'));
    this.candidates.push(new Candidate('Takama Sanomoru'));
    this.candidates.push(new Candidate('Catiani Pingu'));
  }

}
