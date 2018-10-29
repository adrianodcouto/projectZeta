import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from '@app/components/dash/dash.component';
import { ListCandidateComponent } from '@candidate/list-candidate/list-candidate.component';
import { EditCandidateComponent } from '@candidate/edit-candidate/edit-candidate.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'candidatos', component: ListCandidateComponent },
  { path: 'candidato/:id', component: EditCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
