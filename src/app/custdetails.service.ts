import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CustdetailsService {
  constructor(private http: Http) { }

  getdata() {
    console.log('In Function');
    console.log(this.http.get('../Custdetail.json').subscribe(data => {data.json();}));
    return this.http.get('../Custdetail.json').subscribe(data => {console.log(data.json()); });

  /*this.http.get('src/app/custdetails.service.ts')
   .toPromise()
   .then((data) => {
     this.users = data.json();
   });*/
 // console.log( '***user details are==' + this.users);
  }
}
