import { Injectable } from '@angular/core';
import{Observable}  from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  sendingdatatoServices(g){
      console.log(g);
      this.http.post('/postingfromServices',g).subscribe();
  }

      recievingFromServer():Observable<any>{
          return this.http.get('/gettingData');
      }


      battingBaba(v){
    this.http.put('/sasa',v).subscribe();
            console.log(v);
      }

      battingManikanta(id):Observable<any>{
            return this.http.delete('/delete/'+id);
      }


}




