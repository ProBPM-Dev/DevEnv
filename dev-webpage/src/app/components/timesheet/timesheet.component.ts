import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  ngOnInit(): void {
    this.updateDisplayedDays(); // Initialize displayed days
  }
  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dates: Date[] = [];
  formattedDates: { day: string, date: string }[] = [];
  hoursWorked: number[] = Array(7).fill(0); // Initialize hoursWorked array
  startDate: Date | null = null;
  endDate: Date | null = null;

  updateDates(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    if (!input) return;

    const inputDate = new Date(input);
    if (event.target && (event.target as HTMLInputElement).id === 'startDate') {
      this.startDate = inputDate;
    } else if (event.target && (event.target as HTMLInputElement).id === 'endDate') {
      this.endDate = inputDate;
    }

    if (this.startDate && this.endDate) {
      const dateDifference = Math.ceil((this.endDate.getTime() - this.startDate.getTime()) / (1000 * 3600 * 24));
      if (dateDifference !== 6) {
        console.error('Start Date and End Date should be exactly one week apart.');
        return;
      }

      this.updateFormattedDates();
    }
  }

  updateFormattedDates(): void {
    this.dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(this.startDate as Date);
      if (this.startDate) {
        date.setDate(this.startDate.getDate() + i);
      }
      return date;
    });

    this.formattedDates = this.dates.map((date, i) => ({
      day: this.days[i],
      date: date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
    }));
  }

  navigateWeek(direction: number): void {
    if (this.startDate) {
      this.startDate.setDate(this.startDate.getDate() + (direction * 7));
      this.endDate = new Date(this.startDate);
      this.endDate.setDate(this.endDate.getDate() + 6);
      this.updateFormattedDates();
    }
  }

  updateDisplayedDays(): void {
    this.formattedDates = this.days.map((day, i) => ({
      day: day,
      date: ''
    })); // Initially display days of the week
  }
}
