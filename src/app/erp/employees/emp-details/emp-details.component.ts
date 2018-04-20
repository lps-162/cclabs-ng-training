import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Employee } from '../../../shared/models/employee';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { mockEmployees } from '../../../shared/mock-data/mock-employees';
import { EmployeesService } from '../../../shared/services/employees.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit, OnDestroy {
  @Input() employee: Employee;
  errMessage: string;

  constructor(private routeInfo: ActivatedRoute,
              private router: Router,
              private empService: EmployeesService) { 
  }
  
  empSubscription: Subscription;

  ngOnInit() {
    const empId = +this.routeInfo.snapshot.params['id'];

    //console.log(empId);

    this.empSubscription = this.empService.getEmployeeById(empId)
                          .subscribe(e => this.employee = e,
                                     err => this.errMessage = err);
  }

  goBack() {
    history.back();
  }

  ngOnDestroy() {
    this.empSubscription.unsubscribe();
  }

}

