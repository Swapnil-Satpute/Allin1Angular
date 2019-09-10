import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { defineBase } from '@angular/core/src/render3';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
course: any[];
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('/DBDemo').valueChanges().subscribe(DBDemo => this.course = DBDemo);
  }


}
