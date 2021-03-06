import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { LogInComponent } from './log-in.component';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule
  ],
  providers: []
})
export class LogInModule { }
