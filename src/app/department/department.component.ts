import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  constructor(private router: Router){}


  fun(){
    this.router.navigate(['./more']);
  }

}
