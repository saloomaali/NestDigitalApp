import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './hompage/hompage.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const myRouter:Routes = [
  {
    path:"",
    component : HompageComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"employeeLogin",
    component:EmployeePortalComponent
  },
  {
    path:"adminLogin",
    component:AdminLoginComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    EmployeePortalComponent,
    AdminLoginComponent,
    HomeNavbarComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
