import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClassesComponent } from './components/classes/classes.component';
import { SchoolFacilitiesComponent } from './components/school-facilities/school-facilities.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutMoreComponent } from './components/about-more/about-more.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { ExploreComponent } from './components/explore/explore.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { MystudentComponent } from './components/mystudent/mystudent.component';
import { MystudentListComponent } from './components/mystudent-list/mystudent-list.component';
import { MystudentCreateComponent } from './components/mystudent-create/mystudent-create.component';
import { MystudentUpdateComponent } from './components/mystudent-update/mystudent-update.component';
import { MystudentViewComponent } from './components/mystudent-view/mystudent-view.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ClassesComponent,
    SchoolFacilitiesComponent,
    ContactComponent,
    CarouselComponent,
    AboutMoreComponent,
    SignupComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ExploreComponent,
    AppointmentComponent,
    MystudentComponent,
    MystudentListComponent,
    MystudentCreateComponent,
    MystudentUpdateComponent,
    MystudentViewComponent,
    FileUploadComponent,
    AppointmentDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
