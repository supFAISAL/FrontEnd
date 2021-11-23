import { EmployeesService } from './../Services/Employees.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css'],
})
export class FormComponent implements OnInit {
  formData?: any
  newEmployee!: FormGroup;
  constructor(private fb: FormBuilder, private employees: EmployeesService) {}

  ngOnInit() {
    this.newEmployee = this.fb.group({
      firstName: [null],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [null, Validators.required],
      salary: ['', Validators.required],
      status: [null, Validators.required],
    });
  }
  onSubmit(form: FormGroup) {
    // for showing purposes
    console.log(form.value)
    this.formData = this.newEmployee.value
    this.formData["id"] = '001'
    this.formData["createdDate"] = new Date()
    this.formData.dob = new Date(this.newEmployee.value.dob)
    this.employees.Employees.push(this.formData)
    console.log(this.employees.Employees)
    this.newEmployee.reset();
  }

  ischanged(index: number, form: FormGroup) {
    
  }
}

