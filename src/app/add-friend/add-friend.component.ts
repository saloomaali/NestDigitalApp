import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {

  name =""
  friendName = ""
  friendNickName = ""
  DescribeYourFriend = ""

  constructor(private api:ApiService){}

  readFriendValue=()=>{

    let friend:any = {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendName,"DescribeYourFriend":this.DescribeYourFriend}
  
    this.api.addFriend(friend).subscribe(

      (response:any)=>{


        console.log(response)
      }
    )
  
  }


  

}
