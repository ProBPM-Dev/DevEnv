import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProbpmEmpdataformComponent } from './components/probpm-empdataform/probpm-empdataform.component';
import { SampleComponent } from './sample/sample.component';

export const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path: 'register', component:RegisterComponent },
  {path:'employeedataform', component:ProbpmEmpdataformComponent},
  {path:'sampleform',component:SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
