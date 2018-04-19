import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../shared/models/employee';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { mockEmployees } from '../shared/mock-data/mock-employees';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  @Input() employee: Employee;

  constructor(private routeInfo: ActivatedRoute,
              private router: Router) { 
  }

  ngOnInit() {
    const empId = +this.routeInfo.snapshot.params['id'];

    console.log(empId);

    this.employee = mockEmployees.find(e => e.id === empId);
    console.log(this.employee);
  }

  goBack() {
    history.back();
  }

}

