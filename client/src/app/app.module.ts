import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from '@app/app.component';
import { DashComponent } from '@app/components/dash/dash.component';

// ROUTING
import { AppRoutingModule } from '@app/modules/app-routing.module';

// LIBS
import { MaterialComponentsModule } from '@app/modules/material-components.module';
import { ListCandidateComponent } from '@candidate/list-candidate/list-candidate.component';
import { EditCandidateComponent } from '@candidate/edit-candidate/edit-candidate.component';

// MODULES

@NgModule({
  declarations: [AppComponent, ListCandidateComponent, DashComponent, EditCandidateComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
