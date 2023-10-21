import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {datatypes} from '.././datatypes';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  d:datatypes[];
  person:string;

  constructor(private http: HttpClient, private router: Router) {
    this.person = 'Patient';
    this.d = [
    {
      id:null,
      name:null,
      age:null,
      sex:null,
      mobile:null,
      email:null,
      aadhar:null,
      pan:null
    }
  ]
  }

  ngOnInit(): void {
    if(this.person == 'Patient'){
    this.http.get<any>('http://localhost:3000/patientdata?name=User 1').subscribe((data) =>{
      this.d = data;
      // console.log(this.d);
    })}
    if(this.person == 'Employee'){
      this.http.get<any>('http://localhost:3000/employeedata').subscribe((data) =>{
        this.d = data;
      })}

  }




}
