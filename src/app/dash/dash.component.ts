
import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../shared/apiservice.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  active: boolean;
  checked:boolean;
  switchMode :any;
  formvalue : FormGroup;
  showAdd:boolean
  showUpdate:boolean
  id:number;
  // employeeModelobj : PatientModel = new PatientModel();
  employeeData : any;

  constructor(private formbuilder: FormBuilder, private api:ApiService){
    this.formvalue = this.formbuilder.group({
      name : [''],
      id : [''],
      age:[''],
      address:[''],
      mobile:[''],
      date:[''],
      status:['']
    })
    this.getAllEmployee();
    document.body.className = "dash";
    this.switchMode = document.getElementById('switch-mode');
    this.checked =true;
    console.log(this.checked)
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }



  ngOnInit(){
    // tog();
  }

    dark(){
        if(this.checked) {
          this.checked = !this.checked;
          document.body.classList.add('dark');
          console.log(this.checked)
        }
        else {
          this.checked = !this.checked
          document.body.classList.remove('dark');
          console.log(this.checked)
        }
    }
    }





