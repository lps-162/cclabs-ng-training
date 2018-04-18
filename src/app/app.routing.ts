import { HomeComponent } from "./pages/home/home.component";
import { EmployeesComponent } from "./employees/employees.component";
import { AboutComponent } from "./pages/about/about.component";
import { RouterModule } from '@angular/router';

const appRoutes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);