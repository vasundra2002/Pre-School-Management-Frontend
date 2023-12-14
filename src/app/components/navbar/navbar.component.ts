import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  loginstatus:any;
  constructor(private router:Router,public userService:UserService){

  }
 //loginstatus:boolean=false;
  ngOnInit(): void {
    
    if(sessionStorage.getItem('login')=="true")
    {
    //alert();
    
    this.userService.isloggedin.next(true);
    }
    else
    {
     // alert();
    this.userService.isloggedin.next(false);
    }
  }
  

  logout()
  {
    
    sessionStorage.removeItem("login");
    this.userService.isloggedin.next(false);
   // this.loginstatus=false;
    alert("You have sucessfully logged out!!")
    this.router.navigate(['login'])
  }

}
