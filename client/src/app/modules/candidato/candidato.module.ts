import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCandidatoComponent } from './list-candidato/list-candidato.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  declarations: [ListCandidatoComponent]
})
export class CandidatoModule {}
