import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ROUTER
import { AppRoutingModule } from './app-routing.module';
// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
// CUSTOM DIRECTIVES
import { SelectRequiredValidatorDirective } from '../app/shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from '../app/shared/confirm-equal-validator.directive';
// import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// SERVICES
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';

import { EmployeeFilterPipe } from './employees/employee-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // ReactiveFormsModule,
    FormsModule,
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
