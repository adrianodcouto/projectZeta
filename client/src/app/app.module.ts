import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from '@app/app.component';
import { LoginComponent } from '@components/login/login.component';
import { DashComponent } from '@app/components/dash/dash.component';

// ROUTING
import { AppRoutingModule } from '@modules/app-routing.module';

// LIBS
import { MaterialComponentsModule } from '@modules/material-components.module';

// MODULES
import { CandidatoModule } from '@modules/candidato/candidato.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    CandidatoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
