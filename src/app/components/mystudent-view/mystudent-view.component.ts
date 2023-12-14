import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyStudent } from 'src/app/model/Mystudent';
import { MystudentService } from 'src/app/service/mystudent.service';

@Component({
  selector: 'app-mystudent-view',
  templateUrl: './mystudent-view.component.html',
  styleUrls: ['./mystudent-view.component.css']
})
export class MystudentViewComponent implements OnInit{
  id:any;
  myStudent:MyStudent=new MyStudent();

  constructor(private service:MystudentService, private route:ActivatedRoute, private router:Router )
  {

  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    
    this.service.getMyStudent(this.id).subscribe(
      (response)=>
      {
        this.myStudent=response;
      }
    );
  }
  gotoMyStudentList()
  {
    this.router.navigate(['mystudents']);

  }
}
