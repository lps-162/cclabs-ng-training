import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
    
  }

}

