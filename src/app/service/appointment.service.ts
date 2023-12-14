import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl="http://localhost:9090/";
  
  constructor(private http:HttpClient) { }

  getAllAppointments(): Observable<any> {
    return this.http.get(this.baseUrl+"appointments");
  }
  createGuardianAppointment(guardianAppointment: Object): Observable<any> {
    return this.http.post(this.baseUrl + "appointment", guardianAppointment);
  }
  deleteGuardianAppointment(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+"appointment/"+id);
  }
}
