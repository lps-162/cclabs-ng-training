import { Component, OnInit } from '@angular/core';
import { Employee } from "../../../shared/models/employee";
import { EmployeesService } from "../../../shared/services/employees.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {
  employee: Employee;
  errorMessage: string;
  
  createForm: FormGroup;
  isFormValid: boolean;

  formErrors = {
      empNo: '',
      firstName: '',
      lastName: '',
      city: ''
    };

    validationMessages = {
        empNo: {
        'required': 'Emp No is required',
        'minlength': 'Emp No should be of 3 characters',
        'maxlength': 'Emp No should not exceed 6 characters'
      },
      firstName: {
        'required': 'First name is required',
        'minlength': 'First name should be of 5 characters',
        'maxlength': 'First name should not exceed 20 characters'
      },
      lastName: {
        'required': 'Last name is required',
        'minlength': 'Last name should be of 2 characters',
        'maxlength': 'Last name should not exceed 5 characters'
      },
      city: {
        'required': 'City name is required'
      }
    };

 
  constructor(private router: Router,
              private empService: EmployeesService,
              private fb: FormBuilder) { 
    
  }

  ngOnInit() {
   this.isFormValid = false;
   this.buildForm();
  }

  buildForm() {
    this.createForm = this.fb.group({
      empNo: [ '', 
                [ Validators.required, 
                  Validators.minLength(3), 
                  Validators.maxLength(6)
                ]
              ],
      firstName: ['',  
                 [
                  Validators.required, 
                  Validators.minLength(5),
                  Validators.maxLength(20)]
                ],
      lastName: ['',
                    [
                    Validators.required, 
                    Validators.minLength(2),
                    Validators.maxLength(5)
                    ]
                ],
      city: ['', Validators.required]
    });


    this.createForm.valueChanges.subscribe(data => {
      //console.log(data);
      // looping thru fields and setting up errors
      for (let fieldName in this.formErrors) {
        this.formErrors[fieldName] = '';
        let input = this.createForm.get(fieldName);

        if (input.invalid && input.dirty) {
          for (let err in input.errors) {
            this.formErrors[fieldName] = this.validationMessages[fieldName][err];
            console.log('Generic error handling');
          }
        }
      }

      //this.employee = data; 
      this.isFormValid = this.createForm.valid;
    });
  }

  createEmployee() {
      console.log(this.createForm);

    this.empService.createEmployee(this.createForm.value)
          .subscribe((employee) => {
            this.router.navigate(['/employees', employee.id]);
          },
          errorMessage => {
              this.errorMessage = errorMessage;
          });
  }

}