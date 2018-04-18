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
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    // components, directives and pipes
    AppComponent,
    EmployeesComponent,
    EmpDetailsComponent,
    EmpCreateComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,

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
