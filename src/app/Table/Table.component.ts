import { EmployeesService } from './../Services/Employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Table',
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.css'],
})
export class TableComponent implements OnInit {
  Employees?:any
  constructor(private employees:EmployeesService) {}

  ngOnInit() {
    this.Employees = this.employees.Employees
  }
}
