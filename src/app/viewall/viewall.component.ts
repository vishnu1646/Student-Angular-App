import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent {
constructor(private api:ApiService){
  api.fetchStudent().subscribe(
    (response:any)=>
    {
      this.data=response
    }
  )
}
data:any=[]
}
