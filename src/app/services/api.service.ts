import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getallGroups() {
    throw new Error('Method not implemented.');
  }
  baseUrl:string = 'http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }

  //function to get all conatcts
  getAllContacts():Observable<MyContact>{
   return this.http.get(this.baseUrl)
  }


//function for view a particular contact
  viewContact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)

  }


//function for getting a particular group
getGroupName(groupId:string){
  return this.http.get('http://localhost:3000/groups/'+groupId)
}

//funstion for fetch all groups from http://localhost:3000/groups
getAllGroups(){
 return this.http.get('http://localhost:3000/groups')
}

//function for adding new contact to server
addContact(contactBody:any){
  return this.http.post(this.baseUrl,contactBody)
}



//Function for delete contact
deleteContact(contactId:any){
  return this.http.delete(`${this.baseUrl}/${contactId}`)

}

}



