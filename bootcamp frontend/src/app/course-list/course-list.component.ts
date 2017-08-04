import { Component, OnInit } from '@angular/core';
import {DatacourseService} from '../services/datacourse.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private courselist:DatacourseService) { }

  ngOnInit() {}
  data_course:Object[] = this.courselist.course;

  newid:number = null;
  newcourse:string = "";
  newdosen:string= "";
  newstudent:string="";
  


   addcourse(){
    this.courselist.course.push({"id":this.newid, "course":this.newcourse,"dosen":this.newcourse,"student":this.newstudent});
    this.newid = null;
    this.newcourse="";
    this.newdosen="";
    this.newstudent="";
   
  
}
}


