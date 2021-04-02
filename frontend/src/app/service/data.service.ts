import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

const BackendAPI = environment.api;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }


  // Schedules

  getAllSchedules(){
    return this.httpClient.get('http://127.0.0.1:8000/api/schedules');
  }

  getScheduleById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/schedules/'+id);
  }

  createSchedule(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/schedules', data);
  }

  updateSchedule(id, data){
    return this.httpClient.put('http://127.0.0.1:8000/api/schedules/'+id, data);
  }

  destroySchedule(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/schedules/'+id);
  }


  
}
