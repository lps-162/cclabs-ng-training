import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MatButtonModule, 
         MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule
      } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { TableModule } from 'primeng/table';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { appRouting } from './app.routing';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmployeesModule } from './erp/employees/employees.module';

@NgModule({
  declarations: [
    // components, directives and pipes
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
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
    TableModule,

    FlexLayoutModule,
    
    EmployeesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
