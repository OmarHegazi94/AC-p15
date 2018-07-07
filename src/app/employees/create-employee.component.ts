import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
// import { isNull } from '@angular/compiler/src/output/output_ast';
// import { FormControl, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  // access the ngForm by can deactivate guard service ..
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  previewPhoto = false;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    email: '',
    phoneNumber: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };

  departments: Department[] = [
    { id: 1 , name: 'IT' },
    { id: 2 , name: 'Help Desk' },
    { id: 3 , name: 'HR' },
    { id: 4 , name: 'PayRoll' },
    { id: 5 , name: 'Admin' },
  ];

  constructor(private _employeeService: EmployeeService, private _router: Router) {}

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

}
