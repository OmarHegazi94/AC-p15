import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@research.com',
      dateOfBirth: new Date('10/25/1989'),
      department: '1',
      isActive: true,
      photoPath: '../../assets/images/employee1.png',
      password: '',
      confirmPassword: ''
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 29953499,
      dateOfBirth: new Date('11/2/1939'),
      department: '3',
      isActive: true,
      photoPath: '../../assets/images/employee2.png',
      password: '',
      confirmPassword: ''
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 8499290132,
      dateOfBirth: new Date('12/5/1954'),
      department: '1',
      isActive: false,
      photoPath: '../../assets/images/employee3.png',
      password: '',
      confirmPassword: ''
    }
  ];

  // get all the employees in the list employees array
  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }

  // create new employee
  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
