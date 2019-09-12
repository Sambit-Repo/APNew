import { Component,OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'APNew';

  students = [];

  constructor(private myService : StudentService){}

  ngOnInit()
  {
    let a = this.myService.getStudents();
    console.log(a);
    console.log(typeof a);   
    
    a.subscribe( 
      (b)=>{
        this.students.push(b);
        console.log(b);
      }
    )
    console.log(".........................................................");
    this.doIt();
    console.log(".........................................................");
    
  } 

  doIt()
{
  for(let i = 0 ; i<this.students.length;i++) 
  {
    console.log(i);
    console.log(this.students[i]);
    console.log("done");
  }
}
}
