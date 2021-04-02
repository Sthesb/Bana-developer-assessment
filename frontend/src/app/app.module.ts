import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { CreateScheduleComponent } from './components/schedules/create-schedule/create-schedule.component';
import { EditScheduleComponent } from './components/schedules/edit-schedule/edit-schedule.component';



const appRoutes : Routes = [
  { path: '', component:SchedulesComponent},
  { path: 'create', component:CreateScheduleComponent},
  { path: 'edit/:id', component:EditScheduleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SchedulesComponent,
    CreateScheduleComponent,
    EditScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
