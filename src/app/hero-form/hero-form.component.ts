import { Component, OnInit } from '@angular/core';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestore} from '@angular/fire/firestore';


import { Hero } from 'src/app/hero-form/hero';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {



model = new Hero(18, 'Dr IQ', 'test@test.com', 'Chuck Overstreet');

submitted = false;
  constructor(private fstore: AngularFirestore) { }

  ngOnInit() {
  }



onSubmit() {
  this.submitted = true;
this.fstore.collection('Student').add(this.model);
alert('added');

}

newHero() {
this.model = new Hero(42, '', '');
}
}
