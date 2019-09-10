import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  Arr = [{Question: '$rootScope is the parent of all of the scope variables.', option: ['True', 'False']},
  {Question: 'Which components can be injected as a dependency in AngularJS?', option: ['Value', 'Factory', 'Services', 'All of above']},
  {Question: 'filter filter is applied to an expression using pipe character.', option: ['True', 'False']},
  {Question: 'AngularJS bootstraps itself during config phase.', option: ['True', 'False']},
  {Question: 'Which of the following is true about uppercase filter?', option:
            ['Uppercase filter is a function which takes text as input.', 'Uppercase filter converts a text to upper case text.',
            'Both of the above.', 'None of the above.']}
];
cnt = 0;
Cques = this.Arr[this.cnt].Question;
mcq = this.Arr[this.cnt].option;
pcnt = 0;
tcnt = 0;
styles: any;
radioSelected: string;
  constructor() {
    setInterval(() => {
        this.tcnt++;
 this.restart();
    }, 1000);
    }
  ngOnInit() {
  }
  SubmitTest()  {
    alert('Thank you');
  }
  SubmitAnswer() {
    this.cnt++;
    this.Cques = this.Arr[this.cnt].Question;
    this.mcq = this.Arr[this.cnt].option;
    this.tcnt = 0;
  }

  Skip() {
    this.cnt++;
    this.Cques = this.Arr[this.cnt].Question;
    this.mcq = this.Arr[this.cnt].option;
  }

  restart() {
    if ( this.tcnt === 60) {
      this.cnt = this.cnt + 40;
      this.Cques = this.Arr[this.cnt].Question;
      this.mcq = this.Arr[this.cnt].option;
      this.tcnt = 0;
     }
  }

}
