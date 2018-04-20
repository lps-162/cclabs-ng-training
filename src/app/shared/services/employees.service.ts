import { Injectable } from '@angular/core';
import { mockEmployees } from '../mock-data/mock-employees';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeesService {

  empUrl: string = 'http://localhost:3000/api/employees/';

  constructor(private http: HttpClient) { }

  getEmployees() {
    const empPromise = this.http.get<Employee[]>(this.empUrl);

    return empPromise;
  }
  
  getEmployeeById(id: number) {
    const emp$ = this.http.get<Employee>(this.empUrl  + id)
    return emp$;
  }
  
}