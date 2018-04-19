import { HomeComponent } from "./pages/home/home.component";
import { EmployeesComponent } from "./employees/employees.component";
import { AboutComponent } from "./pages/about/about.component";
import { RouterModule, Route } from '@angular/router';
import { EmpDetailsComponent } from "./emp-details/emp-details.component";
import { EmpCreateComponent } from "./emp-create/emp-create.component";
import { ModuleWithProviders } from "@angular/core";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'employees/create',
        component: EmpCreateComponent
    },
    {
        path: 'employees/:id',
        component: EmpDetailsComponent
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