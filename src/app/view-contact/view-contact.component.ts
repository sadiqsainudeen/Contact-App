import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
  [x: string]: any;


  contactId:string=""
  contact:any
  groupId:any
  groupName:any

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){

  }
  ngOnInit() : void {
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.contactId =  data.contactId

    })
 
    //api call
    this.api.viewContact(this.contactId)
    .subscribe((data:any)=>{
      this.contact = data
      this.groupId= data.groupId
      console.log(this.groupId);

      //group name api
this.api.getGroupName(this.groupId)
.subscribe((result:any)=>{
  this.groupName = result.name;
  console.log(result);
  
  
})
      
    })

  }

}
