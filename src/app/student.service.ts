import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class StudentService  {
  
  constructor() { }

students : Student[] = 
  [
    {
      id:1,
      name:"sambit",
      age:24,
      collegeName:"iter",
      married:"No"
    },
    {
      id:2,
      name:"munna",
      age:28,
      collegeName:"iit",
      married:"Yes"

    },
    {
      id:3,
      name:"bishnu",
      age:30,
      collegeName:"kiit",
      married:"Yes"

    },
    {
      id:4,
      name:"amit",
      age:28,
      collegeName:"bit",
      married:"No"

    },
    {
      id:5,
      name:"Dharam",
      age:35,
      collegeName:"navadoya",
      married:"Yes"

    }
  ];
  public getStudents(): Observable<Student[]> {

    let studentObservale = Observable.create(
      observer => 
      {
        observer.next(this.students);
        console.log("done");
        // observer.complete();
      }
    )
    
    return studentObservale;

    } 
}
