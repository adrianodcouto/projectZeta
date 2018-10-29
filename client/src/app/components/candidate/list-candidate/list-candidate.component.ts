import { Candidate } from '@model/Candidate';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {

  candidates: Candidate[] = [];

  itensPorPagina: number[] = [5, 10, 25, 100];

  constructor(private router: Router) {

  }

  ngOnInit() {
    let candidate: Candidate = new Candidate('Leonardo', 'Otero', 10);

    this.candidates.push(candidate);
  }

}
