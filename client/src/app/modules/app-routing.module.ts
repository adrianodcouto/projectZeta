import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/components/login/login.component';
import { DashComponent } from '@app/components/dash/dash.component';
import { ListCandidatoComponent } from '@modules/candidato/list-candidato/list-candidato.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashComponent },
  { path: 'candidatos', component: ListCandidatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
