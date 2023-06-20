import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContact';
import { MyGroup } from 'src/models/myGroup';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId:string=''
  contact:MyContact = {} as MyContact
  groups:MyGroup[]= [] as MyGroup[]

  constructor(private activateRoute:ActivatedRoute, private api:ApiService, private router:Router){}


  ngOnInit(): void {
    //get contact id from url parametere using ActivatedRoute class
  this.activateRoute.params
  .subscribe((data)=>{
    console.log(data['contactId']);
    this.contactId= data['contactId']
    
  })

  //call api for getting particular contact
  this.api.viewContact(this.contactId).subscribe((data:any)=>{
  this.contact = data
  console.log(this.contact);


  })
// call api for getting all grups from service class
  this.api.getAllGroups()
    .subscribe((data:any)=>{
      this.groups = data

    })
  }
  
//update Contact
updateContact(){
  //api call for updating the existing conatct
  this.api.updateContact(this.contactId,this.contact)
  .subscribe((data:any)=>{
    this.router.navigateByUrl('')

  })
}

}
  