import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  selectedIdentityType: string = '';
  selectedFile: File | null = null;
  registerForm: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  qualifications = [
    { label: "Bachelor's", value: 'bachelor' },
    { label: "Master's", value: 'master' },
    { label: 'PhD', value: 'phd' },
  ];
  identityTypes = [
    { label: 'Driving License', value: 'Driving License' },
    { label: 'State ID', value: 'State ID' },
    { label: 'Temporary Address', value: 'Temporary Address' }
  ];
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fname: ['', Validators.required],
      mname: ['', Validators.required],
      lname: ['', [Validators.required]],
      gender: ['', Validators.required],
      dob: [null, Validators.required],
      mobile: ['', Validators.required],
      ssn: ['', Validators.required],
      qualification: [null, Validators.required],
      identityType: ['', Validators.required],
      identityNumber: ['', [Validators.required]],
      expiryDate: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      identityDocument: [null, Validators.required],
      passportNumber: ['', [Validators.required]],
      passportexpiryDate: ['', Validators.required],
      passportaddress: ['', Validators.required],
      passportcity: ['', Validators.required],
      passportstate: ['', Validators.required],
      passportcountry: ['', Validators.required],
      passportpincode: ['', Validators.required],
      passportDocument: [null, Validators.required],
    });
  }
  ngOnInit() {  console.log('Initial Qualification Value:', this.registerForm.get('qualification')?.value);}

  onQualificationChange() {
    const qualificationValue = this.registerForm.get('qualification')?.value;
    console.log('Selected Qualification:', qualificationValue);  // Log the selected value
  }
  onIdentityTypeChange(event: any) {
    this.selectedIdentityType = event.value;
    if (this.selectedIdentityType === 'Temporary Address') {
      // Clear identity number for Temporary Address
      this.registerForm.get('identityNumber')?.clearValidators();
    } else {
      this.registerForm.get('identityNumber')?.setValidators([Validators.required]);
    }
    this.registerForm.get('identityNumber')?.updateValueAndValidity();
  }
  onFileChange(event: any) {
    const file = event.target.files[0];  // Get the first selected file
    if (file) {
      this.selectedFile = file;  // Store the selected file in the component
      console.log('Selected file:', file);
    }
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const formData = new FormData();
      
      // Append the form fields to FormData
      formData.append('identityType', this.registerForm.get('identityType')?.value);
      formData.append('identityNumber', this.registerForm.get('identityNumber')?.value);
      formData.append('expiryDate', this.registerForm.get('expiryDate')?.value);
      formData.append('address', this.registerForm.get('address')?.value);
      formData.append('city', this.registerForm.get('city')?.value);
      formData.append('state', this.registerForm.get('state')?.value);
      formData.append('country', this.registerForm.get('country')?.value);
      formData.append('pincode', this.registerForm.get('pincode')?.value);
      
      // Append the file to FormData if available
      if (this.selectedFile) {
        formData.append('identityDocument', this.selectedFile, this.selectedFile.name);
      }

      // Make an HTTP request to submit the form data with the file (Example API call)
      // this.http.post('your-api-endpoint', formData).subscribe(response => {
      //   console.log('Form Submitted successfully:', response);
      // });

      console.log('Form Data:', formData);
    } else {
      this.registerForm.markAllAsTouched();
    }

  }
}
