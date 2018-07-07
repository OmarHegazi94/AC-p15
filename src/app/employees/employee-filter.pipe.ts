import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'employeeFilter',
  pure: true
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: Employee[], searchTrack: string): Employee[] {
    if (!employees || !searchTrack) {
      return employees;
    }

    return employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchTrack.toLowerCase()) !== -1);
  }
}
