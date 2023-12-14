import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClassesComponent } from './components/classes/classes.component';
import { AboutMoreComponent } from './components/about-more/about-more.component';
import { ContactComponent } from './components/contact/contact.component';
//import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SchoolFacilitiesComponent } from './components/school-facilities/school-facilities.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { authGuard } from './components/authentication.guard';
import { MystudentListComponent } from './components/mystudent-list/mystudent-list.component';
import { MystudentCreateComponent } from './components/mystudent-create/mystudent-create.component';
import { MystudentUpdateComponent } from './components/mystudent-update/mystudent-update.component';
import { MystudentViewComponent } from './components/mystudent-view/mystudent-view.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
//import { CarouselComponent } from './components/carousel/carousel.component';


const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'classes',component:ClassesComponent},
  {path:'read more',component:AboutMoreComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'explore',component:ExploreComponent},
  {path:'facilities',component:SchoolFacilitiesComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'mystudents',component:MystudentListComponent},
  {path:'add-mystudent',component:MystudentCreateComponent},
  {path:'update-mystudent/:id',component:MystudentUpdateComponent},
  {path:'view-mystudent/:id',component:MystudentViewComponent},
  {path:'mystudent-list',component:MystudentListComponent},
  {path:'appointment-details',component:AppointmentDetailsComponent},
  {path:'home-page',component:HomePageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
