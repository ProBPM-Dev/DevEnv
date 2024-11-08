import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [  AppComponent, RegisterComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    CardModule,
    RadioButtonModule,
    CalendarModule  ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }