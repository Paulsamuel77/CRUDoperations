import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit {
   

  constructor(private posting:DataService) { }

  ngOnInit() {
  }

   
    postingtoTs(v){
      console.log(v);
      this.posting.sendingdatatoServices(v);

    }


      
}
