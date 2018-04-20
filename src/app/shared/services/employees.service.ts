import { Injectable } from '@angular/core';
import { mockEmployees } from '../mock-data/mock-employees';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EmployeesService {

  empUrl: string = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    const emp$ = this.http.get<Employee[]>(this.empUrl)
                      .map(employees => employees.map(this.formatEmployee))
                      .catch(this.handleError);
    return emp$;
  }
  
  getEmployeeById(id: number) {
    const emp$ = this.http.get<Employee>(`${this.empUrl}/${id}`)
                      .map(this.formatEmployee)
                      .catch(this.handleError);

    return emp$;
  }

  createEmployee(employee: Employee) {
    const empCreate$ = this.http.post<Employee>(this.empUrl, employee);
    return empCreate$;
  }
  
  formatEmployee(e: Employee) {
    e.fullName = e.firstName + ' ' + e.lastName;
    return e;
  }

  handleError(err) {
    console.log(err);
    return Observable.throw(err.message);
  }

} 

