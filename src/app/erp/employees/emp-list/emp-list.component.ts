import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/employee';
import { Router } from '@angular/router';
import { EmployeesService } from '../../../shared/services/employees.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees: Employee[];
  selectedEmployee: Employee;
  cols: any[];

  constructor(private router: Router,
              private empService: EmployeesService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(listOfEmp => {
      this.employees = listOfEmp;
    });

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'empNo', header: 'Emp No' },
      // { field: 'firstName', header: 'First Name' },
      // { field: 'lastName', header: 'Last Name' },
      { field: 'fullName', header: 'Full Name'},
      { field: 'city', header: 'City' }
    ];
  }

  cityName: string = 'Bangalore';

  changeCity(eventInfo) {
    console.log('Change City Function', eventInfo);
    this.cityName = 'Trivandrum';
  }

  showEmpDetails(eventInfo, empData: Employee) {
    console.log('Parent : ', empData);

    this.selectedEmployee = empData;
  }

  onEmployeeCreated(empData: Employee) {
    console.log('IN PARENT: ', empData);
    let length = this.employees.length;
    empData.id = length + 1;
    this.employees = this.employees.concat(empData);
  }

  onSelection(eventInfo) {
    console.log(eventInfo);
    const employee = eventInfo.data;

    const link = ['/employees', employee.id];
    this.router.navigate(link);
  }
}
