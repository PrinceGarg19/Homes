
import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
// import { ApiService } from '../shared/apiservice.service';
import { paymentModel } from './payment.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {




@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

  formvalue : FormGroup;
  showAdd:boolean
  showUpdate:boolean
  id:number;
  employeeModelobj : paymentModel = new paymentModel();
  employeeData : any;

  constructor(private formbuilder: FormBuilder,private http:HttpClient){
  }

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      id:[''],
      name : [''],
      doctor:[''],
      date:[''],
      charges:[],
      tax:[],
      discount:[],
      total:[]
    })
    this.getAllEmployee();
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:3000/payment")
    .pipe(map((res:any)=>{ return res;}))
  }
  postEmployee(data){
    return this.http.post<any>("http://localhost:3000/payment",data)
    .pipe(map((res:any)=>{ return res;}))
  }


  getAllEmployee(){
    this.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }

  PostEmployeeDetails(){
    this.employeeModelobj.id = this.formvalue.value.id;
    this.employeeModelobj.name = this.formvalue.value.name;
    this.employeeModelobj.doctor = this.formvalue.value.doctor;
    this.employeeModelobj.date = this.formvalue.value.date;
    this.employeeModelobj.charges = this.formvalue.value.charges;
    this.employeeModelobj.tax = this.formvalue.value.tax;
    this.employeeModelobj.discount = this.formvalue.value.discount;
    this.employeeModelobj.total = Number(this.formvalue.value.charges)+Number(this.formvalue.value.tax)-Number(this.formvalue.value.discount);

    this.postEmployee(this.employeeModelobj)
    .subscribe(res=>{
      console.log(res);
      alert("Payment Added Successfully")
      let ref = document.getElementById('cancel')
      this.formvalue.reset();
      ref?.click()
      this.getAllEmployee();
    },
    err=>{
      alert("something went wrong");
    }
    )
  }

  clickAddEmployee(){
    this.formvalue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }



}

