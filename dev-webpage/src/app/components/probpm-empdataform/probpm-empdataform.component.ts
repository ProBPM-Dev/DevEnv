import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-probpm-empdataform',
  templateUrl: './probpm-empdataform.component.html',
  styleUrls: ['./probpm-empdataform.component.css']
})
export class ProbpmEmpdataformComponent implements OnInit {

  sampleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sampleForm = this.fb.group({
      fname: ['', Validators.required],
      mname: ['', Validators.required],
      lname: ['', [Validators.required]],
      gender: ['', Validators.required],
      dob: [null, Validators.required],
      mobile: ['', Validators.required],
      ssn: ['', Validators.required],
      });
  }

  ngOnInit(): void {
  }

}
