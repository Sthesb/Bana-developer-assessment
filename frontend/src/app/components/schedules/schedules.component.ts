import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  schedules: any
  

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.getAllSchedules();
    
  }

  getAllSchedules(){
    this.dataservice.getAllSchedules().subscribe(res => {
      this.schedules = res
      
    })
  }

  deleteSchedule(id){
    this.dataservice.destroySchedule(id).subscribe(res => {
      this.getAllSchedules();
    })
  }
}


