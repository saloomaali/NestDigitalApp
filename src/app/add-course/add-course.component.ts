import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle = ""
  courseDescription = ""
  courseDuration = ""
  courseDate = ""
  courseVenue = ""

  constructor(private api:ApiService){}

  readCourseValue=()=>{

    let course:any = {"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}

    this.api.addCourse(course).subscribe(

      (response:any)=>{
        console.log(response)

        if(response.status == "success"){

          this.courseTitle = ""
          this.courseDescription = ""
          this.courseDuration = ""
          this.courseDate = ""
          this.courseVenue = ""

        }
      }
    )

  }


}
