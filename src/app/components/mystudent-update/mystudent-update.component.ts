import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyStudent } from 'src/app/model/Mystudent';
import { MystudentService } from 'src/app/service/mystudent.service';

@Component({
  selector: 'app-mystudent-update',
  templateUrl: './mystudent-update.component.html',
  styleUrls: ['./mystudent-update.component.css']
})
export class MystudentUpdateComponent implements OnInit {
  id: any;
  myStudent: MyStudent = new MyStudent();

  constructor(private service: MystudentService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getMyStudent(this.id).subscribe(
      (response) => {
        this.myStudent = response;
      }
    );
  }

  update() {
    this.service.updateMyStudent(this.myStudent, this.id).subscribe(
      (response) => {
        alert('Student data updated!! ');
        this.router.navigate(['mystudents']);
      }
    );
  }
  gotoMyStudentList()
  {
    this.router.navigate(['mystudents']);

  }
}
