import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent {

  EmpId = ""
  password = ""

  constructor(private route:Router){}

  readValue=()=>{
    let data:any = {"EmpId" : this.EmpId, "password" : this.password}

    if(this.EmpId == "1122" && this.password == "1234"){

      this.route.navigate(['/addCourse'])
      
    }

  }

}
