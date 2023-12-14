import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyStudent } from 'src/app/model/Mystudent';
import { MystudentService } from 'src/app/service/mystudent.service';

@Component({
  selector: 'app-mystudent-create',
  templateUrl: './mystudent-create.component.html',
  styleUrls: ['./mystudent-create.component.css']
})
export class MystudentCreateComponent {
  myStudent:MyStudent=new MyStudent();

  constructor(private service:MystudentService, private router:Router)
  {

  }
  

  save()
  {
    this.service.createMyStudent(this.myStudent).subscribe(
      (response)=>{
        alert('Record added');
	this.router.navigate(['mystudents']);
      }
    );

    
  }
  gotoMyStudentList()
  {
    this.router.navigate(['dashboard']);

  }

}
