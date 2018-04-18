import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';

import { MatButtonModule, 
         MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule
      } from '@angular/material';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    // components, directives and pipes
    AppComponent,
    EmployeesComponent,
    EmpDetailsComponent,
    EmpCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,

    // primeng related modules
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
