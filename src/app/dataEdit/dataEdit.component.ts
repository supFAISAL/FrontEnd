import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../Services/Employees.service';

@Component({
  selector: 'app-dataEdit',
  templateUrl: './dataEdit.component.html',
  styleUrls: ['./dataEdit.component.css']
})
export class DataEditComponent implements OnInit {
  @Input() employeeData : any
  employee?:any
  flfl = 'aha'
  editedEmployee!: FormGroup;
  constructor(private fb: FormBuilder, private employees: EmployeesService) { }

  ngOnInit() {
    this.employee = this.employeeData
    console.log(this.employee)
    this.editedEmployee = this.fb.group({
      firstName: [null],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [null, Validators.required],
      salary: ['', Validators.required],
      status: [null, Validators.required],
    });
  }

  onSubmit(form: FormGroup) {
  
    this.employees.editEmployee(this.editedEmployee);
  }

}
