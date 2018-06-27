import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Department } from '../models/department.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  fullName = '';
  Email = '';
  phoneNumber = '';
  contactPreference = '';
  gender = '';
  isActive = '';
  department = '';
  dateOfBirth: Date = new Date();
  photoPath = '';
  previewPhoto = false;

  departments: Department[] = [
    {id: 1 , name: 'IT'},
    {id: 2 , name: 'Help Desk'},
    {id: 3 , name: 'HR'},
    {id: 4 , name: 'PayRoll'},
    {id: 5 , name: 'Admin'},
  ];

  constructor() { }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }

}
