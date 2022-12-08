import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallComponent } from './viewall/viewall.component';
import { SearchComponent } from './search/search.component';
const myRoute:Routes=[
  {
    path:"",
    component:NavbarComponent
  },
  {
    path:"add",
    component:StudentEntryComponent
  },
  {
    path:"view",
    component:ViewallComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    NavbarComponent,
    ViewallComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
