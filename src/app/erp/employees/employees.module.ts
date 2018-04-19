import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpSectionComponent } from './emp-section/emp-section.component';

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
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { empRouting } from './employees.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    empRouting,

    SharedModule
  ],
  declarations: [
    EmpListComponent,
    EmpDetailsComponent,
    EmpCreateComponent,
    EmpSectionComponent
  ]
})
export class EmployeesModule { }
