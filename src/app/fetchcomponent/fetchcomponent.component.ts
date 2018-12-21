import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fetchcomponent',
  templateUrl: './fetchcomponent.component.html',
  styleUrls: ['./fetchcomponent.component.css']
})
export class FetchcomponentComponent implements OnInit {

  name:string;
  age:string;
  roll:string;
  ind:string;
  sam:any[]=[];
  h:boolean=false;
  constructor(private getting:DataService) { }
  data:any[]=[];
  ngOnInit() {

    this.getting.recievingFromServer().subscribe(x=>this.data=x);
  }


  editdata(i,index){
    this.ind=index;
    this.h=true;
    this.sam=i;
    console.log(this.sam);
     }


     editingData(){
       this.getting .battingBaba(this.sam);
     }


     deleteData(id){
        this.getting.battingManikanta(id).subscribe();
     }
}
