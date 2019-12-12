import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  data: any;
  constructor(public navCtrl: NavController) {
    this.data = {
      text: ""
    };
  }
}
