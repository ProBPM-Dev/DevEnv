import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

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
  specializations=[
    { label: "Computer Science", value: 'cs' },
    { label: "Electronics & Communication", value: 'ece' },
    { label: "Other", value: 'other' },
  ];
  identityTypes = [
    { label: 'Driving License', value: 'Driving License' },
    { label: 'State ID', value: 'State ID' },
    { label: 'Temporary Address', value: 'Temporary Address' }
  ];
  workauths = [
    { label: "OPT Master's", value: 'opt' },
    { label: "i983 Master's", value: 'i983' },
    { label: "CPT Master's", value: 'cpt' },
    { label: "CAP H1B first time from India", value: 'cap' },
    { label: "H1B", value: 'h1b' },
    { label: "H4 EAD", value: 'h4ead' },
    { label: "GC", value: 'gc' },
    { label: "GC EAD", value: 'gcead' },
    { label: "US Citizen", value: 'us' },
  ];
  showUscisFields: boolean = false;
  showAttachmentFields = false;
  showJobDuties= false;
  showAttachmentField = false;
  showAttachmentField1 = false;
  showAttachmentField2 = true;
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
      uname: ['', Validators.required],
      ccomp: ['', Validators.required],
      qualificationDocument: [null, Validators.required],
      transcriptDocument: [null, Validators.required],
      workauth: [null, Validators.required],
      uscisNumber: ['', Validators.required],
      validFrom: ['', Validators.required],
      validTo: ['', Validators.required],
      attachDoc:[null, Validators.required],
      i20:[null, Validators.required],
    CPTdoc:[null, Validators.required],
    jobDuties: ['', Validators.required],
    h1bdoc:[null, Validators.required],
    i9doc:[null, Validators.required],
    i94doc:[null, Validators.required],
    specialization: [null, Validators.required],
    });
  }
  currentSection$: Observable<number> = of(1); // Observable of the current section
  currentSection: number = 1;  // Starting section value

  ngOnInit() {
    console.log('Initial Qualification Value:', this.registerForm.get('qualification')?.value);
    // Subscribe to the observable to keep currentSection updated
    this.currentSection$.subscribe((section: number) => {
      this.currentSection = section;
    });
  }


  // Function to go to the next section
  nextSection() {
    if (this.currentSection < 5) {  // Assuming you have only 2 sections
      this.currentSection++;
      this.updateCurrentSection();
    }
  }

  // Function to go to the previous section
  prevSection() {
    if (this.currentSection > 1) {  // Assuming you have only 2 sections
      this.currentSection--;
      this.updateCurrentSection();
    }
  }

  // Function to update the current section (you may also notify a service here)
  updateCurrentSection() {
    this.currentSection$ = of(this.currentSection);  // Update the observable
  }
  onQualificationChange() {
    const qualificationValue = this.registerForm.get('qualification')?.value;
    console.log('Selected Qualification:', qualificationValue);  // Log the selected value
  }
  onWorkAuthChange(event: any) {
     const selectedValue = event.value;
     console.log("Selected Work Authorization:", selectedValue);
     if (selectedValue === 'h1b') {
      // Show Job Duties field and one attachment for H1B
      this.showUscisFields = false; 
      this.showAttachmentFields = false;  // Hide USCIS fields for H1B
      this.showAttachmentField1 = false; 
      this.showJobDuties = true; 
      this.showAttachmentField = true;
    }
     else if (selectedValue === 'cpt') {
      this.showUscisFields = false;  
      this.showAttachmentFields = true; 
      this.showJobDuties = false;
      this.showAttachmentField1 = false; 
      this.showAttachmentField = false;
    } 
    else if (selectedValue === 'cap')
    {
      this.showUscisFields = false;  
      this.showAttachmentFields = false; 
      this.showJobDuties = true;
      this.showAttachmentField1 = true; 
      this.showAttachmentField = false;
    }
    else {
      // For other work authorizations, show all fields
      this.showUscisFields = ['opt', 'i983', 'h4ead', 'gc', 'gcead'].includes(selectedValue);
      this.showAttachmentFields = false;  // Hide attachment fields for other options
      this.showJobDuties = false;
      this.showAttachmentField1 = false; 
      this.showAttachmentField = false;
    }

  
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
