import { Component, OnInit } from '@angular/core';
import {CustdetailsService} from 'src/app/custdetails.service';
import {HttpModule} from '@angular/http';

@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css']
})
export class CustDetailsComponent implements OnInit {
data: any;
  constructor(private cd: CustdetailsService,private httpService: HttpModule) { }

  ngOnInit() {
    this.data = this.cd.getdata();
    console.log('*********');
    console.log(JSON.stringify(this.data));


  }

}
