import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MystudentService {

  private baseUrl="http://localhost:9090/";
  
  constructor(private http:HttpClient) { }

  getMyStudentList():Observable<any>
  {
    return this.http.get(this.baseUrl+"mystudents")
  }


  getMyStudent(id:any):Observable<any>
  {
    return this.http.get(this.baseUrl+"mystudent/"+id);
  }

  createMyStudent(mystu:Object):Observable<any>
  {
    return this.http.post(this.baseUrl+"mystudent",mystu);
  } 

  updateMyStudent(mystu:Object,id:any):Observable<any>
  {
    return this.http.put(this.baseUrl+"mystudent/"+id,mystu);
  } 

  deleteMyStudent(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+"mystudent/"+id);
  }

}
