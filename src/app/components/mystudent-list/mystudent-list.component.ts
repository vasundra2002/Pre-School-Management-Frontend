import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MystudentService } from 'src/app/service/mystudent.service';

@Component({
  selector: 'app-mystudent-list',
  templateUrl: './mystudent-list.component.html',
  styleUrls: ['./mystudent-list.component.css']
})
export class MystudentListComponent implements OnInit{
  mystudents:any[] | undefined;

  constructor(private service:MystudentService, private router:Router)
  {

  }
  ngOnInit(): void {
    this.service.getMyStudentList().subscribe(
      (response) => {
        console.log(response);
        this.mystudents=response;
      }
    );
  }

  addMyStudent()
  {
 
    this.router.navigateByUrl("add-mystudent");
  }

  updateMyStudent(id:any)
  {
    this.router.navigate(['update-mystudent',id]);
  }
  deleteMyStudent(id:any)
  {
    this.service.deleteMyStudent(id).subscribe(
      (response)=>{
        alert('Record deleted!!');
        this.ngOnInit(); //no need to refresh to get updated record after delete
        
      }
    );
    }
    viewMyStudent(id:any)
  {
    this.router.navigate(['view-mystudent',id]);
  }
  gotoDashboard()
  {
    this.router.navigate(['dashboard']);

  }
}
