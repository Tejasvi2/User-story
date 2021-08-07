import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { UserList } from '../core/interfaces/user-interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersData: any = [];
  subscription: Subscription; 

  constructor(public userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getUserListData();
  }
 
  getUserListData(){
    this.subscription = this.userService.getUserList().subscribe(
      (res)=> this.usersData = res,
      (error)=>error)
  }

  removeUserDetails(id:number){
   this.usersData =  this.usersData.filter((data:UserList) => data.id != id)
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
