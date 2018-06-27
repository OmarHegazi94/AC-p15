import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@research.com',
      dateOfBirth: new Date('10/25/1989'),
      department: 'IT',
      isActive: true,
      photoPath: '../../assets/images/employee1.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 29953499,
      dateOfBirth: new Date('11/2/1939'),
      department: 'HR',
      isActive: true,
      photoPath: '../../assets/images/employee2.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 8499290132,
      dateOfBirth: new Date('12/5/1954'),
      department: 'IT',
      isActive: false,
      photoPath: '../../assets/images/employee3.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
