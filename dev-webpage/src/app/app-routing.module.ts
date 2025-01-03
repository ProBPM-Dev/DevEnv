import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';



export const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent },
  {path:'employeedetails',component:EmployeeDetailsComponent},
  {path: 'timesheet', component:TimesheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
