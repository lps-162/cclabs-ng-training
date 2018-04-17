import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
