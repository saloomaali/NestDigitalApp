import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {
empId = ""
firstName = ""
lastName = ""
houseNo = ""
houseName = ""
streetName = ""
pinCode = ""
district = ""
state = ""
country = ""
mobileNo = ""
emailId = ""
parentName = ""
gender = ""
highestDegree = ""
yearsOfExperience = ""
dateOfJoining = ""
username = ""
password = ""
confirmPassword = ""


readValue=()=>{

  let data:any = {"empId":this.empId, "firstName":this.firstName, "lastName":this.lastName, "houseNo":this.houseNo, "houseName":this.houseName, 
  "streetName":this.streetName,"pinCode":this.pinCode, "district":this.district,"state":this.state,"country":this.country, "mobileNo":this.mobileNo, "emailId":this.emailId, "parentName":this.parentName, "gender":this.gender,
   "highestDegree":this.highestDegree,  "yearsOfExperience": this.yearsOfExperience, "dateOfJoining":this.dateOfJoining, "username":this.username, "password":this.password,"confirmPassword":this.confirmPassword}
  if(this.password == this.confirmPassword){
    console.log(data)
    alert("Registerd Successfully")
  }
  else{
    alert("Password and confirm Password doesn't match")
  }

}

}
