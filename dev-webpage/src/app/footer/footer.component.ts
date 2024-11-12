import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer: any;
  currentSection$: Observable<number> = of(1); // Observable of the current section
  currentSection: number = 1;  // Starting section value

  constructor(private fb: FormBuilder) {
    this.footer = this.fb.group({});
  }

  ngOnInit(): void {
    // Subscribe to the observable to keep currentSection updated
    this.currentSection$.subscribe((section: number) => {
      this.currentSection = section;
    });
  }

  // Function to go to the next section
  nextSection() {
    if (this.currentSection < 2) {  // Assuming you have only 2 sections
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
}
