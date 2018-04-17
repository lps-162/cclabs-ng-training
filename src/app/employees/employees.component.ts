import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/models/employee';
import { mockEmployees } from '../shared/mock-data/mock-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor() { }

  ngOnInit() {
    this.employees = mockEmployees;
  }


}
