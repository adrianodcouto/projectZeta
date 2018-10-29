import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatSelectModule,
  MatMenuModule,
  MatOptionModule,
  MatDividerModule,
  MatChipsModule,
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    LayoutModule,
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    LayoutModule,
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class MaterialComponentsModule { }
