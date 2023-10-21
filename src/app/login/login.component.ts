import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | 'root';
  password: string;

  var: any;
  name:String;
  alert:boolean;


  constructor(private http: HttpClient, private router: Router) {
    document.body.className = "selector";
    this.alert=false;
  }

  signup(){
    this.router.navigate(['/signup']);
  }

  dismis(){
    this.alert = false;
  }


  onSubmit() {
    this.http.get<any>('http://localhost:3000/users?username=' + this.username + '&password=' + this.password ).subscribe(data => {
      if (data.length > 0) {
        this.alert=true;
        this.router.navigate(['./dashboard']);
      } else {
        this.alert=true;

      }
    });
  }
}
