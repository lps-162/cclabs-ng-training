import { HomeComponent } from "./pages/home/home.component";
import { EmpListComponent } from "./erp/employees/emp-list/emp-list.component";
import { AboutComponent } from "./pages/about/about.component";
import { RouterModule, Route } from '@angular/router';
import { EmpDetailsComponent } from "./erp/employees/emp-details/emp-details.component";
import { EmpCreateComponent } from "./erp/employees/emp-create/emp-create.component";
import { ModuleWithProviders } from "@angular/core";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { EmpSectionComponent } from "./erp/employees/emp-section/emp-section.component";

const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    // {
    //     path: 'employees',
    //     component: EmployeesComponent
    // },
    // {
    //     path: 'employees/create',
    //     component: EmpCreateComponent
    // },
    // {
    //     path: 'employees/:id',
    //     component: EmpDetailsComponent
    // },
    {
        path: 'employees',
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
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);