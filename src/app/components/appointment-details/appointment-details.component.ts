import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  appointments: any[] = [];

  // Declare properties here
  guardianName: string = '';
  guardianEmail: string = '';
  childName: string = '';
  childAge: string = '';
  phoneNumber: string = '';

  constructor(private service: AppointmentService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAllAppointments().subscribe(
      (response) => {
        this.appointments = response;
      }
    );
  }

  save() {
    // Add a validation check to ensure that at least some fields are filled in
    if (!this.guardianName || !this.childName || !this.phoneNumber) {
      alert('Please fill in the required fields.');
      return;
    }

    const newAppointment = {
      guardianName: this.guardianName,
      guardianEmail: this.guardianEmail,
      childName: this.childName,
      childAge: this.childAge,
      phoneNumber: this.phoneNumber
    };

    this.service.createGuardianAppointment(newAppointment).subscribe(
      (response) => {
        alert('Record added');
        // Reset the form after successful submission
        this.resetForm();
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding record:', error);
      }
    );
  }

  // Function to reset the form fields
  resetForm() {
    this.guardianName = '';
    this.guardianEmail = '';
    this.childName = '';
    this.childAge = '';
    this.phoneNumber = '';
  }
}
