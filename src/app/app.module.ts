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
import { HttpClientModule } from '@angular/common/http';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { AddCourseComponent } from './add-course/add-course.component'
import { FormsModule } from '@angular/forms';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';

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
  },
  {
    path:"viewCourse",
    component:ViewCourseComponent 
  },
  {
    path:"viewFriend",
    component:ViewFriendComponent 
  },
  {
    path:"addCourse",
    component:AddCourseComponent 
  },
  {
    path:"addFriend",
    component:AddFriendComponent 
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
    ViewCourseComponent,
    ViewFriendComponent,
    AddCourseComponent,
    AddFriendComponent,
    AdminNavbarComponent,
    EmployeeNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
