import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/Models/schedule';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {
  
  scheduleForm = new Schedule();
  constructor(private dataservice: DataService, public route: Router) { }

  ngOnInit(): void {
  }

  createSchedule(){
    console.log(this.scheduleForm)

    this.dataservice.createSchedule(this.scheduleForm).subscribe(res => {
      this.route.navigate(['']);
    })
  }
}
