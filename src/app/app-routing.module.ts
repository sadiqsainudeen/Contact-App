import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [


  //redirect automatic from local host 4200 to conatctmanager page set path
  {
    path: '', redirectTo: '/contacts/admin', pathMatch: 'full'
  },

  //path for ContactManagerComponent
  {
    path: 'contacts/admin', component: ContactManagerComponent
  },

  //path for add component
  {
    path: 'contacts/add', component: AddContactComponent
  },

  //path for update component
  {
    path: 'contacts/edit/:contactId', component: UpdateContactComponent
  },

  //path for view component
  {
    path: 'contacts/view/:contactId', component: ViewContactComponent
  },

  //path for pagenot found
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
