import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: any[] = [];

  // Declare properties here
  guardianName: string = '';
  guardianEmail: string = '';
  childName: string = '';
  childAge: string = '';
  phoneNumber: string = '';

  // Add this property to control the visibility of the details table
  showDetails: boolean = false;

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
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding record:', error);
      }
    );
  }

  // Add this method to toggle the visibility of the details table
 // toggleDetails() {
   // this.showDetails = !this.showDetails;
  //}

  deleteGuardianAppointment(id:any)
  {
    this.service.deleteGuardianAppointment(id).subscribe(
      (response)=>{
        alert('Record deleted!!');
        this.ngOnInit(); //no need to refresh to get updated record after delete
        
      }
    );
    }
}
