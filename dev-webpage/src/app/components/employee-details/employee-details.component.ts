import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements AfterViewInit {
  employeeForm: FormGroup;
  selectedFile: File | null = null;
  genders = [{label:'Male', value: 'M'}, {label:'Female', value: 'F'}, {label:'Other', value: 'O'}];
  isOpen = false;isOpen1 = false;isOpen2 = false;
  dropdownStates = {
    employee: false,
    identity: false,
    passport: false,
  };
  constructor(private fb: FormBuilder) {
     this.employeeForm = this.fb.group({
          fname: ['', Validators.required],
          mname: ['', Validators.required],
          lname: ['', [Validators.required]],
          gender: ['', Validators.required],
          dob: [null, Validators.required],
          mobile: ['', Validators.required],
          ssn: ['', Validators.required],
          identityType: ['', Validators.required],
          identityNumber: ['', [Validators.required]],
          expiryDate: ['', Validators.required],
          address: ['', Validators.required],
          addressline2: ['', ],
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
  selectGender(gender: string) {
    this.employeeForm.get('gender')?.setValue(gender);
  }
  onFileChange(event: any) {
    const file = event.target.files[0];  // Get the first selected file
    if (file) {
      this.selectedFile = file;  // Store the selected file in the component
      console.log('Selected file:', file);
    }}  
  ngOnInit(): void {
  }

    ngAfterViewInit() {
      // Ensure elements are loaded before manipulating them
      setTimeout(() => {
        document.querySelectorAll('.dropdown-toggle').forEach(button => {
          button.addEventListener('click', (event) => {
            const target = event.currentTarget as HTMLElement;
            const dropdownMenu = target.nextElementSibling;
            if (dropdownMenu) {
              dropdownMenu.classList.toggle('show');
            }
          });
        });
      }, 0);
    }
    toggleDropdown(dropdown: 'employee' | 'identity' | 'passport') {
      this.dropdownStates[dropdown] = !this.dropdownStates[dropdown];
    }
  
    isDropdownOpen(dropdown: 'employee' | 'identity' | 'passport'): boolean {
      return this.dropdownStates[dropdown];
    }
  }
  

 
  
  