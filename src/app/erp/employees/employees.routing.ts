
import { RouterModule, Route } from '@angular/router';

import { EmpListComponent } from "./emp-list/emp-list.component";
import { EmpDetailsComponent } from "./emp-details/emp-details.component";
import { EmpCreateComponent } from "./emp-create/emp-create.component";
import { ModuleWithProviders } from "@angular/core";
import { EmpSectionComponent } from "./emp-section/emp-section.component";

const empRoutes: Route[] = [
    {
        path: '',
        component: EmpSectionComponent,
        children: [
            {
                path: '',
                component: EmpListComponent
            },
            {
                path: 'create',
                component: EmpCreateComponent
            },
            {
                path: ':id',
                component: EmpDetailsComponent
            }
        ]
    }
];

export const empRouting: ModuleWithProviders = RouterModule.forChild(empRoutes);