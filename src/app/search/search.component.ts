import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
constructor(private api:ApiService){}
admno=""
search:any=[]
readValues=()=>
{
  let data:any={"admno":this.admno}
  console.log(data)
  this.api.searchStudent(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.legth==0){
        alert("Invalid")
      }
      else{
        this.search=response
      }
    }
  )
}
deletebtn=(id:any)=>
{
  let data:any={"id":id}
this.api.deletestudent(data).subscribe(
  (gen:any)=>{
    console.log(gen)
    if (gen.status=="success") {
      alert("Student deleted")
      window.location.reload()
      
    } else {
alert("Something Wrong")      
    }
  }
)
}
}
