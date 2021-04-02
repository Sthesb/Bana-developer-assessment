import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from 'src/app/Models/schedule';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {
  id:any
  scheduleForm = new Schedule();
  dbData:any
  constructor(private activatedRoute: ActivatedRoute, private dataservice: DataService, public route: Router) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id)
    this.id = this.activatedRoute.snapshot.params.id
    this.getData();
  }

  getData(){
    console.log(this.id)
    this.dataservice.getScheduleById(this.id).subscribe(res => {
      this.dbData = res
      console.log(res)
      this.scheduleForm = this.dbData
    })
  }
  updateSchedule(){
    this.dataservice.updateSchedule(this.id, this.scheduleForm).subscribe(res => {
      this.route.navigate(['']);
    })
  }
}
