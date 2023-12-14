import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../model/Login';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../model/Signup';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:9090/student/auth/";

  isloggedin = new BehaviorSubject<boolean>(false);

  registration(obj:Signup):Observable<any>
  {
   const headers={'content-type':'application/json'};
   const body=JSON.stringify(obj);
   return this.http.post(this.baseUrl+'signup',body,{'headers':headers});
  }


  login(obj:Login):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    return this.http.post(this.baseUrl+'signin',body,{'headers':headers});
  }
  
}
