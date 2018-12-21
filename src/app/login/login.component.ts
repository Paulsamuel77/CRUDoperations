import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private ds:Router) { }

  ngOnInit() {
  }


  testing(v){
    // console.log(v);
    this.ds.navigate(['/crud']);
  }

}
