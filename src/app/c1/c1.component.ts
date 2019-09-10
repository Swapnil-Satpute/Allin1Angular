import { Component, OnInit } from '@angular/core';
import {FormsModule } from  '@angular/forms';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
   // declarations
  months = ["January", "Feburary", "March", "April", "May",
  "June", "July", "August", "September",
  "October", "November", "December"];

isavailable = true;   //variable is set to true
arr1=[1,2,3,4,5];

arr2=[[1,2,3],[4,5,6],[7,8,9]];

emp=[{name:"Abc",id:111},
      {name:"Lmn",id:222},
      {name:"Xyz",id:333}
    ];

    cnt=0;
    //Functions
changemonths(event)
{
console.log("Changed month from Dropdown");
console.log(event);
alert("Changed month from the Dropdown");
}

myClickFunction(event)
{
alert("Button is clicked");
console.log(event);
}
  constructor() { }

  ngOnInit() {
  }
  changetext(event)
  {
    console.log("Changed text");
    console.log(event);

  }

  count(event)
  {
    this.cnt++;
    if(this.cnt>20)
    {
      alert("out of range");
      this.cnt=0;

    }

  }

}
