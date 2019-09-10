import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C4Component } from './c4/c4.component';


import { AutoDirectiveDirective } from './directive/auto-directive.directive';
import { C3Component } from './c3/c3.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HomeComponent } from './home/home.component';
import { CustinfoComponent } from './custinfo/custinfo.component';
import { CustDetailsComponent } from './cust-details/cust-details.component';
import { CustOrderComponent } from './cust-order/cust-order.component';
import { EditCustComponent } from './edit-cust/edit-cust.component';
import { OrderComponent } from './order/order.component';


import {Routes, RouterModule} from '@angular/router';
import {CustdetailsService} from './custdetails.service';
import {HttpModule} from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  { path: 'Custinfo', component: CustinfoComponent,
        children: [
                    { path: 'CustDetails', component: CustDetailsComponent},
                    { path: 'CustOrder', component: CustOrderComponent},
                    { path: 'EditCust', component: EditCustComponent}
                  ]
  },
  {path: 'Order', component: OrderComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
  AutoDirectiveDirective,
  C3Component,
  HeroFormComponent,
  HomeComponent,
  CustinfoComponent,
  CustDetailsComponent,
  CustOrderComponent,
  EditCustComponent,
  OrderComponent,
  C4Component,

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule
  ],
  providers: [CustdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
