import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private service:UserService, private router:Router)
  {

  }
  ngOnInit(): void {
   if(sessionStorage.getItem("login") =="true")
   {
      //alert();
      this.router.navigate(['dashboard']);
    }
  }
  
  
  loginProcess(obj:any)
  {
    console.log(obj.value)
    this.service.login(obj.value).subscribe(
      (response)=>{
        console.log(response);
        alert('Login successfull');
        sessionStorage.setItem("login","true");
        this.service.isloggedin.next(true)
        this.router.navigate(['dashboard']);
      },

      (error)=>{
        this.service.isloggedin.next(false);
        alert('problem in login');
      }
    );
  }
  
  
  
  
}


