import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {
  userDetail:any;
  constructor(private location:Location,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userDetail = this.location.getState();
    }
  

}
